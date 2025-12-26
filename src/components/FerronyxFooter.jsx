import React, { useState } from 'react';
import { Twitter, Linkedin, Mail } from "lucide-react";
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

    const sendDemoBookingEmail = async (bookingData) => {
        try {
            // EmailJS configuration - replace these with your actual values
            const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

            // Import EmailJS (you'll need to install: npm install @emailjs/browser)
            const emailjs = await import('@emailjs/browser');

            const templateParams = {
                email: bookingData.email,
                company: bookingData.company,
                name: "User",
                time: new Date().toLocaleString(),
                message: bookingData.comments,
                teamemail: 'team@ferronyx.com',
            };

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            if (response.status === 200) {
                return true;
            } else {
                throw new Error('EmailJS failed to send email');
            }
        } catch (error) {
            console.error('Error sending demo booking email:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailSent = await sendDemoBookingEmail(formData);

        if (emailSent) {
            // Clear form
            setFormData({
                comments: '',
                company: '',
                email: ''
            });

            alert('Thank you! Your demo booking request has been sent. We\'ll be in touch soon.');
        } else {
            alert('There was an issue sending your request. Please try again or contact us directly at support@ferronyx.com');
        }
    };

    return (
        <footer id="contact-footer" className="relative w-full bg-[#050505] pt-32 pb-10 px-6 border-t border-white/[0.05] font-sans overflow-hidden">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Column: Brand & Info */}
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Ferronyx Logo" className="h-8 w-auto opacity-90" />
                        <span className="text-xl font-bold text-white tracking-tight">Ferronyx</span>
                    </div>

                    <div className="max-w-md">
                        <h3 className="text-3xl font-semibold text-white mb-4 leading-tight tracking-tight">
                            Command your robot fleet from anywhere.
                        </h3>
                        <p className="text-[#8A8F98] leading-relaxed text-lg">
                            Real-time fleet observability, AI-assisted troubleshooting, and SRE-grade incident management for modern robotics teams.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-medium text-white uppercase tracking-widest">Contact</h4>
                        <a href="mailto:support@ferronyx.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            <Mail className="h-4 w-4" /> support@ferronyx.com
                        </a>
                    </div>

                    <div className="flex gap-4 mt-2">
                        <a href="#" className="h-10 w-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all border border-white/[0.05]">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="https://www.linkedin.com/company/ferronyx-robotics/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all border border-white/[0.05]">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Right Column: Contact Form - Linear Style */}
                <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-8 shadow-sm">
                    <h4 className="text-lg font-medium text-white mb-2">Book a Demo</h4>
                    <p className="text-[#8A8F98] mb-8 text-sm">See Ferronyx in action. We'll walk you through your specific use case.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Company</label>
                            <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Acme Robotics"
                                className="bg-[#050505] border-white/[0.08] text-white placeholder:text-zinc-700 h-11 focus:border-white/20 focus:ring-0 rounded-lg transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Work Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@company.com"
                                className="bg-[#050505] border-white/[0.08] text-white placeholder:text-zinc-700 h-11 focus:border-white/20 focus:ring-0 rounded-lg transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="comments" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">Project Details</label>
                            <Textarea
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleInputChange}
                                placeholder="We have 50 AMRs and need better logging..."
                                className="bg-[#050505] border-white/[0.08] text-white placeholder:text-zinc-700 min-h-[120px] resize-none focus:border-white/20 focus:ring-0 rounded-lg transition-colors"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-[#EDEDED] text-black hover:bg-white font-medium h-11 mt-4 rounded-lg shadow-lg hover:shadow-white/5 transition-all">
                            Book Demo
                        </Button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between text-xs text-zinc-600">
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