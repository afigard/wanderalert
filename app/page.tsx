"use client";

import { useEffect, useState } from "react";
import advisoryData from "@/lib/advisoryData";
import countryMeta from "@/lib/countryMeta";
import { FaExclamationTriangle, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

const levelMeta: Record<string, { emoji: string; note: string }> = {
  "1": { emoji: "🟢", note: "Exercise Normal Precautions" },
  "2": { emoji: "🟡", note: "Exercise Increased Caution" },
  "3": { emoji: "🟠", note: "Reconsider Travel" },
  "4": { emoji: "🔴", note: "Do Not Travel" },
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [result, setResult] = useState<null | (typeof advisoryData)[0]>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      dark ? "#0a0a0a" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      dark ? "#ededed" : "#171717"
    );
  }, [dark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = advisoryData.find(
      (d) => d.country.toLowerCase() === selectedCountry.toLowerCase()
    );
    setResult(
      entry || {
        country: selectedCountry,
        level: "Unknown",
        date: "Unknown",
      }
    );
  };

  const countries = advisoryData
    .map((d) => d.country)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => a.localeCompare(b));

  return (
    <main className="min-h-dvh flex flex-col justify-between px-4 py-6 sm:py-8">
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto px-2 sm:px-4 sm:py-2">
        <FaExclamationTriangle className="text-2xl text-amber-500" />
        <button
          onClick={() => setDark(!dark)}
          className="text-foreground hover:opacity-80 transition cursor-pointer"
        >
          {dark ? (
            <FaSun size={32} className="h-5 w-5 sm:h-7 sm:w-7" />
          ) : (
            <FaMoon size={32} className="h-5 w-5 sm:h-7 sm:w-7" />
          )}
        </button>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center pt-6 pb-10 px-2">
        <h1 className="text-3xl font-bold">WanderAlert</h1>
        <h2
          className={`text-xl font-medium mb-10 ${
            dark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Travel Advisories
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-0.5">
              Destination Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className={`w-full p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                dark
                  ? "bg-neutral-900 text-white border-neutral-700"
                  : "bg-neutral-100 text-black border-neutral-300"
              }`}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {countryMeta[country as keyof typeof countryMeta]?.emoji ||
                    ""}{" "}
                  {country}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={!selectedCountry}
            className="w-full bg-amber-500 text-white p-2 rounded-xl hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Check Advisory
          </button>
        </form>

        {result && (
          <div
            className={`mt-8 border p-4 rounded-xl w-full max-w-md shadow-md ${
              dark
                ? "bg-neutral-900 text-white border-neutral-600"
                : "bg-neutral-100 text-black border-neutral-400"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Result</h2>
            <p>
              <strong>Level:</strong> {levelMeta[result.level]?.emoji}{" "}
              {result.level} ({levelMeta[result.level]?.note})
            </p>
            <p>
              <strong>Date updated:</strong> 📅 {result.date}
            </p>
          </div>
        )}
      </div>

      <footer className="flex justify-between items-center text-xs text-neutral-500 px-4 max-w-7xl mx-auto w-full mt-8 sm:mt-10">
        <span>© {new Date().getFullYear()} WanderAlert.</span>
        <Link
          href="https://instagram.com/ad.fgrd"
          target="_blank"
          className="underline hover:opacity-80"
        >
          Contact
        </Link>
      </footer>
    </main>
  );
}
