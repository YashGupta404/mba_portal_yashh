"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import ApplicationForm from "@/components/application/ApplicationForm"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [openForm, setOpenForm] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Programs", href: "/programs" },
    { label: "Admissions", href: "/admissions" },     
    { label: "Placements", href: "/placements" },
    { label: "Student Life", href: "/student-life" },
    { label: "Contact", href: "/contact" },
  ]

  const programSubmenu = [
    { label: "MBA Full-Time", href: "/programs/mba-fulltime" },
    { label: "MBA Executive", href: "/programs/mba-executive" },
    { label: "MBA Online", href: "/programs/mba-online" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.png"   // 🔁 replace with your actual logo path
              alt="Institute of Engineering and Management"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <span className="font-bold text-sm sm:text-base text-primary hidden sm:inline-block leading-tight">
              IEM - Management
            </span>
          </Link>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 transition-colors flex items-center gap-1"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* ===== APPLY BUTTON ===== */}
          <button
            onClick={() => setOpenForm(true)}
            className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Apply Now
          </button>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ===== MOBILE NAVIGATION ===== */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-in-up">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent/10 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <button
              onClick={() => { setOpenForm(true); setIsOpen(false); }}
              className="mx-3 mt-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>

      {/* APPLICATION FORM MODAL */}
      {openForm && (
        <ApplicationForm onClose={() => setOpenForm(false)} />
      )}
    </nav>
  )
}
