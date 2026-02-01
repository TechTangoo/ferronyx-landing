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

const PrivacyPage = () => {
    const privacySchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://ferronyx.com/privacy/#webpage",
                "url": "https://ferronyx.com/privacy",
                "name": "Privacy Policy - Ferronyx",
                "description": "Privacy Policy for the Ferronyx robot fleet observability platform. Learn how we collect, use, and protect your data.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                },
                "breadcrumb": {
                    "@id": "https://ferronyx.com/privacy/#breadcrumb"
                }
            }
        ]
    };

    const breadcrumbItems = [
        { name: 'Home', url: 'https://ferronyx.com' },
        { name: 'Privacy Policy', url: 'https://ferronyx.com/privacy' }
    ];

    return (
        <>
            <SEO
                title="Privacy Policy - Ferronyx"
                description="Privacy Policy for the Ferronyx robot fleet observability platform. Learn how we collect, use, and protect your data."
                canonicalUrl="https://ferronyx.com/privacy"
            />
            <BreadcrumbSchema items={breadcrumbItems} />
            <script type="application/ld+json">
                {JSON.stringify(privacySchema)}
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
                                Privacy Policy
                            </h1>
                            <p className="text-lg text-zinc-400">
                                Ferronyx Private Limited.
                            </p>
                            <div className="text-sm text-zinc-500 mt-4 space-y-1">
                                <p>Last Updated: February, 01 2026</p>
                                <p>Effective Date: January, 01 2026</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Privacy Content */}
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
                                <h2 className="text-2xl font-semibold text-white mb-6">1. Introduction</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Ferronyx Private Limited. ("Ferronyx," "Company," "we," "us," or "our") is committed to protecting the privacy of our users and customers. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website at https://ferronyx.com, use our cloud-based robotics observability platform, access our APIs, or interact with our services (collectively, the "Services").
                                </p>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Ferronyx provides real-time observability, AI-assisted debugging, and fleet-wide diagnostics for ROS and ROS2 robotic systems. Given the nature of our Services, we process various types of data including robot telemetry, operational logs, and sensor data alongside traditional personal information.
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, please do not access or use our Services.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">2. Information We Collect</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We collect information in several ways depending on how you interact with our Services.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">2.1 Information You Provide Directly</h3>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Account Information:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Name and contact information (email address, phone number)</li>
                                    <li>Company name, job title, and business address</li>
                                    <li>Account credentials (username and password)</li>
                                    <li>Billing and payment information (processed by our payment processors)</li>
                                </ul>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Communications:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-8">
                                    <li>Support requests and correspondence</li>
                                    <li>Feedback, surveys, and testimonials</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">2.2 Robot and Operational Data</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    When you connect your robot fleet to our Services, we collect and process the following types of data ("Robot Data"):
                                </p>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Telemetry and Diagnostic Data:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>ROS/ROS2 topic data and message logs</li>
                                    <li>System health metrics (CPU, memory, disk usage, network status)</li>
                                    <li>Error logs, crash reports, and diagnostic information</li>
                                    <li>Node status and lifecycle events</li>
                                    <li>Alert and event data</li>
                                </ul>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Navigation and Sensor Data:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Navigation stack data (Nav2 costmaps, planner outputs, localization data)</li>
                                    <li>Sensor readings and calibration data (LiDAR, cameras, IMU, encoders)</li>
                                    <li>Odometry and position data</li>
                                    <li>Map data and environment information</li>
                                </ul>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Performance and Operational Metrics:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-8">
                                    <li>GPU utilization and inference performance metrics</li>
                                    <li>Task completion rates and operational statistics</li>
                                    <li>Software version and deployment history</li>
                                    <li>OTA update status and deployment correlation data</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">2.3 Automatically Collected Information</h3>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Device and Browser Information:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>IP address and approximate location</li>
                                    <li>Browser type, version, and language preferences</li>
                                    <li>Operating system and device type</li>
                                    <li>Unique device identifiers</li>
                                </ul>

                                <h4 className="text-lg font-medium text-zinc-300 mb-3">Usage Information:</h4>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-8">
                                    <li>Pages visited and features used</li>
                                    <li>Time spent on the platform</li>
                                    <li>Click patterns and navigation paths</li>
                                    <li>Search queries within the platform</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">2.4 Information from Third Parties</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">We may receive information about you from third parties, including:</p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                                    <li>Business partners and resellers</li>
                                    <li>Identity verification services</li>
                                    <li>Analytics providers</li>
                                    <li>Publicly available sources</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">3. How We Use Your Information</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">We use the information we collect for the following purposes:</p>

                                <h3 className="text-xl font-medium text-white mb-4">3.1 Providing and Improving Our Services</h3>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Operate, maintain, and provide the features of our platform</li>
                                    <li>Process and display robot telemetry and diagnostics in real-time</li>
                                    <li>Perform AI-powered root cause analysis and generate debugging insights</li>
                                    <li>Detect sensor drift and predict potential failures</li>
                                    <li>Correlate alerts and identify root causes across your fleet</li>
                                    <li>Track and analyze OTA deployments</li>
                                    <li>Develop, test, and improve our Services and AI models</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">3.2 Account Management and Support</h3>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Create and manage your account</li>
                                    <li>Process transactions and send billing information</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Send service-related communications and updates</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">3.3 Analytics and Research</h3>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Analyze usage patterns to improve user experience</li>
                                    <li>Generate aggregated and anonymized insights for benchmarking</li>
                                    <li>Train and improve our AI and machine learning models</li>
                                    <li>Conduct research to advance robotics observability</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">3.4 Security and Compliance</h3>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Protect against fraud, unauthorized access, and security threats</li>
                                    <li>Enforce our Terms and Conditions</li>
                                    <li>Comply with legal obligations and respond to lawful requests</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">3.5 Marketing and Communications</h3>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                                    <li>Send promotional communications (with your consent where required)</li>
                                    <li>Inform you about new features, products, and services</li>
                                    <li>Invite you to participate in surveys or research</li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">4. Legal Bases for Processing (EEA/UK Users)</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If you are located in the European Economic Area (EEA) or United Kingdom (UK), we process your personal data based on the following legal grounds:
                                </p>
                                <ul className="space-y-4 text-zinc-400">
                                    <li>
                                        <strong className="text-white">Contract Performance:</strong> Processing necessary to provide the Services you have requested
                                    </li>
                                    <li>
                                        <strong className="text-white">Legitimate Interests:</strong> Processing for our legitimate business interests, such as improving our Services, ensuring security, and marketing (where not overridden by your rights)
                                    </li>
                                    <li>
                                        <strong className="text-white">Consent:</strong> Processing based on your explicit consent, which you may withdraw at any time
                                    </li>
                                    <li>
                                        <strong className="text-white">Legal Obligation:</strong> Processing necessary to comply with applicable laws
                                    </li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">5. How We Share Your Information</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We do not sell your personal information. We may share your information in the following circumstances:
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.1 Service Providers</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    We share information with third-party vendors who provide services on our behalf, including:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-4">
                                    <li>Cloud hosting and infrastructure providers</li>
                                    <li>Payment processors</li>
                                    <li>Analytics and monitoring services</li>
                                    <li>Customer support tools</li>
                                    <li>Email and communication services</li>
                                </ul>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    These providers are contractually obligated to protect your information and use it only for the services they provide to us.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.2 Business Transfers</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If Ferronyx is involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as part of that transaction. We will notify you of any change in ownership or uses of your information.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.3 Legal Requirements</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, or government regulations).
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.4 Protection of Rights</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We may disclose information when we believe it is necessary to protect our rights, your safety or the safety of others, investigate fraud, or respond to a government request.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.5 With Your Consent</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We may share your information with third parties when you have given us explicit consent to do so.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">5.6 Aggregated and Anonymized Data</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    We may share aggregated or anonymized information that cannot reasonably be used to identify you for purposes such as industry analysis, benchmarking, and research publications.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">6. Data Retention</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We retain your information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">6.1 Retention Periods</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/[0.1]">
                                                <th className="py-3 px-4 text-white font-medium">Data Type</th>
                                                <th className="py-3 px-4 text-white font-medium">Retention Period</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-zinc-400">
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4">Account Information</td>
                                                <td className="py-3 px-4">Duration of account plus 90 days after termination</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4">Robot Telemetry Data</td>
                                                <td className="py-3 px-4">As specified in your subscription plan (typically 30-365 days)</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4">Usage Logs</td>
                                                <td className="py-3 px-4">12 months</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4">Billing Records</td>
                                                <td className="py-3 px-4">7 years (for tax and legal compliance)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4">Support Communications</td>
                                                <td className="py-3 px-4">3 years</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-zinc-400 leading-relaxed">
                                    Upon account termination, you may request a copy of your data within 30 days. After the retention period, data will be securely deleted or anonymized.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">7. Data Security</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    We implement appropriate technical and organizational measures to protect your information, including:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
                                    <li>Regular security assessments and penetration testing</li>
                                    <li>Access controls and authentication mechanisms</li>
                                    <li>Employee security training and confidentiality agreements</li>
                                    <li>Incident response and breach notification procedures</li>
                                    <li>Regular backups and disaster recovery capabilities</li>
                                </ul>
                                <p className="text-zinc-400 leading-relaxed">
                                    While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">8. International Data Transfers</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Ferronyx is based in the United States. If you access the Services from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.
                                </p>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    For transfers from the EEA, UK, or Switzerland, we rely on:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                                    <li>Standard Contractual Clauses approved by the European Commission</li>
                                    <li>Data Processing Agreements with appropriate safeguards</li>
                                    <li>Your explicit consent where applicable</li>
                                </ul>
                            </div>

                            {/* Section 9 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">9. Your Rights and Choices</h2>

                                <h3 className="text-xl font-medium text-white mb-4">9.1 Access and Portability</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You have the right to request access to the personal information we hold about you and to receive a copy in a structured, commonly used, machine-readable format.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">9.2 Correction</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You have the right to request correction of inaccurate or incomplete personal information.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">9.3 Deletion</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You have the right to request deletion of your personal information, subject to certain exceptions (such as legal retention requirements).
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">9.4 Restriction and Objection</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You have the right to request restriction of processing or to object to processing based on legitimate interests.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">9.5 Withdraw Consent</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Where processing is based on consent, you have the right to withdraw consent at any time without affecting the lawfulness of prior processing.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">9.6 Marketing Opt-Out</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    You may opt out of marketing communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly. Note that you may still receive transactional and service-related communications.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">9.7 Exercising Your Rights</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    To exercise any of these rights, please contact us at <a href="mailto:privacy@ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">privacy@ferronyx.com</a>. We will respond to your request within the timeframe required by applicable law (typically 30 days). We may need to verify your identity before processing your request.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">10. Cookies and Tracking Technologies</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    We use cookies and similar tracking technologies to collect and track information and to improve and analyze our Services.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">10.1 Types of Cookies We Use</h3>
                                <ul className="space-y-4 text-zinc-400 mb-6">
                                    <li>
                                        <strong className="text-white">Essential Cookies:</strong> Required for the operation of our Services (e.g., authentication, security)
                                    </li>
                                    <li>
                                        <strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website
                                    </li>
                                    <li>
                                        <strong className="text-white">Functional Cookies:</strong> Remember your preferences and settings
                                    </li>
                                    <li>
                                        <strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements
                                    </li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">10.2 Managing Cookies</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    You can control cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our Services. For more information, see our Cookie Policy [if applicable, link here].
                                </p>
                            </div>

                            {/* Section 11 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">11. Third-Party Links and Services</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Our Services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                                </p>
                            </div>

                            {/* Section 12 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">12. Children's Privacy</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
                                </p>
                            </div>

                            {/* Section 13 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">13. California Privacy Rights (CCPA/CPRA)</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
                                </p>
                                <ul className="space-y-4 text-zinc-400 mb-6">
                                    <li>
                                        <strong className="text-white">Right to Know:</strong> Request information about the categories and specific pieces of personal information we have collected
                                    </li>
                                    <li>
                                        <strong className="text-white">Right to Delete:</strong> Request deletion of your personal information
                                    </li>
                                    <li>
                                        <strong className="text-white">Right to Correct:</strong> Request correction of inaccurate personal information
                                    </li>
                                    <li>
                                        <strong className="text-white">Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information (note: we do not sell personal information)
                                    </li>
                                    <li>
                                        <strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights
                                    </li>
                                </ul>
                                <p className="text-zinc-400 leading-relaxed">
                                    To exercise these rights, contact us at <a href="mailto:support@ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@ferronyx.com</a>.
                                </p>
                            </div>

                            {/* Section 14 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">14. Changes to This Privacy Policy</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of material changes by:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                                    <li>Sending an email notification for significant changes</li>
                                    <li>Displaying a prominent notice on our platform</li>
                                </ul>
                                <p className="text-zinc-400 leading-relaxed">
                                    Your continued use of the Services after any changes indicates your acceptance of the updated Privacy Policy.
                                </p>
                            </div>

                            {/* Section 15 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">15. Contact Us</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="text-zinc-400 space-y-2 mb-8">
                                    <p className="font-semibold text-white">Ferronyx Private Limited.</p>
                                    <p>Attn: Privacy Team</p>
                                    <p>Email: <a href="mailto:support@ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@ferronyx.com</a></p>
                                    <p>Website: <a href="https://ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">https://ferronyx.com</a></p>
                                    <p>Address: Venkatramapuram, Srinivasa Agraharam, Ramamurthy Nagar, Nellore, Andhra Pradesh - 524001</p>
                                </div>

                                <h3 className="text-xl font-medium text-white mb-4">15.1 Data Protection Officer (EEA/UK)</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    For users in the EEA or UK, you may also contact our Data Protection Officer at <a href="mailto:support@ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@ferronyx.com</a> or lodge a complaint with your local supervisory authority.
                                </p>
                            </div>

                            {/* Acknowledgment */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/[0.08] rounded-xl p-8 text-center">
                                <p className="text-zinc-300 font-medium uppercase tracking-wide">
                                    BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY AND AGREE TO THE COLLECTION, USE, AND DISCLOSURE OF YOUR INFORMATION AS DESCRIBED HEREIN.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default PrivacyPage;
