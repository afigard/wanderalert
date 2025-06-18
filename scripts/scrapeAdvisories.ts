import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

const URL =
  "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html";

type AdvisoryEntry = {
  country: string;
  level: string;
  date: string;
};

async function scrapeAdvisories(): Promise<AdvisoryEntry[]> {
  const res = await axios.get(URL);
  const $ = cheerio.load(res.data);

  const rows = $("table tbody tr");
  const advisories: AdvisoryEntry[] = [];

  rows.each((_, tr) => {
    const cells = $(tr).find("td");
    if (cells.length < 3) return;

    let country = $(cells[0]).text().trim();
    const rawLevel = $(cells[1]).text().trim();
    const date = $(cells[2]).text().trim();

    country = country.replace(/ Travel Advisory$/, "");

    const levelMatch = rawLevel.match(/Level\s(\d)/);
    const level = levelMatch ? levelMatch[1] : null;

    if (country && level && date) {
      advisories.push({ country, level, date });
    }
  });

  return advisories;
}

(async () => {
  const data = await scrapeAdvisories();
  fs.writeFileSync(
    "lib/advisoryData.ts",
    `const advisoryData = ${JSON.stringify(
      data,
      null,
      2
    )};\n\nexport default advisoryData;`
  );
  console.log(`✅ Generated advisoryData.ts with ${data.length} entries.`);
})();
