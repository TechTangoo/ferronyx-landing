import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ScrollReveal = ({ children, className, delay = 0, duration = 0.8 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }} // Triggers when 10% of element is in view
            transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }} // Smooth "Apple-like" ease
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
