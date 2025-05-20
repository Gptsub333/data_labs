"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Update the navLinks array to include the consulting page
const navLinks = [
  { name: "Hire Engineers", href: "/hire-engineers" },
  { name: "AI Bootcamp", href: "/bootcamp" },
  { name: "Consulting", href: "/consulting" },
  { name: "Industries", href: "/industries" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90" : "bg-transparent",
      )}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
       <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
          {/* SVG logo using Image component */}
          <div className="h-20 w-auto relative">
            <Image
              src="/logo.svg"
              alt="DataLabs Logo"
              width={225}
              height={70}
              className="text-primary-600 dark:invert-[.25] dark:brightness-150"
              priority
              unoptimized // This prevents Next.js from trying to optimize the SVG
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-600",
                pathname === link.href ? "text-primary-600" : "text-gray-700 dark:text-gray-200",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 absolute top-16 left-0 w-full h-[calc(100vh-4rem)] overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    pathname === link.href ? "text-primary-600" : "text-gray-700 dark:text-gray-200",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full mt-4" onClick={() => setIsOpen(false)} asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
