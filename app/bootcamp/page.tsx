"use client"

import type React from "react"


import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ArrowRight, Brain, Code, Users, BarChart, CheckCircle, Calendar, Laptop, Award } from "lucide-react"

export default function BootcampPage() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/bootcamp-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send message");
      } else {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      }
    } catch {
      setError("Failed to send message, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 md:pt-25">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <TypewriterText
                text="AI Bootcamp Journey"
                className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                highlightText="Journey"
                highlightClass="text-primary-600"
              />
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your team with our comprehensive AI training program. From fundamentals to advanced
                applications, our bootcamp equips your organization with the skills to leverage AI effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Curriculum
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/boot.png" alt="AI Bootcamp" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Bootcamp Overview"
            subtitle="A transformative learning experience designed for professionals at all levels"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <OverviewCard
              icon={<Calendar className="h-8 w-8 text-primary-600" />}
              title="12 Weeks"
              description="Intensive program with flexible scheduling options"
            />
            <OverviewCard
              icon={<Users className="h-8 w-8 text-primary-600" />}
              title="Small Groups"
              description="Limited class size for personalized attention"
            />
            <OverviewCard
              icon={<Laptop className="h-8 w-8 text-primary-600" />}
              title="Hands-on Projects"
              description="Apply concepts to real-world business challenges"
            />
            <OverviewCard
              icon={<Award className="h-8 w-8 text-primary-600" />}
              title="Certification"
              description="Industry-recognized credentials upon completion"
            />
          </div>
        </div>
      </section>

      {/* Bootcamp Journey */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading title="Your AI Bootcamp Journey" subtitle="A structured path to AI proficiency" centered />

          <div className="relative">
            {/* Journey line - This is the purple vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-600 dark:bg-primary-500 transform -translate-x-1/2 hidden md:block" />

            {journeySteps.map((step, index) => (
              <JourneyStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                image={step.image}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section id="curriculum" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Curriculum Highlights"
            subtitle="Comprehensive coverage of essential AI topics"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumTopics.map((topic, index) => (
              <CurriculumCard key={index} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            title="Meet Your Instructors"
            subtitle="Learn from industry experts with extensive experience"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Success Stories" subtitle="Hear from our bootcamp graduates" centered />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard
              quote="The DataLabs AI Bootcamp transformed my career. The hands-on approach and expert instructors helped me implement AI solutions that delivered immediate value to my organization."
              author="James Wilson"
              position="Data Scientist, TechCorp"
              image="/asian-man-glasses-headshot.png"
            />
            <TestimonialCard
              quote="As someone with limited technical background, I was amazed at how accessible the bootcamp made AI concepts. Now I can confidently lead AI initiatives in my department."
              author="Elena Rodriguez"
              position="Marketing Director, Global Retail"
              image="/latina-professional-headshot.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Start Your AI Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Enroll in our next cohort and transform your team's capabilities with AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="px-8"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent text-white hover:bg-white hover:text-primary-600"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <SectionHeading
            title="Request Information"
            subtitle="Fill out the form below to learn more about our AI Bootcamp"
            centered
          />

          <AnimatedCard className="p-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="mx-auto mb-4 h-10 w-10 text-primary-600" />
                <p className="text-lg font-semibold">Thank you! Your request has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {error && <p className="text-red-600">{error}</p>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            )}
          </AnimatedCard>
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
  const speed = 15 // milliseconds per character

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

function OverviewCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <AnimatedCard className="p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </AnimatedCard>
  )
}

function JourneyStep({
  step,
  title,
  description,
  image,
  isLeft,
}: {
  step: number
  title: string
  description: string
  image: string
  isLeft: boolean
}) {
  return (
    <div className="mb-16 last:mb-0">
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="relative">
          {/* Step number for mobile */}
          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
            {step}
          </div>
          <AnimatedCard className="relative h-[200px] rounded-xl overflow-hidden shadow-lg mb-4">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </AnimatedCard>
          <AnimatedCard className="p-6">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </AnimatedCard>
        </div>
      </div>

      {/* Desktop view - Crisscross layout */}
      <div className="hidden md:block relative">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className={isLeft ? "order-1" : "order-2"}>
            {isLeft ? (
              <AnimatedCard className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </AnimatedCard>
            ) : (
              <AnimatedCard className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image src={image || "/h4.jpg"} alt={title} fill className="object-cover" />
              </AnimatedCard>
            )}
          </div>

          {/* Right side content */}
          <div className={isLeft ? "order-2" : "order-1"}>
            {isLeft ? (
              <AnimatedCard className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </AnimatedCard>
            ) : (
              <AnimatedCard className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </AnimatedCard>
            )}
          </div>
        </div>

        {/* Step number for desktop - positioned absolutely on the vertical line */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10">
          {step}
        </div>
      </div>
    </div>
  )
}

function CurriculumCard({
  icon,
  title,
  topics,
}: {
  icon: React.ReactNode
  title: string
  topics: string[]
}) {
  return (
    <AnimatedCard className="p-6 h-full flex flex-col">
      <div className="mb-4 text-primary-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 dark:text-gray-300">{topic}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  )
}

function InstructorCard({
  name,
  title,
  image,
  expertise,
}: {
  name: string
  title: string
  image: string
  expertise: string
}) {
  return (
    <AnimatedCard className="overflow-hidden h-full flex flex-col">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{title}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Expertise:</span> {expertise}
        </p>
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
const journeySteps = [
  {
    title: "Foundations of AI",
    description:
      "Begin with the fundamentals of artificial intelligence, machine learning concepts, and the AI ecosystem. Build a solid understanding of key principles and terminology.",
    image: "/h10.svg",
  },
  {
    title: "Technical Skills Development",
    description:
      "Develop practical skills in Python programming, data manipulation, and essential libraries for AI development. Learn to implement basic machine learning algorithms.",
    image: "/1.svg",
  },
  {
    title: "Advanced AI Applications",
    description:
      "Explore specialized areas such as computer vision, natural language processing, and reinforcement learning through hands-on projects and case studies.",
    image: "/h11.svg",
  },
  {
    title: "Business Implementation",
    description:
      "Learn to identify AI opportunities in business contexts, develop implementation strategies, and measure the impact of AI solutions on organizational goals.",
    image: "/2.svg",
  },
]

const curriculumTopics = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI & Machine Learning Fundamentals",
    topics: [
      "Introduction to AI concepts",
      "Supervised vs. Unsupervised Learning",
      "Neural Networks Architecture",
      "Ethical Considerations in AI",
    ],
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Technical Implementation",
    topics: [
      "Python for Data Science",
      "TensorFlow & PyTorch Frameworks",
      "Data Preprocessing Techniques",
      "Model Training & Evaluation",
    ],
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Business Applications",
    topics: [
      "AI Strategy Development",
      "Use Case Identification",
      "Implementation Roadmaps",
      "ROI Measurement & Optimization",
    ],
  },
]

const instructors = [
  {
    name: "Dr. Rebecca Chen",
    title: "Lead AI Instructor",
    image: "/professional-woman-dark-hair.png",
    expertise: "Machine Learning, Computer Vision, AI Ethics",
  },
  {
    name: "Marcus Johnson",
    title: "Technical Instructor",
    image: "/h5.jpg",
    expertise: "Deep Learning, NLP, Python Development",
  },
  {
    name: "Dr. Sarah Williams",
    title: "Business AI Strategist",
    image: "/h7.jpg",
    expertise: "AI Implementation, Business Strategy, Innovation",
  },
]
