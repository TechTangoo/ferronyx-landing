import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import ScrollReveal from './ScrollReveal';

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
];

const FerronyxFAQ = () => {
    return (
        <section id="faqs" className="relative w-full bg-black py-24 px-6 border-t border-white/5">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <ScrollReveal className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/70 w-fit mb-6">
                        FAQ
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Questions? <span className="text-zinc-500">Answers.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Everything you need to know about getting started.
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-2xl border border-white/5 bg-zinc-900/20 px-2"
                        >
                            <AccordionTrigger className="px-4 py-6 text-lg font-medium text-white hover:text-blue-400 transition-colors [&[data-state=open]]:text-blue-400">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-6 text-zinc-400 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ScrollReveal>
        </section>
    );
};

export default FerronyxFAQ;
