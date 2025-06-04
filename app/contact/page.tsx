"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Mail, Phone, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const subject = searchParams.get("subject")
  const engineer = searchParams.get("engineer")
  const caseStudy = searchParams.get("case")

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    subject: subject || "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (subject) {
      let message = `I'm interested in learning more about ${subject}.`

      if (engineer) {
        message += ` I'd like to speak with ${engineer} or someone with similar expertise.`
      }

      if (caseStudy) {
        message += ` I'd like to receive more information about the "${caseStudy}" case study.`
      }

      setFormState((prev) => ({
        ...prev,
        subject: subject,
        message: message,
      }))
    }
  }, [subject, engineer, caseStudy])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          subject: "",
        })
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        alert(data.error || "Failed to send message")
      }
    } catch (error) {
      alert("Failed to send message, please try again later.")
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <Head>
        <title>Contact Us - AI Solutions & Consulting | DataLabs</title>
        <meta
          name="description"
          content="Get in touch with DataLabs for AI consulting, bootcamp inquiries, and custom AI solutions. Contact our expert team for strategic guidance and implementation support."
        />
        <meta
          name="keywords"
          content="contact AI consulting, AI solutions inquiry, DataLabs contact, AI bootcamp information, artificial intelligence consultation"
        />
        <meta property="og:title" content="Contact DataLabs - AI Solutions & Consulting" />
        <meta
          property="og:description"
          content="Have questions about our AI solutions? We're here to help. Reach out to our team for more information."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>

      <div className="pt-2">
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28" role="banner">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Get in <span className="text-primary-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Have questions about our AI solutions? We're here to help. Reach out to our team for more information.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding" role="main">
          <div className="container-custom">
            <header className="sr-only">
              <h2>Contact Information</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ContactInfoCard
                icon={<Mail className="h-6 w-6 text-primary-600" />}
                title="Email Us"
                details="info@datalabs.ai"
                link="mailto:info@datalabs.ai"
              />
              <ContactInfoCard
                icon={<Phone className="h-6 w-6 text-primary-600" />}
                title="Call Us"
                details="+1 (555) 123-4567"
                link="tel:+15551234567"
              />
              <ContactInfoCard
                icon={<Clock className="h-6 w-6 text-primary-600" />}
                title="Business Hours"
                details="Monday - Friday: 9AM - 6PM PST"
              />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact-form"
          className="section-padding bg-gray-50 dark:bg-gray-900"
          role="region"
          aria-labelledby="contact-form-heading"
        >
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <header>
                <h2
                  id="contact-form-heading"
                  className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight"
                >
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </header>

              <AnimatedCard className="p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8" role="status" aria-live="polite">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <fieldset>
                      <legend className="sr-only">Contact Information</legend>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name{" "}
                            <span className="text-red-500" aria-label="required">
                              *
                            </span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            aria-describedby="name-error"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address{" "}
                            <span className="text-red-500" aria-label="required">
                              *
                            </span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="sr-only">Additional Information</legend>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="sr-only">Message Details</legend>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject{" "}
                          <span className="text-red-500" aria-label="required">
                            *
                          </span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          aria-describedby="subject-error"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message{" "}
                          <span className="text-red-500" aria-label="required">
                            *
                          </span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your project or inquiry..."
                          rows={5}
                          required
                          aria-describedby="message-error"
                        />
                      </div>
                    </fieldset>

                    <Button type="submit" className="w-full" disabled={isSubmitting} aria-describedby="submit-status">
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding" role="region" aria-labelledby="faq-heading">
          <div className="container-custom">
            <header>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <FaqCard key={index} question={faq.question} answer={faq.answer} />
              ))}
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
              Schedule a consultation with our experts to discuss your AI needs.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="px-8"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}

function ContactInfoCard({
  icon,
  title,
  details,
  link,
}: {
  icon: React.ReactNode
  title: string
  details: string
  link?: string
}) {
  return (
    <AnimatedCard className="p-6 text-center h-full flex flex-col items-center">
      <div
        className="w-12 h-12 rounded-full bg-primary-100 dark:bg-gray-800 flex items-center justify-center mb-4"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {link ? (
        <a
          href={link}
          className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={`${title}: ${details}`}
        >
          {details}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{details}</p>
      )}
    </AnimatedCard>
  )
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <AnimatedCard className="p-6">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </AnimatedCard>
  )
}

// Sample data
const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across various industries including finance, healthcare, retail, manufacturing, technology, and more. Our AI solutions are tailored to address specific industry challenges.",
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer:
      "Implementation timelines vary based on the complexity of the solution and your organization's readiness. Simple projects can be completed in weeks, while more complex transformations may take several months.",
  },
  {
    question: "Do you offer custom AI solutions?",
    answer:
      "Yes, we specialize in developing custom AI solutions tailored to your specific business needs and challenges. We work closely with you to understand your requirements and design solutions accordingly.",
  },
  {
    question: "What is the typical ROI for your AI solutions?",
    answer:
      "ROI varies by project and industry, but our clients typically see returns within 6-12 months of implementation. We work with you to establish clear metrics and track the value delivered by our solutions.",
  },
]
