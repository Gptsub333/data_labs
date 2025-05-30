"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ArrowRight, Brain, Code, Users, BarChart, Zap, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <AnimatedGradient />
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypewriterText
              text="Transforming Business Through Artificial Intelligence"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              highlightText="Artificial Intelligence"
              highlightClass="text-primary-600"
            />
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Deploy AI at scale without disruption to your current enterprise IT layers.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="px-8" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Our AI Services"
            subtitle="Comprehensive AI solutions tailored to your business needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

            <ServiceCard
              icon={<Brain className="h-10 w-10 text-primary-600" />}
              title="AI Bootcamp"
              description="Transform your team with our comprehensive AI training programs designed for all skill levels."
              link="/bootcamp"
            />
            <ServiceCard
              icon={<BarChart className="h-10 w-10 text-primary-600" />}
              title="AI Consulting"
              description="Get strategic guidance on implementing AI solutions that drive business growth and efficiency."
              link="/consulting"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Delivering AI solutions across diverse sectors"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/industries">
              <Button variant="outline" className="group">
                View All Industries
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Why Choose <span className="text-primary-600">DataLabs</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We combine technical expertise with business acumen to deliver AI solutions that drive real results. Our
                approach is focused on creating value through innovation.
              </p>

              <div className="space-y-6">
                <FeatureItem
                  icon={<Zap className="h-5 w-5 text-primary-600" />}
                  title="Cutting-edge Technology"
                  description="We leverage the latest AI advancements to build solutions that keep you ahead of the competition."
                />
                <FeatureItem
                  icon={<Users className="h-5 w-5 text-primary-600" />}
                  title="Expert Team"
                  description="Our team of AI specialists brings years of experience across various industries and technologies."
                />
                <FeatureItem
                  icon={<Code className="h-5 w-5 text-primary-600" />}
                  title="Custom Solutions"
                  description="We develop tailored AI solutions that address your specific business challenges and objectives."
                />
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image src="/cho.avif" alt="DataLabs team" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with our team to discuss how our AI solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent text-white hover:bg-white hover:text-primary-600"
              onClick={() => (window.location.href = "/consulting")}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Typewriter Text Component
type TypewriterTextProps = {
  text: string
  className?: string
  highlightText?: string
  highlightClass?: string
}

function TypewriterText({ text, className, highlightText, highlightClass }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const speed = 30 // milliseconds per character

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text])

  // If there's a highlight text, replace it with the highlighted version
  const renderText = () => {
    if (!highlightText) return displayText

    const parts = displayText.split(highlightText)
    if (parts.length === 1) return displayText

    return (
      <>
        {parts[0]}
        <span className={highlightClass}>{highlightText.substring(0, displayText.length - parts[0].length)}</span>
      </>
    )
  }

  return <h1 className={className}>{renderText()}</h1>
}

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <AnimatedCard className="p-6 h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
      <Link href={link} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </AnimatedCard>
  )
}

function IndustryCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <AnimatedCard className="p-6 flex flex-col items-center bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="mb-4 text-gray-700 dark:text-gray-300">{icon}</div>
      <h3 className="text-sm font-medium">{name}</h3>
    </AnimatedCard>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-gray-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

// Sample industries data
const industries = [
  { icon: <BarChart className="h-8 w-8 mx-auto" />, name: "Finance" },
  { icon: <Users className="h-8 w-8 mx-auto" />, name: "Healthcare" },
  { icon: <Zap className="h-8 w-8 mx-auto" />, name: "Retail" },
  { icon: <Brain className="h-8 w-8 mx-auto" />, name: "Manufacturing" },
  { icon: <Code className="h-8 w-8 mx-auto" />, name: "Technology" },
  { icon: <ArrowRight className="h-8 w-8 mx-auto" />, name: "Education" },
]
