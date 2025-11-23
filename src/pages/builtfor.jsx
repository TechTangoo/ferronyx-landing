import React from 'react'
import AnimatedContent from '../components/AnimatedContent';
import Button from '../components/Button';
import academics from '../assets/academics.png';
import research from '../assets/researchlabs.png';
import robotics from '../assets/robotics.png';
import sreengineer from '../assets/sreengineer.png';
import teams from '../assets/teams.png';

const audienceData = [
    {
        id: 1,
        title: "Robotics Companies",
        icon: robotics,
        desc: "Monitor production fleets, debug issues remotely, and reduce downtime across distributed deployments.",
        highlight: "Production Scale"
    },
    {
        id: 2,
        title: "Research Labs",
        icon: research,
        desc: "Get instant visibility into experiments, debug ROS workflows, and track system health without custom tooling.",
        highlight: "Research Focus"
    },
    {
        id: 3,
        title: "Platform & Autonomy Teams",
        icon: teams,
        desc: "Unify observability for autonomous systems, correlate incidents, and ship faster with AI-assisted insights.",
        highlight: "Autonomous Systems"
    },
    {
        id: 4,
        title: "Robotics SRE & DevOps",
        icon: sreengineer,
        desc: "Implement SRE best practices with on-call workflows, escalation policies, and automated incident management.",
        highlight: "SRE Ready"
    },
    {
        id: 5,
        title: "Academic & R&D Teams",
        icon: academics,
        desc: "Focus on research, not infrastructure. Set up in minutes and start tracking robot behavior immediately.",
        highlight: "Quick Setup"
    }
];

function Builtfor() {
    const scrollToFooter = () => {
        const footer = document.getElementById('contact-footer');
        footer?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="builtfor" className='relative w-full bg-background py-24 lg:py-32'>
            {/* Professional Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl opacity-60" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl opacity-60" />
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full"
                     style={{
                         backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--border)) 1px, transparent 0)',
                         backgroundSize: '60px 60px'
                     }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-24">
                    <AnimatedContent duration={0.8}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Trusted Worldwide
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Built for{' '}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Every Robotics Team
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            From research labs to production fleets — teams rely on Ferronyx to scale with confidence and ship robots faster
                        </p>
                    </AnimatedContent>
                </div>

                {/* Audience Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mb-24">
                    {audienceData.map((item, idx) => (
                        <AnimatedContent key={item.id} duration={0.6} delay={idx * 0.1}>
                            <div className="group relative h-full">
                                {/* Background glow on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                                
                                {/* Card */}
                                <div className="relative bg-card border border-border rounded-xl p-8 h-full hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl">
                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {item.highlight}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <img src={item.icon} alt={item.title} className="w-10 h-10" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Bottom indicator */}
                                    <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="text-center">
                    <AnimatedContent duration={0.8} delay={0.6}>
                        <div className="relative max-w-4xl mx-auto">
                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-60" />
                            
                            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12">
                                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                    Ready to Get Started?
                                </h3>
                                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Join robotics teams worldwide who trust Ferronyx to monitor, debug, and scale their robot fleets
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        variant="gradient"
                                        size="lg"
                                        onClick={scrollToFooter}
                                        className="font-semibold"
                                    >
                                        Book a Demo
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Button>
                                    
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        onClick={scrollToFooter}
                                        className="font-semibold"
                                    >
                                        Contact Sales
                                    </Button>
                                </div>
                                
                                {/* Trust indicators */}
                                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        <span>10-minute setup</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        <span>No vendor lock-in</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        <span>Enterprise support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default Builtfor
