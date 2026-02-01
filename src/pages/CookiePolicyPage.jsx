import React from 'react';
import { Link } from 'react-router-dom';
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

const CookiePolicyPage = () => {
    const cookieSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://ferronyx.com/cookies/#webpage",
                "url": "https://ferronyx.com/cookies",
                "name": "Cookie Policy - Ferronyx",
                "description": "Cookie Policy for the Ferronyx robot fleet observability platform. Learn how we use cookies and similar tracking technologies.",
                "isPartOf": {
                    "@id": "https://ferronyx.com/#website"
                },
                "breadcrumb": {
                    "@id": "https://ferronyx.com/cookies/#breadcrumb"
                }
            }
        ]
    };

    const breadcrumbItems = [
        { name: 'Home', url: 'https://ferronyx.com' },
        { name: 'Cookie Policy', url: 'https://ferronyx.com/cookies' }
    ];

    return (
        <>
            <SEO
                title="Cookie Policy - Ferronyx"
                description="Cookie Policy for the Ferronyx robot fleet observability platform. Learn how we use cookies and similar tracking technologies."
                canonicalUrl="https://ferronyx.com/cookies"
            />
            <BreadcrumbSchema items={breadcrumbItems} />
            <script type="application/ld+json">
                {JSON.stringify(cookieSchema)}
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
                                Cookie Policy
                            </h1>
                            <p className="text-lg text-zinc-400">
                                Ferronyx Private Limited.
                            </p>
                            <p className="text-sm text-zinc-500 mt-4">
                                Last Updated: February, 01 2026
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Cookie Policy Content */}
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
                                    This Cookie Policy explains how Ferronyx Private Limited. ("Ferronyx," "we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at https://ferronyx.com, access our cloud-based robotics observability platform, or use our services (collectively, the "Services").
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    This Cookie Policy should be read together with our Privacy Policy, which provides more information about how we collect and process personal data. By continuing to use our Services, you consent to our use of cookies as described in this policy.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">2. What Are Cookies?</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                                </p>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Cookies can be "persistent" or "session" cookies:
                                </p>
                                <ul className="space-y-4 text-zinc-400">
                                    <li>
                                        <strong className="text-white">Persistent Cookies:</strong> These cookies remain on your device for a set period of time or until you delete them. They are activated each time you visit the website that created them.
                                    </li>
                                    <li>
                                        <strong className="text-white">Session Cookies:</strong> These cookies are temporary and are deleted when you close your browser. They allow the website to recognize you as you navigate between pages during a single browser session.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">3. Similar Tracking Technologies</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    In addition to cookies, we may use other similar tracking technologies:
                                </p>
                                <ul className="space-y-4 text-zinc-400 mb-6">
                                    <li>
                                        <strong className="text-white">Web Beacons (Pixel Tags):</strong> Small graphic images embedded in web pages or emails that allow us to track whether you have viewed content or opened an email.
                                    </li>
                                    <li>
                                        <strong className="text-white">Local Storage:</strong> Technology that allows websites to store data locally on your device, similar to cookies but with larger storage capacity. This may include HTML5 local storage and browser cache.
                                    </li>
                                    <li>
                                        <strong className="text-white">JavaScript Tags:</strong> Code snippets embedded in our pages that collect information about your interactions with our Services.
                                    </li>
                                    <li>
                                        <strong className="text-white">SDKs (Software Development Kits):</strong> Code libraries used in our mobile applications to collect usage data and provide functionality.
                                    </li>
                                </ul>
                                <p className="text-zinc-400 leading-relaxed">
                                    For simplicity, we refer to all of these technologies as "cookies" throughout this policy.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">4. Types of Cookies We Use</h2>
                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    We use the following categories of cookies on our Services:
                                </p>

                                {/* 4.1 Strictly Necessary Cookies */}
                                <h3 className="text-xl font-medium text-white mb-4">4.1 Strictly Necessary Cookies</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    These cookies are essential for the operation of our Services. They enable core functionality such as security, authentication, and accessibility. Without these cookies, the Services cannot function properly. These cookies do not require your consent.
                                </p>
                                <div className="overflow-x-auto mb-8">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/[0.1]">
                                                <th className="py-3 px-4 text-white font-medium">Cookie Name</th>
                                                <th className="py-3 px-4 text-white font-medium">Purpose</th>
                                                <th className="py-3 px-4 text-white font-medium">Provider</th>
                                                <th className="py-3 px-4 text-white font-medium">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-zinc-400">
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">session_id</td>
                                                <td className="py-3 px-4">Maintains user session state</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">Session</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">auth_token</td>
                                                <td className="py-3 px-4">User authentication</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">7 days</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">csrf_token</td>
                                                <td className="py-3 px-4">Cross-site request forgery protection</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">Session</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono text-sm">cookie_consent</td>
                                                <td className="py-3 px-4">Stores cookie consent preferences</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 4.2 Functional Cookies */}
                                <h3 className="text-xl font-medium text-white mb-4">4.2 Functional Cookies</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
                                </p>
                                <div className="overflow-x-auto mb-8">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/[0.1]">
                                                <th className="py-3 px-4 text-white font-medium">Cookie Name</th>
                                                <th className="py-3 px-4 text-white font-medium">Purpose</th>
                                                <th className="py-3 px-4 text-white font-medium">Provider</th>
                                                <th className="py-3 px-4 text-white font-medium">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-zinc-400">
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">user_preferences</td>
                                                <td className="py-3 px-4">Stores dashboard layout and display preferences</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">timezone</td>
                                                <td className="py-3 px-4">Stores user timezone for accurate timestamps</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">language</td>
                                                <td className="py-3 px-4">Stores preferred language setting</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono text-sm">fleet_view</td>
                                                <td className="py-3 px-4">Remembers selected fleet view settings</td>
                                                <td className="py-3 px-4">Ferronyx</td>
                                                <td className="py-3 px-4">30 days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 4.3 Analytics and Performance Cookies */}
                                <h3 className="text-xl font-medium text-white mb-4">4.3 Analytics and Performance Cookies</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    These cookies collect information about how visitors use our Services, such as which pages are visited most often and if users receive error messages. This data helps us improve our Services and understand user behavior. All information collected by these cookies is aggregated and therefore anonymous.
                                </p>
                                <div className="overflow-x-auto mb-8">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/[0.1]">
                                                <th className="py-3 px-4 text-white font-medium">Cookie Name</th>
                                                <th className="py-3 px-4 text-white font-medium">Purpose</th>
                                                <th className="py-3 px-4 text-white font-medium">Provider</th>
                                                <th className="py-3 px-4 text-white font-medium">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-zinc-400">
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">_ga</td>
                                                <td className="py-3 px-4">Distinguishes unique users</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">_ga_*</td>
                                                <td className="py-3 px-4">Maintains session state</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">_gid</td>
                                                <td className="py-3 px-4">Distinguishes users</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">24 hours</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">mp_*</td>
                                                <td className="py-3 px-4">Product analytics and user behavior tracking</td>
                                                <td className="py-3 px-4">Mixpanel</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono text-sm">_hjSessionUser_*</td>
                                                <td className="py-3 px-4">User experience analytics</td>
                                                <td className="py-3 px-4">Hotjar</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 4.4 Marketing and Advertising Cookies */}
                                <h3 className="text-xl font-medium text-white mb-4">4.4 Marketing and Advertising Cookies</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. These cookies remember that you have visited our website and may share this information with advertising partners.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/[0.1]">
                                                <th className="py-3 px-4 text-white font-medium">Cookie Name</th>
                                                <th className="py-3 px-4 text-white font-medium">Purpose</th>
                                                <th className="py-3 px-4 text-white font-medium">Provider</th>
                                                <th className="py-3 px-4 text-white font-medium">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-zinc-400">
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">_gcl_au</td>
                                                <td className="py-3 px-4">Conversion tracking</td>
                                                <td className="py-3 px-4">Google Ads</td>
                                                <td className="py-3 px-4">90 days</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">li_fat_id</td>
                                                <td className="py-3 px-4">LinkedIn ad tracking</td>
                                                <td className="py-3 px-4">LinkedIn</td>
                                                <td className="py-3 px-4">30 days</td>
                                            </tr>
                                            <tr className="border-b border-white/[0.05]">
                                                <td className="py-3 px-4 font-mono text-sm">_fbp</td>
                                                <td className="py-3 px-4">Facebook advertising</td>
                                                <td className="py-3 px-4">Meta (Facebook)</td>
                                                <td className="py-3 px-4">90 days</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-mono text-sm">hubspotutk</td>
                                                <td className="py-3 px-4">Marketing automation tracking</td>
                                                <td className="py-3 px-4">HubSpot</td>
                                                <td className="py-3 px-4">6 months</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">5. First-Party and Third-Party Cookies</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Cookies can be either first-party or third-party cookies:
                                </p>
                                <ul className="space-y-4 text-zinc-400">
                                    <li>
                                        <strong className="text-white">First-Party Cookies:</strong> These are set by Ferronyx directly when you visit our Services. They are used for core functionality, user preferences, and basic analytics.
                                    </li>
                                    <li>
                                        <strong className="text-white">Third-Party Cookies:</strong> These are set by external services integrated into our website (such as Google Analytics, LinkedIn, or HubSpot). These third parties may use cookies to collect information about your online activities across different websites.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 6 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">6. How to Manage Cookies</h2>

                                <h3 className="text-xl font-medium text-white mb-4">6.1 Cookie Consent Banner</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    When you first visit our website, you will see a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
                                </p>

                                <h3 className="text-xl font-medium text-white mb-4">6.2 Browser Settings</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. The following links provide information on how to manage cookies in popular browsers:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li><strong className="text-white">Google Chrome:</strong> chrome://settings/cookies</li>
                                    <li><strong className="text-white">Mozilla Firefox:</strong> about:preferences#privacy</li>
                                    <li><strong className="text-white">Safari:</strong> Preferences &gt; Privacy</li>
                                    <li><strong className="text-white">Microsoft Edge:</strong> edge://settings/privacy</li>
                                    <li><strong className="text-white">Opera:</strong> Settings &gt; Privacy &amp; security &gt; Cookies</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">6.3 Opt-Out Tools</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    You can also use the following industry opt-out tools to manage advertising cookies:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li><strong className="text-white">Google Analytics Opt-Out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">https://tools.google.com/dlpage/gaoptout</a></li>
                                    <li><strong className="text-white">Digital Advertising Alliance:</strong> <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">https://optout.aboutads.info/</a></li>
                                    <li><strong className="text-white">Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">https://optout.networkadvertising.org/</a></li>
                                    <li><strong className="text-white">European Interactive Digital Advertising Alliance:</strong> <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">https://www.youronlinechoices.eu/</a></li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-4">6.4 Impact of Disabling Cookies</h3>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    Please note that if you disable or delete cookies, some features of our Services may not function properly. In particular:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                                    <li>You may not be able to stay logged in to your account</li>
                                    <li>Your dashboard preferences and settings may not be saved</li>
                                    <li>Some interactive features may not work correctly</li>
                                    <li>You may see the cookie consent banner on every visit</li>
                                </ul>
                            </div>

                            {/* Section 7 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">7. Do Not Track Signals</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    Some browsers have a "Do Not Track" (DNT) feature that lets you tell websites you do not want your online activities tracked. Currently, there is no universally accepted standard for how companies should respond to DNT signals. At this time, our Services do not respond to DNT browser signals. However, you can use the cookie management options described above to control tracking on our Services.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">8. Global Privacy Control</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    We recognize and honor Global Privacy Control (GPC) signals. When we detect a GPC signal from your browser, we will treat it as a valid request to opt out of the sale or sharing of your personal information, as required by applicable laws such as the California Consumer Privacy Act (CCPA).
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">9. Updates to This Cookie Policy</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make material changes, we will notify you by:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4 mb-6">
                                    <li>Updating the "Last Updated" date at the top of this policy</li>
                                    <li>Displaying a notice on our website</li>
                                    <li>Requesting your consent again where required by law</li>
                                </ul>
                                <p className="text-zinc-400 leading-relaxed">
                                    We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">10. Contact Us</h2>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us:
                                </p>
                                <div className="text-zinc-400 space-y-2">
                                    <p className="font-semibold text-white">Ferronyx Private Limited.</p>
                                    <p>Email: <a href="mailto:privacy@ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">privacy@ferronyx.com</a></p>
                                    <p>Website: <a href="https://ferronyx.com" className="text-blue-400 hover:text-blue-300 transition-colors">https://ferronyx.com</a></p>
                                    <p>Address: Venkatramapuram, Srinivasa Agraharam, Ramamurthy Nagar, Nellore, Andhra Pradesh - 524001</p>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">11. Related Policies</h2>
                                <p className="text-zinc-400 leading-relaxed mb-4">
                                    This Cookie Policy is part of our broader privacy documentation. Please also review:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
                                    <li><Link to="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
                                    <li><Link to="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">Terms and Conditions</Link></li>
                                </ul>
                            </div>

                            {/* Acknowledgment */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/[0.08] rounded-xl p-8 text-center">
                                <p className="text-zinc-300 font-medium uppercase tracking-wide">
                                    BY CONTINUING TO USE OUR SERVICES AFTER BEING PRESENTED WITH THIS COOKIE POLICY, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD HOW WE USE COOKIES AND SIMILAR TECHNOLOGIES.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default CookiePolicyPage;
