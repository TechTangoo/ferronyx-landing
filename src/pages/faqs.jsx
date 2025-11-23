import React, { useState } from 'react'
import AnimatedContent from '../components/AnimatedContent'

function Faqs() {
    const [openFaq, setOpenFaq] = useState(null);

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

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className='relative w-full bg-background py-24 lg:py-32'>
            {/* Professional Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <AnimatedContent duration={0.8}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Questions?{' '}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                We've Got Answers
                            </span>
                        </h2>
                        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Everything you need to know about Ferronyx and how it can help your robotics team
                        </p>
                    </AnimatedContent>
                </div>

                {/* FAQ Accordion */}
                <AnimatedContent duration={0.8} delay={0.2}>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-200"
                                        aria-expanded={openFaq === index}
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground pr-4 leading-relaxed">
                                                {faq.question}
                                            </h3>
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                                                        openFaq === index ? 'rotate-180' : ''
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                    
                                    {/* FAQ Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openFaq === index 
                                                ? 'max-h-96 opacity-100' 
                                                : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="pt-4 border-t border-border">
                                                <p className="text-base text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedContent>

                {/* Call to Action */}
                <div className="text-center mt-16 lg:mt-20">
                    <AnimatedContent duration={0.8} delay={0.4}>
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 lg:p-12">
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6">
                                Our team is here to help you get the most out of Ferronyx
                            </p>
                            <a
                                href="mailto:support@ferronyx.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                            >
                                Contact Support
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default Faqs
