"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ArrowRight, Brain, Code, Users, BarChart, CheckCircle, Calendar, Laptop, Award, Search } from "lucide-react"
import { Clock, Target, MessageSquare, Database, Bot, Cpu, Eye, Zap, BookOpen } from "lucide-react"

export default function BootcampPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/bootcamp-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Failed to send message")
      } else {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        })
      }
    } catch {
      setError("Failed to send message, please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Data arrays
  const learningOutcomes = [
    "Learn prompt engineering best practices for application development",
    "Discover new ways to use LLMs, including how to build your own custom chatbot",
    "Deeply understand generative AI, describing the key steps in a typical LLM-based generative AI lifecycle, from data gathering and model selection, to performance evaluation and deployment",
    "Gain hands-on practice writing and iterating on prompts yourself using the GenAI models",
    "Discuss the challenges and opportunities that generative AI creates for businesses after hearing stories from industry researchers and practitioners",
    "Describe in detail the transformer architecture that powers LLMs, how they're trained, and how fine-tuning enables LLMs to be adapted to a variety of specific use cases",
    "Apply state-of-the art training, tuning, inference, tools, and deployment methods to maximize the performance of models within the specific constraints of your project",
  ]

  const courseOutcomes = [
    "Understand how to apply GenAI to mission critical business operations",
    "Solve real world business problem immediately",
    "Understand how cutting edge GenAI stack changes your existing engineering workflows",
  ]

  const topicsCovered = [
    { icon: <Code className="h-6 w-6" />, title: "Python for GenAI" },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Prompt Engineering" },
    { icon: <Brain className="h-6 w-6" />, title: "Basics of Neural Network" },
    { icon: <Target className="h-6 w-6" />, title: "Model Fine-tuning" },
    { icon: <Database className="h-6 w-6" />, title: "Embeddings" },
    { icon: <Search className="h-6 w-6" />, title: "Retrieval Augmented Generation" },
    { icon: <Bot className="h-6 w-6" />, title: "Chatbot/Assistant systems" },
    { icon: <Cpu className="h-6 w-6" />, title: "MLOps" },
    { icon: <Eye className="h-6 w-6" />, title: "Vision and Voice GenAI" },
    { icon: <Zap className="h-6 w-6" />, title: "AI Agents" },
  ]

  const targetAudience = [
    {
      icon: <Code className="h-6 w-6 text-primary-600" />,
      title: "Software Engineers",
      description: "Developers looking to integrate AI into their applications",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary-600" />,
      title: "IT Employees",
      description: "IT professionals with understanding of Engineering mathematics",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary-600" />,
      title: "Engineering Students",
      description: "Undergraduate and Graduate students in Engineering",
    },
  ]

  const weeklyContent = [
    {
      week: 1,
      title: "Basics for GenAI",
      topics: [
        "New GenAI stack",
        "Current and future opportunities in GenAI",
        "Python for GenAI",
        "Basics of Prompt Engineering",
        "Basics of Neural Network/Linear Algebra/Probability",
        "Vibe Coding",
      ],
    },
    {
      week: 2,
      title: "Text/Vision AI",
      topics: [
        "Embeddings",
        "Retrieval Augmented Generation (NLP)",
        "Semantic Search systems using AI",
        "AI for Computer Vision",
        "Multimodal RAG- Chat with Videos",
      ],
    },
    {
      week: 3,
      title: "AI Agents and Reasoning",
      topics: [
        "Multi-Agentic Design Patterns",
        "Function calling",
        "Browser Use",
        "Build your own AI agent in 60 minutes",
        "Reasoning AI models",
        "Planning in AI models",
        "Meta Prompting",
      ],
    },
    {
      week: 4,
      title: "Fine Tuning and Deployment",
      topics: [
        "Why finetune",
        "Tricks to improve accuracy and performance",
        "Finetuning methods for AI models",
        "AI inference",
        "HIPAA/SOC2/Fedramp for AI inference",
      ],
    },
    {
      week: 5,
      title: "Production AI - LLMOps and AI evaluation",
      topics: [
        "AI Orchestration",
        "Tokens, Latency, Accuracy and Throughput 101",
        "A/B testing AI models",
        "AI Benchmarking",
        "Evaluation pipelines in production",
      ],
    },
    {
      week: 6,
      title: "Vertical AI",
      topics: [
        "AI for Medicine and Life Science",
        "AI for Finance",
        "AI for Government",
        "AI for Education",
        "AI for Media & Entertainment",
      ],
    },
    {
      week: 7,
      title: "Software systems for AI",
      topics: ["AI frameworks", "Data engineering", "Compute and Storage", "Open Source AI", "Front-end for AI"],
    },
    {
      week: 8,
      title: "Future of AI",
      topics: ["Agents in 2026", "Reinforcement learning", "AI Snake Oil"],
    },
  ]

  const liveDemos = [
    { title: "Smart Assistant and Chatbot", category: "Conversational AI" },
    { title: "Intelligent Document processing", category: "Document AI" },
    { title: "Meeting summarization", category: "NLP" },
    { title: "Image and Video Generator", category: "Generative AI" },
    { title: "Voice powered AI Agents", category: "Voice AI" },
    { title: "PHI/PII data masking", category: "Privacy AI" },
    { title: "Demand forecasting", category: "Predictive AI" },
    { title: "Video processing (Face recognition - Attendance system)", category: "Computer Vision" },
    { title: "Healthcare Diagnostics", category: "Medical AI" },
    { title: "Talking to database (NL2SQL)", category: "Database AI" },
    { title: "Emotion detection", category: "Sentiment AI" },
    { title: "Virtual try ons", category: "AR/AI" },
    { title: "Personalized Health Monitoring", category: "Health AI" },
    { title: "Content Creation for Marketing", category: "Marketing AI" },
    { title: "Travel Planning Assistants", category: "Travel AI" },
    { title: "Semantic Search", category: "Search AI" },
    { title: "Video search and synthesis", category: "Video AI" },
    { title: "Object Detection", category: "Computer Vision" },
    { title: "Personalized shopping and recommendation", category: "E-commerce AI" },
  ]

  return (
    <>
      <Head>
        <title>AI Bootcamp - Comprehensive AI Training Program | DataLabs</title>
        <meta
          name="description"
          content="Transform your team with our 8-week AI bootcamp. Learn GenAI, prompt engineering, neural networks, and build 19 live demo projects. Enroll now!"
        />
        <meta
          name="keywords"
          content="AI bootcamp, artificial intelligence training, GenAI course, prompt engineering, machine learning bootcamp, AI certification"
        />
        <meta property="og:title" content="AI Bootcamp Journey - DataLabs" />
        <meta
          property="og:description"
          content="Transform your team with our comprehensive AI training program. From fundamentals to advanced applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/bootcamp" />
      </Head>

      <div className="pt-24 md:pt-25">
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28" role="banner">
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
                <Image
                  src="/boot.png"
                  alt="AI Bootcamp training session with students learning artificial intelligence and machine learning concepts"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bootcamp Overview */}
        <section className="section-padding" role="main">
          <div className="container-custom">
            <header>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">Bootcamp Overview</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                A transformative learning experience designed for professionals at all levels
              </p>
            </header>

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
        <section
          className="section-padding bg-gray-50 dark:bg-gray-900"
          role="region"
          aria-labelledby="journey-heading"
        >
          <div className="container-custom">
            <header>
              <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
                Your AI Bootcamp Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                A structured path to AI proficiency
              </p>
            </header>

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
        <section id="curriculum" className="section-padding" role="region" aria-labelledby="curriculum-heading">
          <div className="container-custom">
            <header>
              <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
                Curriculum Highlights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Comprehensive coverage of essential AI topics
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculumTopics.map((topic, index) => (
                <CurriculumCard key={index} {...topic} />
              ))}
            </div>
          </div>
        </section>

        {/* Art of Possible with GenAI Section */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900" role="region" aria-labelledby="genai-heading">
          <div className="container-custom">
            <header>
              <h2 id="genai-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
                Art of Possible with GenAI
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Master the cutting-edge technologies shaping the future of business
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">What You Will Learn</h3>
                <div className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-gray-600 dark:text-gray-300">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Course Outcomes</h3>
                <div className="space-y-6">
                  {courseOutcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Topics Covered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {topicsCovered.map((topic, index) => (
                  <AnimatedCard key={index} className="p-4 text-center">
                    <div className="mb-3 flex justify-center text-primary-600" aria-hidden="true">
                      {topic.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{topic.title}</h4>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Program Details</h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary-600" aria-hidden="true" />
                      <span className="font-semibold">Timeline:</span>
                      <span className="text-gray-600 dark:text-gray-300">5 hours/week for 8 weeks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-primary-600" aria-hidden="true" />
                      <span className="font-semibold">Format:</span>
                      <span className="text-gray-600 dark:text-gray-300">Interactive lectures & hands-on demos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-600" aria-hidden="true" />
                      <span className="font-semibold">Projects:</span>
                      <span className="text-gray-600 dark:text-gray-300">19 live demo applications</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Who Should Join?</h3>
                <div className="space-y-4">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-gray-700 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {audience.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{audience.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{audience.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-center">8-Week Curriculum</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weeklyContent.map((week, index) => (
                  <AnimatedCard key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                        {week.week}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold mb-3">{week.title}</h4>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <CheckCircle
                                className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Live Demo Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveDemos.map((demo, index) => (
                  <AnimatedCard key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="text-xs text-primary-600 font-semibold mb-2">{demo.category}</div>
                    <h4 className="font-semibold text-sm">{demo.title}</h4>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding" role="region" aria-labelledby="testimonials-heading">
          <div className="container-custom">
            <header>
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Hear from our bootcamp graduates
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TestimonialCard
                quote="The DataLabs AI Bootcamp transformed my career. The hands-on approach and expert instructors helped me implement AI solutions that delivered immediate value to my organization."
                author="James Wilson"
                position="Data Scientist, TechCorp"
                image="/avm.jpg"
              />
              <TestimonialCard
                quote="As someone with limited technical background, I was amazed at how accessible the bootcamp made AI concepts. Now I can confidently lead AI initiatives in my department."
                author="Elena Rodriguez"
                position="Marketing Director, Global Retail"
                image="/avf.png"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary-600 text-white" role="region" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Start Your AI Journey?
            </h2>
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
        <section id="contact-form" className="section-padding" role="region" aria-labelledby="contact-heading">
          <div className="container-custom max-w-2xl mx-auto">
            <header>
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
                Request Information
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Fill out the form below to learn more about our AI Bootcamp
              </p>
            </header>

            <AnimatedCard className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto mb-4 h-10 w-10 text-primary-600" aria-hidden="true" />
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
    </>
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
      <div className="mb-4 flex justify-center" aria-hidden="true">
        {icon}
      </div>
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
            <Image
              src={image || "/placeholder.svg"}
              alt={`Step ${step}: ${title} - AI bootcamp journey milestone`}
              fill
              className="object-cover"
            />
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
                <Image
                  src={image || "/h4.jpg"}
                  alt={`Step ${step}: ${title} - AI bootcamp journey milestone`}
                  fill
                  className="object-cover"
                />
              </AnimatedCard>
            )}
          </div>

          {/* Right side content */}
          <div className={isLeft ? "order-2" : "order-1"}>
            {isLeft ? (
              <AnimatedCard className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Step ${step}: ${title} - AI bootcamp journey milestone`}
                  fill
                  className="object-cover"
                />
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
      <div className="mb-4 text-primary-600" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-gray-600 dark:text-gray-300">{topic}</span>
          </li>
        ))}
      </ul>
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
      <div className="mb-6 text-primary-600" aria-hidden="true">
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
      <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 flex-grow">{quote}</blockquote>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${author}, ${position} - AI bootcamp graduate testimonial`}
            fill
            className="object-cover"
          />
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
