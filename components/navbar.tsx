"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Updated navLinks array with "Labs" and coming soon tag info
const navLinks = [
  // { name: "Hire Engineers", href: "/hire-engineers" },
  { name: "AI Bootcamp", href: "/bootcamp" },
  { name: "Consulting", href: "/consulting" },
  { name: "Industries", href: "/industries" },
  { name: "Labs", href: "#", comingSoon: true },
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
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent"
      )}
    >
    <div className="container-custom flex items-center justify-between px-4 md:px-10 h-24 md:h-28 gap-4">

        <Link
          href="/"
          className="flex items-center h-full"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-[100px] md:w-[130px]  flex items-center h-16 md:h-24">
            <Image
              src="/V0.svg"
              alt="DataLabs Logo"
              width={350}
              height={80}
              className="text-primary-600 dark:invert-[.25] dark:brightness-150 object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>


        {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center space-x-8 pt-4 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-base font-medium transition-colors hover:text-primary-600",
                pathname === link.href
                  ? "text-primary-600"
                  : "text-gray-700 dark:text-gray-200",
                link.comingSoon ? "cursor-default" : ""
              )}
              {...(link.comingSoon ? { onClick: (e) => e.preventDefault() } : {})}
            >
              <span className="relative flex items-center space-x-2">
                <span>{link.name}</span>
                {link.comingSoon && (
                  <p
                    className="absolute y-0.5 rounded-md bg-[] bg-gray-200 top-[-12px] left-[-15px] px-2 text-primary-600 font-semibold text-[9px]/3 whitespace-nowrap"
                    aria-label="Coming Soon"
                  > <span>coming </span><span>soon</span>
                  </p>
                )}
              </span>
            </Link>
          ))}

          <Button variant="default" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
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
            className="md:hidden bg-white dark:bg-gray-900 absolute top-24 left-0 w-full h-[calc(100vh-6rem)] overflow-y-auto px-4"
          >
            <div className="container-custom py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-base font-medium transition-colors hover:text-primary-600",
                    pathname === link.href
                      ? "text-primary-600"
                      : "text-gray-700 dark:text-gray-200",
                    link.comingSoon ? "cursor-default" : ""
                  )}
                  {...(link.comingSoon ? { onClick: (e) => e.preventDefault() } : {})}
                >
                  <span className="relative flex items-center space-x-2">
                    <span>{link.name}</span>
                    {link.comingSoon && (
                      <sup
                        className="ml-0.5 px-2 py-0 rounded-md bg-primary-100 text-primary-600 font-semibold text-xs whitespace-nowrap"
                        aria-label="Coming Soon"
                      >
                        coming soon
                      </sup>
                    )}
                  </span>
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
