"use client"

import Image from "next/image"
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

import { TrendingUp, Target, Users, Award } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"

/* ===================== DATA ===================== */

const statsCards = [
  { label: "100%", subtext: "Placement Rate", icon: TrendingUp },
  { label: "₹18L", subtext: "Avg. Package", icon: Target },
  { label: "150+", subtext: "Recruiting Companies", icon: Users },
  { label: "₹45L", subtext: "Highest Package", icon: Award },
]

const placementStats = [
  { name: "Placement %", value: 100, unit: "%", fill: "#2563eb" },
  { name: "Highest Package", value: 45, unit: " LPA", fill: "#facc15" },
  { name: "Average Package", value: 18, unit: " LPA", fill: "#059669" },
]

const sectorData = [
  { name: "Consulting", value: 25 },
  { name: "Finance", value: 20 },
  { name: "Technology", value: 18 },
  { name: "FMCG", value: 15 },
  { name: "E-commerce", value: 12 },
  { name: "Others", value: 10 },
]

const roleData = [
  { role: "Senior Analyst", value: 52 },
  { role: "Management Consultant", value: 45 },
  { role: "Product Manager", value: 38 },
  { role: "Operations Manager", value: 32 },
  { role: "Finance Manager", value: 28 },
]

const companies = [
  { name: "Goldman Sachs", sector: "Finance", logo: "/recruiters/goldman-sachs.png" },
  { name: "Deloitte", sector: "Consulting", logo: "/recruiters/deloitte.png" },
  { name: "Accenture", sector: "Technology", logo: "/recruiters/accenture.png" },
  { name: "HDFC Bank", sector: "Banking", logo: "/recruiters/hdfc.png" },
  { name: "Flipkart", sector: "E-commerce", logo: "/recruiters/flipkart.png" },
  { name: "TCS", sector: "IT Services", logo: "/recruiters/tcs.png" },
  { name: "Infosys", sector: "IT Services", logo: "/recruiters/infosys.png" },
  { name: "EY", sector: "Consulting", logo: "/recruiters/ey.png" },
  { name: "Wipro", sector: "Technology", logo: "/recruiters/wipro.png" },
]

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
]

/* ===================== COMPONENT ===================== */

export default function PlacementsPage() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
        <Videoanimation videos={videos} />
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-[2px_2px_5px_white]">
            Placements
          </h1>
          <p className="text-lg opacity-90 drop-shadow-[2px_2px_5px_white] max-w-2xl">
            Our outcomes reflect academic rigor, industry alignment, and career-focused mentoring.
          </p>
        </div>
      </section>

      {/* STAT CARDS */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsCards.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{stat.label}</p>
                <p className="text-sm text-foreground/60">{stat.subtext}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* TOP RECRUITERS */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Top Recruiting Companies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {companies.map((company, idx) => {
              let logoClass = "max-h-14"
              if (company.name === "Deloitte") logoClass = "max-h-10"
              if (company.name === "Flipkart") logoClass = "max-h-20"
              if (company.name === "EY" || company.name === "Wipro") logoClass = "max-h-10"

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition"
                >
                  <div className="h-16 flex items-center mb-4">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={140}
                      height={70}
                      className={`object-contain ${logoClass}`}
                    />
                  </div>

                  <p className="font-semibold text-sm">{company.name}</p>
                  <span className="mt-1 text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {company.sector}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PLACEMENT SNAPSHOT + SECTOR */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* SNAPSHOT */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Placement Snapshot</h2>

            <div className="h-[320px] max-w-md mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  data={placementStats}
                  innerRadius="30%"
                  outerRadius="90%"
                  startAngle={90}
                  endAngle={-270}
                >
                  <RadialBar dataKey="value" cornerRadius={10} background />
                  <Tooltip formatter={(v, _, p) => `${v}${p.payload.unit}`} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>

            {/* LEGEND WITH VALUES */}
            <div className="mt-8 flex justify-center gap-8 flex-wrap">
              {placementStats.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/40"
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm font-semibold">
                      {item.value}
                      {item.unit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTOR */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Sector-wise Hiring</h3>
            <div className="space-y-5">
              {sectorData.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{s.name}</span>
                    <span className="font-semibold">{s.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ROLE-WISE */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Role-wise Hiring
          </h2>

          <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roleData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="role" width={170} />
                <Tooltip formatter={(v) => [`${v}%`, "Placement %"]} />
                <Bar dataKey="value" fill="#2563eb" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

    </main>
  )
}
