import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const TermsPage = () => {
    const termsSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://ferronyx.com/terms/#webpage",
                "url": "https://ferronyx.com/terms",
                "name": "Terms and Conditions - Ferronyx",
                "description": "Terms and Conditions for using the Ferronyx robot fleet observability platform.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                },
                "breadcrumb": {
                    "@id": "https://ferronyx.com/terms/#breadcrumb"
                }
            }
        ]
    };

    const breadcrumbItems = [
        { name: 'Home', url: 'https://ferronyx.com' },
        { name: 'Terms and Conditions', url: 'https://ferronyx.com/terms' }
    ];

    return (
        <>
            <SEO 
                title="Terms and Conditions - Ferronyx"
                description="Terms and Conditions for using the Ferronyx robot fleet observability platform."
                canonicalUrl="https://ferronyx.com/terms"
            />
            <BreadcrumbSchema items={breadcrumbItems} />
            <script type="application/ld+json">
                {JSON.stringify(termsSchema)}
            </script>

            <main className="min-h-screen bg-black pt-24 pb-20">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Terms and Conditions
                            </h1>
                            <p className="text-lg text-zinc-400">
                                Ferronyx Private Limited.
                            </p>
                            <p className="text-sm text-zinc-500 mt-2">
                                Last Updated: February 01, 2026
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div className="space-y-12">
                            {/* Section 1 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">1. Introduction and Acceptance of Terms</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Welcome to Ferronyx. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and Ferronyx Private Limited. ("Ferronyx," "Company," "we," "us," or "our") governing your access to and use of the Ferronyx platform, including our website at https://ferronyx.com, cloud-based software, APIs, documentation, and related services (collectively, the "Services").
                                </p>
                                <p className="text-zinc-400 leading-relaxed mt-4">
                                    By accessing or using the Services, creating an account, or clicking to accept these Terms, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                                </p>
                                <p className="text-zinc-400 leading-relaxed mt-4">
                                    If you do not agree to these Terms, you may not access or use the Services.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">2. Definitions</h2>
                                <ul className="space-y-4 text-zinc-400">
                                    <li>
                                        <strong className="text-white">"Authorized Users"</strong> means individuals who are authorized by Customer to access and use the Services under Customer's account, such as employees, contractors, or agents.
                                    </li>
                                    <li>
                                        <strong className="text-white">"Customer Data"</strong> means any data, content, logs, telemetry, sensor readings, robot operational data, configuration files, or other information that Customer or its Authorized Users submit, upload, transmit, or otherwise make available through the Services.
                                    </li>
                                    <li>
                                        <strong className="text-white">"Documentation"</strong> means the user guides, technical manuals, API documentation, and other materials provided by Ferronyx describing the functionality and use of the Services.
                                    </li>
                                    <li>
                                        <strong className="text-white">"Fleet"</strong> means the collection of robots connected to the Services under Customer's account.
                                    </li>
                                    <li>
                                        <strong className="text-white">"Robot" or "Robot System"</strong> means any autonomous or semi-autonomous robotic device running ROS (Robot Operating System) or ROS2 that is connected to and monitored through the Services.
                                    </li>
                                    <li>
                                        <strong className="text-white">"Subscription Period"</strong> means the term during which Customer has paid access to the Services, as specified in the applicable Order Form or subscription agreement.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">3. Description of Services</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">3.1 Platform Overview</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Ferronyx provides a cloud-based observability and diagnostics platform for ROS and ROS2 robotic systems. The Services include:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                                    <li>Real-time fleet monitoring and dashboard visualization</li>
                                    <li>AI-powered root cause analysis and automated debugging assistance</li>
                                    <li>Intelligent alert correlation and notification systems</li>
                                    <li>Navigation stack debugging tools including Nav2 visibility and timeline replay</li>
                                    <li>Sensor drift detection and monitoring</li>
                                    <li>OTA (Over-the-Air) deployment tracking and failure correlation</li>
                                    <li>GPU monitoring and inference optimization metrics</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4 mt-8">3.2 Service Availability</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Ferronyx will use commercially reasonable efforts to make the Services available 24 hours a day, 7 days a week, except for scheduled maintenance, emergency maintenance, and circumstances beyond our reasonable control. Service availability targets, if any, will be set forth in a separate Service Level Agreement (SLA) where applicable.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">4. Account Registration and Security</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">4.1 Account Creation</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    To use the Services, you must create an account by providing accurate, current, and complete information. You agree to maintain and promptly update your account information to keep it accurate and complete.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">4.2 Account Security</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Use strong, unique passwords and enable multi-factor authentication where available</li>
                                    <li>Notify Ferronyx immediately of any unauthorized access or security breach</li>
                                    <li>Ensure that Authorized Users comply with these Terms</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">4.3 API Keys and Access Tokens</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    You are responsible for safeguarding any API keys, access tokens, or other credentials issued for connecting your Robot Systems to the Services. These credentials should be treated as confidential information and should not be shared or exposed in public repositories or unsecured locations.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">5. Customer Responsibilities and Acceptable Use</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">5.1 Lawful Use</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You agree to use the Services only for lawful purposes and in accordance with these Terms, all applicable laws and regulations, and any applicable third-party agreements (including agreements with your robot hardware manufacturers or software vendors).
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.2 Prohibited Activities</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">You agree not to:</p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Use the Services to monitor or control robots engaged in unlawful activities</li>
                                    <li>Attempt to gain unauthorized access to any systems, networks, or data</li>
                                    <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                                    <li>Interfere with or disrupt the integrity or performance of the Services</li>
                                    <li>Upload malicious code, viruses, or harmful content</li>
                                    <li>Resell, sublicense, or provide the Services to third parties without authorization</li>
                                    <li>Use the Services in any manner that could damage, disable, or impair Ferronyx's systems</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">5.3 Robot Operations</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    You acknowledge that Ferronyx provides observability and diagnostic tools but does not directly control your Robot Systems. You remain solely responsible for the safe operation of your robots, compliance with applicable safety regulations, and any decisions made based on data or insights provided by the Services.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">6. Fees and Payment</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">6.1 Subscription Fees</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Access to the Services requires payment of applicable subscription fees as set forth in your Order Form or the pricing displayed on our website. All fees are quoted in U.S. dollars unless otherwise specified.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">6.2 Payment Terms</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Fees are due in advance and are non-refundable except as expressly set forth herein. Payment must be made via the payment methods accepted by Ferronyx. If you fail to make timely payment, Ferronyx may suspend or terminate your access to the Services.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">6.3 Taxes</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    All fees are exclusive of applicable taxes (including sales, use, VAT, and similar taxes), which Customer is responsible for paying, except for taxes based on Ferronyx's net income.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">6.4 Price Changes</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Ferronyx reserves the right to modify pricing upon at least thirty (30) days' prior written notice. Price changes will take effect at the start of the next Subscription Period following such notice.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">7. Intellectual Property Rights</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">7.1 Ferronyx Intellectual Property</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    The Services, including all software, algorithms, AI models, user interfaces, designs, trademarks, Documentation, and other intellectual property, are owned by Ferronyx or its licensors. These Terms do not grant you any ownership rights in the Services. You are granted only a limited, non-exclusive, non-transferable, revocable license to access and use the Services during the Subscription Period in accordance with these Terms.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">7.2 Customer Data Ownership</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You retain all ownership rights in your Customer Data. By using the Services, you grant Ferronyx a limited license to host, process, store, and display Customer Data solely as necessary to provide the Services to you.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">7.3 Aggregated and Anonymized Data</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Ferronyx may create aggregated and anonymized data derived from Customer Data that does not identify you or any individual. Ferronyx may use such data for purposes including improving the Services, developing new features, conducting research, and benchmarking.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">7.4 Feedback</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    If you provide Ferronyx with suggestions, ideas, or feedback regarding the Services ("Feedback"), you grant Ferronyx a perpetual, worldwide, royalty-free license to use and incorporate such Feedback without obligation to you.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">8. Data Privacy and Security</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">8.1 Privacy Policy</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Our collection and use of personal information is governed by our Privacy Policy, available at [Privacy Policy URL]. By using the Services, you consent to our data practices as described in the Privacy Policy.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">8.2 Data Security</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Ferronyx implements reasonable administrative, technical, and physical safeguards designed to protect Customer Data against unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">8.3 Data Processing</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Where applicable, Ferronyx will process personal data in accordance with applicable data protection laws. For customers subject to GDPR or similar regulations, a Data Processing Agreement may be executed upon request.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">9. Confidentiality</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Each party agrees to maintain the confidentiality of the other party's Confidential Information (including, for Customer, the specific features and pricing of the Services, and for Ferronyx, Customer Data and proprietary robot operational information). Confidential Information may be disclosed only to those with a need to know and subject to confidentiality obligations at least as protective as those contained herein.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">10. Warranties and Disclaimers</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">10.1 Limited Warranty</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Ferronyx warrants that the Services will perform materially in accordance with the applicable Documentation during the Subscription Period. Customer's sole remedy for breach of this warranty is, at Ferronyx's option, correction of the nonconforming Services or termination of the affected subscription and a pro-rata refund of prepaid fees.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">10.2 Disclaimer</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6 uppercase text-sm">
                                    EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." FERRONYX DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">10.3 AI and Diagnostic Limitations</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You acknowledge that the AI-powered root cause analysis and diagnostic features of the Services are intended to assist with troubleshooting and are not guaranteed to identify all issues or provide accurate diagnoses in all circumstances. You should independently verify any recommendations before taking action.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">10.4 Third-Party Components</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    The Services may integrate with or depend upon third-party software, services, or components. Ferronyx makes no warranties regarding such third-party components.
                                </p>
                            </div>

                            {/* Section 11 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">11. Limitation of Liability</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">11.1 Exclusion of Consequential Damages</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6 uppercase text-sm">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL FERRONYX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR WHETHER FERRONYX WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">11.2 Cap on Liability</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6 uppercase text-sm">
                                    FERRONYX'S TOTAL CUMULATIVE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY CUSTOMER TO FERRONYX DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">11.3 Robot Operations Disclaimer</h3>
                                <p className="text-zinc-400 leading-relaxed uppercase text-sm">
                                    FERRONYX SHALL NOT BE LIABLE FOR ANY DAMAGES, INJURIES, OR LOSSES ARISING FROM THE OPERATION OF CUSTOMER'S ROBOT SYSTEMS, INCLUDING BUT NOT LIMITED TO PROPERTY DAMAGE, PERSONAL INJURY, OR OPERATIONAL FAILURES. CUSTOMER ASSUMES ALL RISK AND RESPONSIBILITY FOR THE DEPLOYMENT AND OPERATION OF ITS ROBOTS.
                                </p>
                            </div>

                            {/* Section 12 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">12. Indemnification</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">12.1 Customer Indemnification</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You agree to indemnify, defend, and hold harmless Ferronyx and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services in violation of these Terms; (b) your Customer Data; (c) the operation of your Robot Systems; or (d) your violation of applicable laws or third-party rights.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">12.2 Ferronyx Indemnification</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Ferronyx will defend Customer against third-party claims alleging that the Services, as provided by Ferronyx, infringe such third party's intellectual property rights, and will indemnify Customer against damages finally awarded. This obligation does not apply to claims arising from Customer Data, modifications made by Customer, or use of the Services in violation of these Terms.
                                </p>
                            </div>

                            {/* Section 13 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">13. Term and Termination</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">13.1 Term</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    These Terms are effective upon your acceptance and continue until terminated. Your subscription will automatically renew for successive periods unless either party provides notice of non-renewal at least thirty (30) days before the end of the current Subscription Period.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">13.2 Termination for Convenience</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Either party may terminate a subscription at the end of the current Subscription Period by providing written notice as described above. Early termination by Customer does not entitle Customer to a refund of prepaid fees.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">13.3 Termination for Cause</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Either party may terminate these Terms immediately upon written notice if the other party materially breaches these Terms and fails to cure such breach within thirty (30) days of receiving notice. Ferronyx may also suspend or terminate access immediately if Customer engages in prohibited activities or poses a security risk.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">13.4 Effect of Termination</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Upon termination: (a) your right to access and use the Services ceases immediately; (b) you must pay any outstanding fees; and (c) Ferronyx will delete Customer Data within ninety (90) days unless legally required to retain it. Upon request made within thirty (30) days of termination, Ferronyx will provide Customer with a copy of Customer Data in a standard format.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">13.5 Survival</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Sections relating to intellectual property, confidentiality, disclaimers, limitation of liability, indemnification, and general provisions shall survive termination of these Terms.
                                </p>
                            </div>

                            {/* Section 14 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">14. Modifications to Terms and Services</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">14.1 Modifications to Terms</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Ferronyx may modify these Terms from time to time. We will provide notice of material changes by posting the updated Terms on our website and, for significant changes, by email notification. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">14.2 Modifications to Services</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Ferronyx may modify, update, or discontinue features of the Services at any time. We will provide reasonable notice of material changes that adversely affect your use of the Services.
                                </p>
                            </div>

                            {/* Section 15 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">15. Governing Law and Dispute Resolution</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">15.1 Governing Law</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">15.2 Dispute Resolution</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Any dispute arising out of or relating to these Terms shall first be attempted to be resolved through good faith negotiations. If the dispute cannot be resolved within thirty (30) days, either party may initiate binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall take place in [City, State], and the arbitrator's award shall be final and binding.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">15.3 Class Action Waiver</h3>
                                <p className="text-zinc-400 leading-relaxed uppercase text-sm">
                                    YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
                                </p>
                            </div>

                            {/* Section 16 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">16. Export Compliance</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    You agree to comply with all applicable export control laws and regulations, including the U.S. Export Administration Regulations. You represent and warrant that you are not located in, under the control of, or a national or resident of any country subject to U.S. embargo, and that you are not on any U.S. government restricted parties list.
                                </p>
                            </div>

                            {/* Section 17 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">17. General Provisions</h2>
                                
                                <h3 className="text-xl font-medium text-white mb-4">17.1 Entire Agreement</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    These Terms, together with any Order Forms, the Privacy Policy, and any other documents incorporated by reference, constitute the entire agreement between you and Ferronyx regarding the Services and supersede all prior agreements and understandings.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">17.2 Severability</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">17.3 Waiver</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    No failure or delay by either party in exercising any right under these Terms shall constitute a waiver of that right.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">17.4 Assignment</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You may not assign or transfer these Terms or your rights hereunder without Ferronyx's prior written consent. Ferronyx may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">17.5 Force Majeure</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Neither party shall be liable for any failure or delay in performance due to causes beyond its reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or internet service provider failures.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">17.6 Notices</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Notices to Ferronyx should be sent to support@ferronyx.com or to our physical address as posted on our website. Notices to Customer will be sent to the email address associated with your account.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">17.7 Independent Contractors</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    The parties are independent contractors. Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship.
                                </p>
                            </div>

                            {/* Section 18 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">18. Contact Information</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If you have any questions about these Terms, please contact us at:
                                </p>
                                <div className="text-zinc-400 space-y-2">
                                    <p className="font-semibold text-white">Ferronyx Private Limited.</p>
                                    <p>Email: <a href="mailto:support@ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@ferronyx.com</a></p>
                                    <p>Website: <a href="https://ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">https://ferronyx.com</a></p>
                                    <p>Developer Portal: <a href="https://dev.ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">https://dev.ferronyx.com</a></p>
                                </div>
                            </div>

                            {/* Acknowledgment */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/[0.08] rounded-xl p-8 text-center">
                                <p className="text-zinc-300 font-medium uppercase tracking-wide">
                                    BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default TermsPage;
