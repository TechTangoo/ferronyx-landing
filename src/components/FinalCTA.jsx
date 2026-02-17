import React from 'react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { trackSignup } from '../lib/analytics';

const FinalCTA = () => {
    return (
        <section className="relative w-full bg-zinc-950 py-24 md:py-32 px-6 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                {/* Blue radial glow from center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
                {/* Dot grid */}
                <div className="absolute inset-0 dot-grid" />
            </div>

            {/* Blue divider top */}
            <div className="blue-divider w-full max-w-4xl mx-auto mb-20" />

            <ScrollReveal className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                    Start monitoring your fleet{' '}
                    <span className="text-blue-400">in under 10 minutes.</span>
                </h2>

                <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                    One command. Full observability. No credit card.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <a href="https://dev.ferronyx.com/register" target="_blank" rel="noopener noreferrer" onClick={() => trackSignup('final-cta')}>
                        <Button size="lg" className="rounded-full text-sm h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02]">
                            Get Started — Free
                        </Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=-12Zc0KPB2I" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full text-sm h-12 px-8 border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-white backdrop-blur-sm transition-all hover:scale-[1.02] group">
                            <Play className="mr-2 h-3.5 w-3.5 fill-white" /> Watch Demo
                        </Button>
                    </a>
                </div>

                <p className="text-sm text-zinc-600">
                    No credit card required &middot; Free for up to 5 robots
                </p>
            </ScrollReveal>
        </section>
    );
};

export default FinalCTA;
