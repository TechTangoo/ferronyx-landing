import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Button from '../components/Button'

function Footer() {
    const [formData, setFormData] = useState({
        company: '',
        email: '',
        comments: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

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
        e.preventDefault()

        // Validate form data
        if (!formData.comments || !formData.company || !formData.email) {
            alert('Please fill in all required fields.');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            // Send email notification
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
        } catch (error) {
            console.error('Demo booking error:', error);
            alert('There was an issue with your request. Please try again.');
        }
    }

    return (
        <footer id="contact-footer" className="relative w-full bg-background border-t border-border">
            {/* Professional gradient background */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />

            {/* Main Footer Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Left Side - Company Info */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={logo}
                                            alt="Ferronyx Logo"
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                                            Ferronyx
                                        </h3>
                                        <p className="text-sm text-primary font-medium">
                                            The Intelligence Layer for Robotics
                                        </p>
                                    </div>
                                </div>

                                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                    Monitor, debug, and fix your robots from anywhere.
                                    Real-time fleet observability and AI-assisted troubleshooting
                                    for every robot, all in one cloud dashboard.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:support@ferronyx.com"
                                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                                    >
                                        <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">support@ferronyx.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-75"></div>
                            <div className="relative bg-card border border-border rounded-xl p-8 shadow-2xl">
                                <div className="space-y-6">
                                    <div className="text-center space-y-2">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                            Get Started Today
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Tell us about your robotics fleet and we'll show you how Ferronyx can help.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="block text-sm font-medium text-foreground">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200"
                                                placeholder="Enter your company name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground">
                                                Business Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200"
                                                placeholder="Enter your business email"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="comments" className="block text-sm font-medium text-foreground">
                                                Tell us about your project *
                                            </label>
                                            <textarea
                                                id="comments"
                                                name="comments"
                                                value={formData.comments}
                                                onChange={handleInputChange}
                                                required
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors duration-200 resize-none"
                                                placeholder="Tell us about your robotics project and specific requirements..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="gradient"
                                            size="lg"
                                            className="w-full font-semibold"
                                        >
                                            Send Message
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-muted-foreground">
                                © Ferronyx 2025 | All rights reserved.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a
                                    href="/privacy"
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    Privacy Policy
                                </a>
                                <span className="text-muted-foreground">|</span>
                                <a
                                    href="/terms"
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
