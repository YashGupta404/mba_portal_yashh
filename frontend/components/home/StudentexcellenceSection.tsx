"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

/* ===================== TYPES ===================== */

type SpecializationData = {
  specialization: string
  highestCGPA: number
  hiringCompanies: string[]
}

/* ===================== DATA ===================== */

const academicExcellenceByYear: Record<string, SpecializationData[]> = {
  "2024": [
    {
      specialization: "Finance & Strategy",
      highestCGPA: 9.6,
      hiringCompanies: ["Goldman Sachs", "JP Morgan", "Deloitte"],
    },
    {
      specialization: "Technology & Innovation",
      highestCGPA: 9.8,
      hiringCompanies: ["Microsoft", "Amazon", "Accenture"],
    },
    {
      specialization: "Marketing & Analytics",
      highestCGPA: 9.2,
      hiringCompanies: ["Unilever", "P&G", "Kantar"],
    },
    {
      specialization: "Operations & Supply Chain",
      highestCGPA: 9.0,
      hiringCompanies: ["Amazon", "Flipkart", "Tata Motors"],
    },
    {
      specialization: "Business Analytics",
      highestCGPA: 9.5,
      hiringCompanies: ["BCG Gamma", "Mu Sigma", "Deloitte"],
    },
  ],

  "2023": [
    {
      specialization: "Finance & Strategy",
      highestCGPA: 9.4,
      hiringCompanies: ["EY", "KPMG", "Deloitte"],
    },
    {
      specialization: "Technology & Innovation",
      highestCGPA: 9.7,
      hiringCompanies: ["Amazon", "Microsoft", "Infosys"],
    },
    {
      specialization: "Marketing & Analytics",
      highestCGPA: 9.1,
      hiringCompanies: ["Nielsen", "Kantar", "Unilever"],
    },
    {
      specialization: "Operations & Supply Chain",
      highestCGPA: 8.9,
      hiringCompanies: ["Flipkart", "Reliance", "Tata"],
    },
    {
      specialization: "Business Analytics",
      highestCGPA: 9.3,
      hiringCompanies: ["ZS", "Mu Sigma", "Deloitte"],
    },
  ],

  "2022": [],
  "2021": [],
  "2020": [],
}

/* ===================== CUSTOM X-AXIS TICK ===================== */

const CustomXAxisTick = ({ x, y, payload }: any) => {
  const [line1, line2] = payload.value.split(" & ")

  return (
    <g transform={`translate(${x},${y + 8})`}>
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill="#475569"
        fontSize={10}
        className="text-[8px] sm:text-[10px] md:text-[12px]"
      >
        <tspan x="0" dy="0">{line1}</tspan>
        {line2 && <tspan x="0" dy="12">& {line2}</tspan>}
      </text>
    </g>
  )
}

/* ===================== COMPONENT ===================== */

export default function StudentAcademicExcellenceSection() {
  const years = Object.keys(academicExcellenceByYear).sort(
    (a, b) => Number(b) - Number(a)
  )

  const [selectedYear, setSelectedYear] = useState(years[0])
  const [showAll, setShowAll] = useState(false)

  const data = academicExcellenceByYear[selectedYear]

  const averageCGPA =
    data.length > 0
      ? (
        data.reduce((sum, d) => sum + d.highestCGPA, 0) / data.length
      ).toFixed(2)
      : "0.00"

  const visibleSpecializations = showAll ? data : data.slice(0, 3)

  return (
    <section className="pt-24 pb-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Student Academic Excellence
          </h2>

          <p className="text-foreground/60 max-w-3xl mx-auto">
            Comparative analysis of academic performance across specializations,
            highlighting peak CGPA achievers and hiring outcomes.
          </p>

          <div className="mt-6 flex justify-center">
            <select
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value)
                setShowAll(false)
              }}
              className="w-60 border rounded-lg px-4 py-2 text-sm bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  Academic Year {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        {data.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ===== LEFT : BAR CHART ===== */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Highest CGPA by Specialization
              </h3>

              <div className="h-[320px] sm:h-[380px] lg:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="specialization"
                      tick={<CustomXAxisTick />}
                      interval={0}
                      height={70}
                    />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />

                    {/* ===== AVERAGE CGPA LINE (ON TOP) ===== */}
                    <ReferenceLine
                      y={Number(averageCGPA)}
                      isFront
                      stroke="#facc15"
                      strokeDasharray="6 4"
                      strokeWidth={3}
                      label={{
                        value: `Average CGPA: ${averageCGPA}`,
                        position: "top",
                        fill: "#ca8a04",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    />

                    <Bar
                      dataKey="highestCGPA"
                      fill="#2563eb"
                      radius={[6, 6, 0, 0]}
                      barSize={32}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ===== RIGHT : HIRING INFO ===== */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Hiring Based on Highest CGPA
              </h3>

              <div className="space-y-6">
                {visibleSpecializations.map((item) => (
                  <div
                    key={item.specialization}
                    className="p-5 rounded-xl bg-background shadow-sm border"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">
                        {item.specialization}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        CGPA: {item.highestCGPA}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/70">
                      Companies hiring top CGPA performers:
                    </p>

                    <p className="text-sm mt-1 text-foreground/90">
                      {item.hiringCompanies.join(", ")}
                    </p>
                  </div>
                ))}
              </div>

              {data.length > 3 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-primary font-medium hover:underline"
                  >
                    {showAll ? "Show Less" : "Read More"}
                  </button>
                </div>
              )}
            </div>

          </div>
        ) : (
          <div className="text-center py-20 text-foreground/60">
            Academic performance data for {selectedYear} will be updated soon.
          </div>
        )}

      </div>
    </section>
  )
}
