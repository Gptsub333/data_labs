"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Check, Star, ArrowRight, MessageSquare, Brain, Code, BarChart } from "lucide-react"

export default function HireEngineersPage() {
  const router = useRouter()

  return (
    <div className="pt-25">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Hire Expert <span className="text-primary-600">AI Engineers</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Access top AI talent to build, implement, and scale your AI solutions. Our engineers bring specialized
                expertise across machine learning, deep learning, and data science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="px-8"
                  onClick={() => document.getElementById("engineers-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Hire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => document.getElementById("expertise-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/h2.webp" alt="AI Engineers" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise-section" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our AI Engineering Expertise"
            subtitle="Specialized talent across the AI spectrum"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="How It Works" subtitle="Simple process to get the AI talent you need" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              number="01"
              title="Consultation"
              description="We discuss your project requirements, timeline, and the specific AI expertise you need."
            />
            <ProcessStep
              number="02"
              title="Talent Matching"
              description="We match you with AI engineers who have the right skills and experience for your project."
            />
            <ProcessStep
              number="03"
              title="Seamless Integration"
              description="Our engineers integrate with your team and start delivering results from day one."
            />
          </div>
        </div>
      </section>

      {/* Featured Engineers */}
      <section id="engineers-section" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Founders"
            subtitle="Exceptional talent ready to tackle your AI challenges"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((engineer, index) => (
              <EngineerCard key={index} {...engineer} />
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Success stories from businesses that hired our AI engineers"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard
              quote="The AI engineers from DataLabs transformed our data analytics capabilities. They built a custom ML solution that increased our prediction accuracy by 35%."
              author="Sarah Johnson"
              position="CTO, TechVision Inc."
              image="/professional-woman-dark-hair.png"
            />
            <TestimonialCard
              quote="Working with DataLabs' AI team was seamless. They quickly understood our requirements and delivered a sophisticated NLP system that exceeded our expectations."
              author="Michael Chen"
              position="Head of Innovation, Global Finance"
              image="/asian-man-glasses-headshot.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Build Your AI Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch to discuss how our AI engineers can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="px-8"
              onClick={() => router.push("/contact?subject=Hire%20Engineers")}
            >
              Hire Engineers
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent text-white hover:bg-white hover:text-primary-600"
              onClick={() => router.push("/contact?subject=Schedule%20Call")}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExpertiseCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode
  title: string
  skills: string[]
}) {
  return (
    <AnimatedCard className="p-6 h-full flex flex-col">
      <div className="mb-4 text-primary-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 mt-auto">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <AnimatedCard className="p-6 text-center h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-gray-800 flex items-center justify-center text-primary-600 font-bold text-xl mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </AnimatedCard>
  )
}

function EngineerCard({
  name,
  title,
  image,
  rating,
  specialties,
}: {
  name: string
  title: string
  image: string
  rating: number
  specialties: string[]
}) {
  const router = useRouter()

  return (
    <AnimatedCard className="overflow-hidden h-full flex flex-col">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{title}</p>


        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full mt-auto"
          onClick={() => router.push(`/contact?subject=Engineer%20Inquiry&engineer=${name}`)}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Contact
        </Button>
      </div>
    </AnimatedCard>
  )
}

function TestimonialCard({
  quote,
  author,
  position,
  image,
}: {
  quote: string
  author: string
  position: string
  image: string
}) {
  return (
    <AnimatedCard className="p-8 h-full flex flex-col">
      <div className="mb-6 text-primary-600">
        <svg
          width="45"
          height="36"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-200"
        >
          <path
            d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27H18V36H9C4.02944 36 0 31.9706 0 27V13.5C0 6.04416 6.04416 0 13.5 0ZM40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27H45V36H36C31.0294 36 27 31.9706 27 27V13.5C27 6.04416 33.0442 0 40.5 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{position}</p>
        </div>
      </div>
    </AnimatedCard>
  )
}

// Sample data
const expertiseAreas = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Machine Learning",
    skills: [
      "Supervised & Unsupervised Learning",
      "Reinforcement Learning",
      "Feature Engineering",
      "Model Optimization",
    ],
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Deep Learning",
    skills: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Generative AI"],
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Data Science",
    skills: ["Data Analysis & Visualization", "Statistical Modeling", "Big Data Processing", "Predictive Analytics"],
  },
]

const engineers = [
  {
    name: "Alex Morgan",
    title: "Senior ML Engineer",
    image: "/professional-man-glasses-beard.png",
    rating: 5,
    specialties: ["Machine Learning", "Python", "TensorFlow", "Computer Vision"],
  },
  {
    name: "Priya Sharma",
    title: "AI Research Scientist",
    image: "/h3.png",
    rating: 5,
    specialties: ["Deep Learning", "NLP", "PyTorch", "Research"],
  },
  {
    name: "David Chen",
    title: "Data Science Lead",
    image: "/professional-man-glasses.png",
    rating: 4,
    specialties: ["Data Science", "Statistics", "Big Data", "Visualization"],
  },
]
