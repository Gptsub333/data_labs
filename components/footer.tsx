import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* SVG logo using Image component */}
              <div className="h-16 w-auto relative pb-18">
                <Image
                  src="/datalabs.svg"
                  alt="DataLabs Logo"
                  width={150}
                  height={58}
                  className="text-primary-600 dark:invert-[.25] pb-18 dark:brightness-150"
                />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Pioneering AI solutions for businesses across industries. We help organizations harness the power of
              artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="/bootcamp">AI Bootcamp</FooterLink>
              <FooterLink href="/consulting">AI Consulting</FooterLink>
              <FooterLink href="/industries">Industries</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">info@datalabs.ai</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} DataLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-300 text-sm hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors shadow-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}
