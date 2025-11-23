import AnimatedContent from '@/components/AnimatedContent'
import NetworkBackground from '@/components/NetworkBackground'
import { colors } from '@/utils/colors'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

function Faqs() {
    const headerRef = useRef(null);
    const accordionRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
    const isAccordionInView = useInView(accordionRef, { once: true, margin: "-100px" });

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
            {/* Static network background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <NetworkBackground animate={false} density="light" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-8"
                    >
                        <Badge
                            variant="outline"
                            className="glass px-6 py-3 text-base font-semibold border-0"
                            style={{ color: colors.primary }}
                        >
                            FAQs
                        </Badge>
                    </motion.div>
                    <h2 className="text-display font-bold mb-6" style={{ color: colors.text }}>
                        Questions? We've Got Answers
                    </h2>
                    <p className="text-xl" style={{ color: colors.textSecondary }}>
                        Everything you need to know about Ferronyx
                    </p>
                </motion.div>

                <motion.div
                    ref={accordionRef}
                    initial={{ opacity: 0 }}
                    animate={isAccordionInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isAccordionInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="glass-strong rounded-2xl border-0 overflow-hidden"
                                >
                                    <motion.div whileHover={{ scale: 1.01 }}>
                                        <AccordionTrigger
                                            className="px-8 py-6 text-lg font-semibold hover:bg-white/5 rounded-2xl [&[data-state=open]>svg]:rotate-180 text-left"
                                            style={{ color: colors.text }}
                                        >
                                            {faq.question}
                                        </AccordionTrigger>
                                    </motion.div>
                                    <AccordionContent className="px-8 pb-6">
                                        <p
                                            className="text-lg leading-relaxed pt-4 border-t"
                                            style={{ color: colors.textSecondary, borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </div>
    )
}

export default Faqs
