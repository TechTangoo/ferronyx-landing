import AnimatedContent from '@/components/AnimatedContent'
import { colors } from '@/utils/colors'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

function Faqs() {
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
        <div className='relative h-full w-screen overflow-hidden py-24' style={{ backgroundColor: colors.background }}>
            {/* Ambient background gradient */}
            <div className="absolute inset-0 gradient-mesh opacity-30" />
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-3xl"
                style={{
                    background: `radial-gradient(circle, ${colors.primary}, ${colors.accent} 40%, transparent 70%)`
                }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <AnimatedContent duration={1}>
                        <Badge
                            variant="outline"
                            className="glass px-6 py-3 mb-8 text-base font-semibold border-0"
                            style={{ color: colors.primaryLight }}
                        >
                            FAQs
                        </Badge>
                        <h2 className="text-display font-bold mb-6" style={{ color: colors.text }}>
                            Questions? We've Got Answers
                        </h2>
                        <p className="text-xl" style={{ color: colors.textSecondary }}>
                            Everything you need to know about Ferronyx
                        </p>
                    </AnimatedContent>
                </div>

                <AnimatedContent duration={1} delay={0.3}>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="glass-strong rounded-2xl border-0 overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                            >
                                <AccordionTrigger
                                    className="px-8 py-6 text-lg font-semibold hover:bg-white/5 rounded-2xl [&[data-state=open]>svg]:rotate-180 text-left"
                                    style={{ color: colors.text }}
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-8 pb-6">
                                    <p
                                        className="text-lg leading-relaxed pt-4 border-t"
                                        style={{ color: colors.textSecondary, borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                    >
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedContent>
            </div>
        </div>
    )
}

export default Faqs
