"use client"

import { useState } from "react"
import Image from "next/image"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

/* ===================== TYPES ===================== */

type PlacementStats = {
  name: string
  value: number
  unit: string
  fill: string
}

type SectorData = {
  name: string
  value: number
}

type PlacementYearData = {
  stats: PlacementStats[]
  sectors: SectorData[]
}

/* ===================== DATA ===================== */
/* Last 5 Placement Years */

const placementDataByYear: Record<string, PlacementYearData> = {
  "2024": {
    stats: [
      { name: "Placement %", value: 90, unit: "%", fill: "#2563eb" },
      { name: "Highest Package", value: 38, unit: " LPA", fill: "#facc15" },
      { name: "Average Package", value: 10, unit: " LPA", fill: "#059669" },
    ],
    sectors: [
      { name: "IT & Analytics", value: 40 },
      { name: "Consulting", value: 28 },
      { name: "Finance", value: 17 },
      { name: "Operations", value: 15 },
    ],
  },

  /* Placeholder years (add real data later) */
  "2023": { stats: [], sectors: [] },
  "2022": { stats: [], sectors: [] },
  "2021": { stats: [], sectors: [] },
  "2020": { stats: [], sectors: [] },
}

const recruiters = [
  { name: "Deloitte", logo: "/recruiters/deloitte.png" },
  { name: "Accenture", logo: "/recruiters/accenture.png" },
  { name: "TCS", logo: "/recruiters/tcs.png" },
  { name: "Infosys", logo: "/recruiters/infosys.png" },
  { name: "Wipro", logo: "/recruiters/wipro.png" },
  { name: "EY", logo: "/recruiters/ey.png" },
]

/* ===================== COMPONENT ===================== */

export default function PlacementSection() {
  const years = Object.keys(placementDataByYear).sort(
    (a, b) => Number(b) - Number(a)
  )

  const [selectedYear, setSelectedYear] = useState(years[0])
  const { stats, sectors } = placementDataByYear[selectedYear]

  return (
    <section className="pt-12 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Placements
          </h2>

          <p className="text-foreground/60 max-w-3xl mx-auto">
            Five-year placement performance, salary trends, and sector-wise hiring distribution.
          </p>

          <div className="mt-6 flex justify-center">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-60 border rounded-lg px-4 py-2 text-sm bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  Placement Year {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        {stats.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ===== LEFT : RADIAL GRAPH ===== */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-6">
                Placement Snapshot
              </h3>

              <div className="h-[320px] w-full max-w-md">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    data={stats}
                    innerRadius="30%"
                    outerRadius="90%"
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar dataKey="value" cornerRadius={12} background />
                    <Tooltip
                      formatter={(value: number, _n: string, p: any) =>
                        `${value}${p.payload.unit}`
                      }
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="mt-6 space-y-2 text-sm">
                {stats.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span>
                      {item.name}:{" "}
                      <span className="font-semibold">
                        {item.value}
                        {item.unit}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== RIGHT : SECTOR-WISE ===== */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Sector-wise Hiring
              </h3>

              <div className="space-y-6">
                {sectors.map((sector) => (
                  <div key={sector.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{sector.name}</span>
                      <span className="font-medium">{sector.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div
                        className="h-2 bg-primary rounded-full"
                        style={{ width: `${sector.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* ================= NO DATA STATE ================= */
          <div className="text-center py-20 text-foreground/60">
            Placement data for {selectedYear} will be updated soon.
          </div>
        )}

        {/* ================= RECRUITERS SCROLL ================= */}
        <div className="mt-24">
          <h3 className="text-center text-xl font-semibold mb-20">
            Our Hiring Partners
          </h3>

          <div className="relative overflow-hidden">
            <div className="flex gap-20 animate-marquee items-center">
              {[...recruiters, ...recruiters].map((company, idx) => (
                <div
                  key={idx}
                  className="h-16 min-w-[160px] flex items-center justify-center"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={30}
                    className="h-[44px] w-auto object-contain transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
