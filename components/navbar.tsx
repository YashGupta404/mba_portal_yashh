"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Programs", href: "/programs", submenu: true },
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">IE</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline-block">IEM College</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {programSubmenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-primary first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <button className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl">
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-in-up">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent/10 hover:text-primary transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                  )}
                </button>
                {item.submenu && isDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {programSubmenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-primary rounded-md transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
