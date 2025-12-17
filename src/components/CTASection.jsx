import React from 'react';
import { Button } from "./ui/button";
import ScrollReveal from './ScrollReveal';

const CTASection = () => {
    return (
        <section className="snap-start relative min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent opacity-20"></div>

            <ScrollReveal className="relative z-10 flex flex-col items-center text-center gap-8 max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                    Engineered for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">excellence</span>
                </h2>

                <p className="text-xl text-zinc-400">
                    Ready to deploy your capital? Join thousands of institutional lenders today.
                </p>

                <div className="flex gap-4 mt-8">
                    <Button size="lg" className="rounded-full text-lg px-10 h-16 bg-white text-black hover:bg-zinc-200 font-bold transition-transform hover:scale-105 active:scale-95">
                        Start Building
                    </Button>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default CTASection;
