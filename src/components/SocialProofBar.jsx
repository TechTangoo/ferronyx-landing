import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 50, suffix: '+', label: 'Robots', sublabel: 'Monitored' },
    { value: 10, suffix: 'K+', label: 'Topics', sublabel: 'Tracked' },
    { value: 99.9, suffix: '%', label: 'Uptime', sublabel: 'SLA', decimals: 1 },
    { value: 5, prefix: '<', suffix: '%', label: 'Agent', sublabel: 'Overhead' },
];

function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0, shouldAnimate }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldAnimate) return;

        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [shouldAnimate, value]);

    const display = decimals > 0
        ? count.toFixed(decimals)
        : Math.round(count);

    return (
        <span className="font-mono text-4xl md:text-5xl font-bold text-white tabular-nums">
            {prefix}{display}{suffix}
        </span>
    );
}

const SocialProofBar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative w-full bg-zinc-950 py-20 px-6">
            {/* Top divider */}
            <div className="blue-divider w-full max-w-4xl mx-auto mb-16" />

            <div className="max-w-5xl mx-auto text-center">
                <p className="text-sm text-zinc-500 uppercase tracking-widest font-medium mb-12">
                    Trusted by robotics teams worldwide
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                prefix={stat.prefix || ''}
                                decimals={stat.decimals || 0}
                                shouldAnimate={isInView}
                            />
                            <div className="text-sm text-zinc-400">{stat.label}</div>
                            <div className="text-xs text-zinc-600">{stat.sublabel}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom divider */}
            <div className="blue-divider w-full max-w-4xl mx-auto mt-16" />
        </section>
    );
};

export default SocialProofBar;
