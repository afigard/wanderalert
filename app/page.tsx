"use client";

import { useState } from "react";
import advisoryData from "@/lib/advisoryData";
import countryMeta from "@/lib/countryMeta";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [result, setResult] = useState<null | (typeof advisoryData)[0]>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = advisoryData.find(
      (d) => d.country.toLowerCase() === selectedCountry.toLowerCase()
    );
    setResult(
      entry || {
        country: selectedCountry,
        alert: "Unknown",
        level: "No data found.",
      }
    );
  };

  const countries = advisoryData
    .map((d) => d.country)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => a.localeCompare(b));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold">WanderAlert</h1>
      <h1 className="text-xl font-medium mb-10 text-gray-400">
        Travel Advisories
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-0.5">
            Destination Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-2 bg-[#1a1a1a] text-white border border-[#444] rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {countryMeta[country as keyof typeof countryMeta]?.emoji || ""}{" "}
                {country}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={!selectedCountry}
          className="w-full bg-amber-500 text-white p-2 rounded hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check Advisory
        </button>
      </form>

      {result && (
        <div className="mt-8 border p-4 rounded w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Advisory</h2>
          <p>
            <strong>Level:</strong> {result.level}
          </p>
          <p>
            <strong>Alert:</strong> {result.alert}
          </p>
        </div>
      )}
    </main>
  );
}
