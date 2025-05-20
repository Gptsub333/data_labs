"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import {
  ArrowRight,
  Building,
  Stethoscope,
  ShoppingBag,
  Factory,
  Cpu,
  GraduationCap,
  Truck,
  Landmark,
  Leaf,
  Shield,
  CheckCircle,
  Zap,
} from "lucide-react"

export default function IndustriesPage() {
  const router = useRouter()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              AI Solutions Across <span className="text-primary-600">Industries</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              DataLabs delivers tailored AI solutions to address the unique challenges and opportunities in diverse
              industries.
            </p>
            <Button
              size="lg"
              className="px-8"
              onClick={() => document.getElementById("industries-grid")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries-grid" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Transforming businesses across sectors with AI innovation"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry: Healthcare */}
      <section id="featured-industry" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold mb-2 block">Featured Industry</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Healthcare Transformation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI is revolutionizing healthcare by improving diagnostics, optimizing operations, and enhancing patient
                care. DataLabs partners with healthcare providers to implement AI solutions that drive better outcomes.
              </p>

              <div className="space-y-4 mb-8">
                <FeatureItem text="AI-powered diagnostic assistance with 95% accuracy" />
                <FeatureItem text="Predictive analytics for patient readmission reduction" />
                <FeatureItem text="Operational efficiency improvements through workflow optimization" />
                <FeatureItem text="Enhanced patient experience through personalized care" />
              </div>

              <Button className="px-6" onClick={() => router.push("/contact?subject=Healthcare%20AI%20Solutions")}>
                Explore Healthcare Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/health-trans.webp" alt="Healthcare AI" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Success Stories"
            subtitle="Real-world impact of our industry-specific AI solutions"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              industry="Finance"
              title="Fraud Detection Revolution"
              description="Implemented an AI-driven fraud detection system for a global bank, reducing false positives by 40% and saving $3.2M annually."
              image="/financial-data-visualization.png"
            />
            <CaseStudyCard
              industry="Retail"
              title="Inventory Optimization"
              description="Developed a demand forecasting system for a retail chain, reducing excess inventory by 23% and increasing product availability by 15%."
              image="/modern-retail-warehouse.png"
            />
            <CaseStudyCard
              industry="Manufacturing"
              title="Predictive Maintenance"
              description="Created an AI system that predicts equipment failures, reducing downtime by 35% and maintenance costs by 28% for a manufacturing plant."
              image="/robotic-factory-floor.png"
            />
          </div>
        </div>
      </section>

      {/* Cross-Industry Benefits */}
      <section id="benefits" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Cross-Industry Benefits"
            subtitle="Common advantages of AI implementation across sectors"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<TrendingUp className="h-10 w-10 text-primary-600" />}
              title="Operational Efficiency"
              description="Streamline processes, reduce manual tasks, and optimize resource allocation through AI-driven automation and intelligence."
            />
            <BenefitCard
              icon={<LineChart className="h-10 w-10 text-primary-600" />}
              title="Data-Driven Insights"
              description="Transform raw data into actionable intelligence with advanced analytics and machine learning algorithms."
            />
            <BenefitCard
              icon={<Users className="h-10 w-10 text-primary-600" />}
              title="Enhanced Customer Experience"
              description="Deliver personalized, responsive service through AI-powered recommendation systems and intelligent assistants."
            />
            <BenefitCard
              icon={<Shield className="h-10 w-10 text-primary-600" />}
              title="Risk Mitigation"
              description="Identify and address potential risks before they impact your business with predictive analytics and anomaly detection."
            />
            <BenefitCard
              icon={<Zap className="h-10 w-10 text-primary-600" />}
              title="Innovation Acceleration"
              description="Rapidly develop and deploy new products and services with AI-enhanced R&D and prototyping capabilities."
            />
            <BenefitCard
              icon={<Target className="h-10 w-10 text-primary-600" />}
              title="Strategic Decision-Making"
              description="Make better business decisions with AI-powered forecasting, scenario analysis, and optimization tools."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us to discuss how our AI solutions can address your industry-specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="px-8"
              onClick={() => router.push("/contact?subject=Industry%20Solutions")}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent text-white hover:bg-white hover:text-primary-600"
              onClick={() => router.push("/contact?subject=Demo%20Request")}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function IndustryCard({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}) {
  return (
    <AnimatedCard className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              {icon}
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      </div>
    </AnimatedCard>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
      <span className="text-gray-600 dark:text-gray-300">{text}</span>
    </div>
  )
}

function CaseStudyCard({
  industry,
  title,
  description,
  image,
}: {
  industry: string
  title: string
  description: string
  image: string
}) {
  const router = useRouter()

  return (
    <AnimatedCard className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-medium text-primary-600 mb-2">{industry}</span>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </AnimatedCard>
  )
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <AnimatedCard className="p-6 h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </AnimatedCard>
  )
}

// Additional components needed
function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  )
}

function LineChart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  )
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}

function Target(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  )
}

// Sample data
const industries = [
  {
    icon: <Building className="h-5 w-5" />,
    title: "Finance",
    description:
      "AI solutions for fraud detection, risk assessment, algorithmic trading, and personalized banking experiences.",
    image: "/Finance.jpg",
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Healthcare",
    description:
      "AI applications for diagnostic assistance, patient monitoring, treatment optimization, and operational efficiency.",
    image: "/doctor-digital-hospital.png",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "Retail",
    description:
      "AI-powered inventory management, demand forecasting, personalized recommendations, and customer insights.",
    image: "/Retail.jpg",
  },
  {
    icon: <Factory className="h-5 w-5" />,
    title: "Manufacturing",
    description:
      "AI solutions for predictive maintenance, quality control, supply chain optimization, and automated production.",
    image: "/Manufacturing.jpg",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Technology",
    description:
      "AI integration for product innovation, customer service automation, development acceleration, and data analysis.",
    image: "/Technology.jpg",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Education",
    description:
      "AI applications for personalized learning, administrative efficiency, student engagement, and outcome prediction.",
    image: "/Education.jpg",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Logistics",
    description: "AI-powered route optimization, demand forecasting, warehouse automation, and delivery management.",
    image: "/Logistics.jpg",
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "Government",
    description:
      "AI solutions for public service delivery, resource allocation, security enhancement, and policy analysis.",
    image: "/Government.jpg",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Agriculture",
    description:
      "AI applications for crop monitoring, yield prediction, resource optimization, and sustainable farming.",
    image: "/Agriculture.jpg",
  },
]
