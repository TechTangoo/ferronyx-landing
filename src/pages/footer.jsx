import React, { useState } from 'react'
import { colors } from '../utils/colors'
import Button from '../components/Button'
import logo from '../assets/logo.png'

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
        <footer id="contact-footer" className="relative w-full mt-20 overflow-hidden">
            {/* Linear gradient background from bottom to top */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: `linear-gradient(to top, ${colors.primary}, ${colors.background})`
                }}
            />

            {/* Top border with primary color that fades at corners */}
            <div className="relative w-full h-[2px]">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(90deg, transparent 0%, ${colors.primary} 20%, ${colors.primary} 80%, transparent 100%)`
                    }}
                />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Side - Logo and Company Info */}
                        <div className="flex flex-col ">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={logo}
                                    alt="ferronyx logo"
                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                />
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                        Ferronyx
                                    </h3>
                                    <p className="text-sm" style={{ color: colors.textSecondary }}>
                                        ROS 2 Fleet Management Platform
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
                                Monitor, debug, and fix your ROS 2 robots from anywhere.
                                Real-time fleet observability and AI-assisted troubleshooting
                                for every robot, all in one cloud dashboard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="mailto:support@ferronyx.com"
                                    className="text-white hover:text-opacity-80 transition-colors"
                                    style={{ color: colors.light }}
                                >
                                    support@ferronyx.com
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Demo Booking Form */}
                        <div href="#contactus" className="flex flex-col justify-center" style={{ backgroundColor: `${colors.secondary}40`, borderRadius: '16px', border: `1px solid ${colors.primary}80`, padding: '1px' }}>
                            <div
                                className="p-8 rounded-2xl justify-center items-center"
                            >

                                <form onSubmit={handleSubmit} className="space-y-4 justify-center">
                                    {/* <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors"
                                            style={{
                                                borderColor: `${colors.accent}60`,
                                                backgroundColor: `${colors.background}60`
                                            }}
                                            placeholder="Enter your full name"
                                        />
                                    </div> */}

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors"
                                            style={{
                                                borderColor: `${colors.accent}60`,
                                                backgroundColor: `${colors.background}60`
                                            }}
                                            placeholder="Enter your company name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                            Business Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors"
                                            style={{
                                                borderColor: `${colors.accent}60`,
                                                backgroundColor: `${colors.background}60`
                                            }}
                                            placeholder="Enter your business email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="comments" className="block text-sm font-medium text-white mb-2">
                                            Comments*
                                        </label>
                                        <textarea
                                            id="comments"
                                            name="comments"
                                            value={formData.comments}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-vertical"
                                            style={{
                                                borderColor: `${colors.accent}60`,
                                                backgroundColor: `${colors.background}60`
                                            }}
                                            placeholder="Tell us more about your robotics project or specific requirements..."
                                        />
                                    </div>
                                    <div className="flex justify-center mt-6">
                                        <button
                                            type="submit"
                                            variant="gradient"
                                            size="lg"
                                            className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-8 rounded-md"
                                        >
                                            Contact Us
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 border-t border-white/20 pt-6'>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm" style={{ color: colors.textSecondary }}>
                            © Ferronyx 2025 | All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a
                                href="/privacy"
                                className="hover:text-white transition-colors"
                                style={{ color: colors.textSecondary }}
                            >
                                Privacy Policy
                            </a>
                            <p style={{ color: colors.textSecondary }} >|</p>
                            <a
                                href="/terms"
                                className="hover:text-white transition-colors"
                                style={{ color: colors.textSecondary }}
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
