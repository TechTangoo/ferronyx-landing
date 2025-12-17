import React, { useState } from 'react';
import { Twitter, Linkedin, Send, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import logo from '../assets/logo.svg';

const FerronyxFooter = () => {
    const [formData, setFormData] = useState({
        company: '',
        email: '',
        comments: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Placeholder for submission logic
        alert("Thanks! We'll be in touch.");
        setFormData({ company: '', email: '', comments: '' });
    };

    return (
        <footer id="contact-footer" className="relative w-full bg-black pt-20 pb-10 px-6 border-t border-white/5 font-sans overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50 blur-[1px]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Column: Brand & Info */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Ferronyx Logo" className="h-10 w-auto" />
                        <span className="text-2xl font-bold text-white tracking-tight">Ferronyx</span>
                    </div>
                    
                    <div className="max-w-md">
                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                            Command your robot fleet from anywhere.
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            Real-time fleet observability, AI-assisted troubleshooting, and SRE-grade incident management for modern robotics teams.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="text-white font-semibold">Contact Us</h4>
                        <a href="mailto:support@ferronyx.com" className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors">
                            <Mail className="h-4 w-4" /> support@ferronyx.com
                        </a>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/ferronyx-robotics/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-2">Get Started Today</h4>
                    <p className="text-zinc-500 mb-6 text-sm">Tell us about your fleet and we'll help you get set up.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Company</label>
                            <Input 
                                id="company"
                                name="company"
                                value={formData.company} 
                                onChange={handleInputChange} 
                                placeholder="Acme Robotics" 
                                className="bg-zinc-950/50 border-white/10 text-white placeholder:text-zinc-700 focus:border-blue-500/50 focus:ring-blue-500/20" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Work Email</label>
                            <Input 
                                id="email" 
                                name="email"
                                type="email"
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="you@company.com" 
                                className="bg-zinc-950/50 border-white/10 text-white placeholder:text-zinc-700 focus:border-blue-500/50 focus:ring-blue-500/20" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="comments" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Project Details</label>
                            <Textarea 
                                id="comments"
                                name="comments" 
                                value={formData.comments} 
                                onChange={handleInputChange} 
                                placeholder="We have 50 AMRs and need better logging..." 
                                className="bg-zinc-950/50 border-white/10 text-white placeholder:text-zinc-700 min-h-[100px] resize-none focus:border-blue-500/50 focus:ring-blue-500/20" 
                            />
                        </div>
                        <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200 font-semibold h-11 mt-2">
                            Request Demo
                        </Button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-zinc-600">
                <span>© 2025 Ferronyx. All rights reserved.</span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default FerronyxFooter;
