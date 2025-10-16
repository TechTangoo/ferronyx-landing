import AnimatedContent from '@/components/AnimatedContent'
import { colors } from '@/utils/colors'
import React, { useState } from 'react'

function Faqs() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    const faqs = [
        {
            question: "Does Ferronyx only work with ROS2 robots?",
            answer: "No. Ferronyx supports both ROS-based and non-ROS robots. For non-ROS systems, it still collects machine metrics, device health, and process data — giving full observability and alerting."
        },
        {
            question: "How hard is it to install Ferronyx?",
            answer: "It takes under 10 minutes. Run one command, and our daemon handles the rest — from connecting securely to detecting your ROS topics."
        },
        {
            question: "Can the AI really execute commands?",
            answer: "Yes — but only with human approval. Every AI-generated command comes with an explanation, expected outcome, and editable preview before execution."
        },
        {
            question: "What data does Ferronyx store?",
            answer: "Only system metrics, logs, and diagnostic data you configure. All data is encrypted in transit and at rest, stored in your region's InfluxDB cluster for one year."
        },
        {
            question: "How does Ferronyx measure MTTR and MTTA?",
            answer: "Every alert and incident is tracked automatically — from trigger to acknowledgment to resolution — helping your team measure and continuously improve reliability."
        }
    ]



    return (

        <div className='relative h-full w-screen overflow-hidden' style={{ backgroundColor: colors.background }}>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20"
                style={{
                    background: `radial-gradient(circle, ${colors.primary}, ${colors.accent} 40%, transparent 70%)`,
                    filter: 'blur(60px)'
                }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center mb-16">
                    <AnimatedContent duration={1}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.text }}>
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg" style={{ color: colors.textSecondary }}>
                            Everything you need to know about Ferronyx
                        </p>
                    </AnimatedContent>
                </div>
                <AnimatedContent duration={1} delay={0.5}>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group rounded-xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    borderColor: 'rgba(255, 255, 255, 0.1)',
                                    backgroundColor: `${colors.forebackground}80`
                                }}
                            >
                                {/* Question Header - Clickable */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-6 flex items-center justify-between transition-colors duration-200 hover:bg-white/5 rounded-xl"
                                >
                                    <h3
                                        className="text-lg font-semibold pr-8"
                                        style={{ color: colors.text }}
                                    >
                                        {faq.question}
                                    </h3>

                                    {/* Animated Chevron Icon */}
                                    <div
                                        className={`transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                            }`}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ color: colors.light }}
                                        >
                                            <polyline points="6,9 12,15 18,9"></polyline>
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer Content - Expandable */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6">
                                        <div
                                            className="border-t pt-4"
                                            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            <p
                                                className="text-base leading-relaxed"
                                                style={{ color: colors.textSecondary }}
                                            >
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </AnimatedContent>
            </div>

        </div>

    )
}

export default Faqs
