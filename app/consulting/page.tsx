"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import {
  ArrowRight,
  Brain,
  Lightbulb,
  BarChart,
  Zap,
  CheckCircle,
  Target,
  TrendingUp,
  Search,
  FileText,
} from "lucide-react"

export default function ConsultingPage() {
  const router = useRouter()

  return (
    <div className="pt-24 md:pt-25">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-25 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="text-primary-600">AI Consulting</span> Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Strategic guidance to help your organization harness the power of artificial intelligence. Our
                consulting services provide the expertise you need to identify opportunities, develop strategies, and
                implement AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8" onClick={() => router.push("/contact?subject=Consulting%20Inquiry")}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/con.png" alt="AI Consulting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Consulting Approach"
            subtitle="A structured methodology to drive AI transformation"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ApproachCard
              icon={<Search className="h-10 w-10 text-primary-600" />}
              title="Discovery"
              description="We assess your current capabilities, identify opportunities, and understand your business objectives."
              step="01"
            />
            <ApproachCard
              icon={<Lightbulb className="h-10 w-10 text-primary-600" />}
              title="Strategy"
              description="We develop a tailored AI roadmap aligned with your business goals and technical capabilities."
              step="02"
            />
            <ApproachCard
              icon={<Target className="h-10 w-10 text-primary-600" />}
              title="Implementation"
              description="We guide the execution of your AI initiatives with technical expertise and project management."
              step="03"
            />
            <ApproachCard
              icon={<TrendingUp className="h-10 w-10 text-primary-600" />}
              title="Optimization"
              description="We measure results, refine approaches, and ensure continuous improvement of your AI solutions."
              step="04"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services-section" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Our Consulting Services"
            subtitle="Comprehensive AI consulting tailored to your needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/d.jpg" alt="Our Consulting Team" fill className="object-cover" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Why Choose <span className="text-primary-600">DataLabs</span> Consulting
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our consulting team combines deep technical expertise with business acumen to deliver AI solutions that
                create measurable value. We focus on practical, implementable strategies that drive real results.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} {...benefit} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies-section" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="Success Stories" subtitle="Real-world impact of our AI consulting services" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Financial Services Transformation"
              description="Helped a leading bank implement AI-driven fraud detection, reducing false positives by 35% and saving $2.5M annually."
              metrics={["35% reduction in false positives", "$2.5M annual savings", "3-month implementation"]}
              image="/fincon.png"
            />
            <CaseStudyCard
              title="Healthcare Efficiency Optimization"
              description="Developed an AI strategy for a healthcare network that improved patient scheduling efficiency and reduced wait times by 40%."
              metrics={[
                "40% reduction in wait times",
                "22% increase in patient satisfaction",
                "Seamless EMR integration",
              ]}
              image="/mod.png"
            />
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section id="process-section" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Consultation Process"
            subtitle="A streamlined approach to getting started with AI consulting"
            centered
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-gray-700 hidden md:block" />

              {consultationSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === consultationSteps.length - 1}
                />
              ))}
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
            Schedule a consultation with our experts to discuss your AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="px-8"
              onClick={() => router.push("/contact?subject=Schedule%20Consultation")}
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent text-white hover:bg-white hover:text-primary-600"
              onClick={() => router.push("/contact?subject=Brochure%20Request")}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ApproachCard({
  icon,
  title,
  description,
  step,
}: {
  icon: React.ReactNode
  title: string
  description: string
  step: string
}) {
  return (
    <AnimatedCard className="p-6 h-full flex flex-col relative">
      <div className="absolute top-4 right-4 text-gray-200 dark:text-gray-700 font-bold text-4xl opacity-50">
        {step}
      </div>
      <div className="mb-4 text-primary-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </AnimatedCard>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) {
  return (
    <AnimatedCard className="p-6 h-full flex flex-col">
      <div className="mb-4 text-primary-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mt-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  )
}

function BenefitItem({
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

function CaseStudyCard({
  title,
  description,
  metrics,
  image,
}: {
  title: string
  description: string
  metrics: string[]
  image: string
}) {
  const router = useRouter()

  return (
    <AnimatedCard className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="mt-auto">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Results:</h4>
          <ul className="space-y-2">
            {metrics.map((metric, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => router.push(`/contact?subject=Case%20Study%20Request&case=${encodeURIComponent(title)}`)}
        >
          Read Full Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </AnimatedCard>
  )
}

function ProcessStep({
  number,
  title,
  description,
  isLast,
}: {
  number: number
  title: string
  description: string
  isLast: boolean
}) {
  return (
    <div className={`flex items-start gap-12 ${isLast ? "" : "mb-12"}`}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg z-10">
        {number}
      </div>
      <div className="flex-grow pl-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

// Sample data
const consultingServices = [
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "AI Strategy Development",
    description: "Develop a comprehensive AI roadmap aligned with your business objectives.",
    features: ["Opportunity assessment", "Technology evaluation", "Implementation roadmap", "ROI analysis"],
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI Solution Design",
    description: "Design custom AI solutions to address your specific business challenges.",
    features: ["Use case definition", "Architecture design", "Data requirements planning", "Integration strategy"],
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "AI Implementation Support",
    description: "Expert guidance throughout the implementation of your AI initiatives.",
    features: ["Project management", "Technical oversight", "Quality assurance", "Change management"],
  },
]

const benefits = [
  {
    icon: <Brain className="h-5 w-5 text-primary-600" />,
    title: "Technical Expertise",
    description: "Our consultants have deep expertise in machine learning, deep learning, and AI implementation.",
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-primary-600" />,
    title: "Business Acumen",
    description: "We understand business challenges and focus on solutions that deliver measurable value.",
  },
  {
    icon: <FileText className="h-5 w-5 text-primary-600" />,
    title: "Proven Methodology",
    description: "Our structured approach ensures efficient, effective AI implementation with minimal disruption.",
  },
  {
    icon: <Zap className="h-5 w-5 text-primary-600" />,
    title: "Rapid Results",
    description: "We focus on quick wins while building toward long-term strategic objectives.",
  },
]

const consultationSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a free consultation to understand your business, challenges, and objectives.",
  },
  {
    title: "Assessment & Proposal",
    description:
      "We conduct a detailed assessment and provide a tailored proposal with clear deliverables and timelines.",
  },
  {
    title: "Strategy Workshop",
    description:
      "Our team facilitates a workshop to align stakeholders and develop a shared vision for AI implementation.",
  },
  {
    title: "Implementation Planning",
    description: "We create a detailed implementation plan with specific milestones, resources, and success metrics.",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous guidance and support throughout your AI transformation journey.",
  },
]
