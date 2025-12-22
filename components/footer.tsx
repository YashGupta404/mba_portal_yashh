import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-800 py-16 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= BRAND (CENTERED) ================= */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Image
              src="/logo.png"              // your original logo
              alt="IEM Management Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <h3 className="font-bold text-2xl text-gray-900">
              IEM - Management
            </h3>
          </div>

          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Excellence in Management Education for over 20 years.
            Shaping leaders for tomorrow.
          </p>
        </div>

        {/* ================= LINKS BELOW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-12">

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-blue-600 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-blue-600 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-center md:justify-start items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>+91 9876 543 210</span>
              </li>
              <li className="flex justify-center md:justify-start items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>admissions@iemcollege.edu</span>
              </li>
              <li className="flex justify-center md:justify-start items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t pt-8 border-gray-200">
          <div className="relative flex flex-col md:flex-row items-center text-sm text-gray-600 gap-4">

  {/* Centered copyright */}
  <p className="md:absolute md:left-1/2 md:-translate-x-1/2 text-center">
    &copy; {currentYear} IEM Management. All rights reserved.
  </p>

  {/* Right-aligned links (unchanged behavior) */}
  <div className="md:ml-auto flex gap-4">
    <Link href="#" className="hover:text-blue-600 transition-colors">
      Privacy Policy
    </Link>
    <Link href="#" className="hover:text-blue-600 transition-colors">
      Terms of Service
    </Link>
  </div>

</div>


        </div>

      </div>
    </footer>
  )
}
