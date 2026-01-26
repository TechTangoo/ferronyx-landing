/**
 * Google Analytics 4 Utility Functions
 *
 * Replace 'G-05BBC91V7F' with your actual GA4 Measurement ID
 *
 * Setup:
 * 1. Go to https://analytics.google.com
 * 2. Create a new GA4 property for ferronyx.com
 * 3. Get your Measurement ID (starts with G-)
 * 4. Replace G-05BBC91V7F in index.html and this file
 */

export const GA_MEASUREMENT_ID = 'G-05BBC91V7F';

/**
 * Check if analytics is available (consent given and gtag loaded)
 */
export const isAnalyticsEnabled = () => {
  return typeof window !== 'undefined' &&
         typeof window.gtag === 'function' &&
         localStorage.getItem('cookieConsent') === 'accepted';
};

/**
 * Initialize GA4 after cookie consent
 */
export const initializeGA = () => {
  if (typeof window === 'undefined') return;

  // Load the gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
};

/**
 * Track a generic event
 * @param {string} eventName - Name of the event
 * @param {Object} params - Event parameters
 */
export const trackEvent = (eventName, params = {}) => {
  if (!isAnalyticsEnabled()) return;

  window.gtag('event', eventName, params);
};

/**
 * Track page views (for SPA route changes)
 * @param {string} pagePath - The page path
 * @param {string} pageTitle - The page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!isAnalyticsEnabled()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Track signup button clicks
 * @param {string} source - Where the signup was triggered (e.g., 'hero', 'nav', 'blog_cta')
 */
export const trackSignup = (source) => {
  trackEvent('signup_click', {
    source,
    page: window.location.pathname,
  });
};

/**
 * Track CTA button clicks
 * @param {string} ctaName - Name/label of the CTA
 * @param {string} location - Where on the page the CTA is located
 */
export const trackCTAClick = (ctaName, location) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location,
    page: window.location.pathname,
  });
};

/**
 * Track blog post views
 * @param {string} slug - Blog post slug
 * @param {string} title - Blog post title
 * @param {string} category - Blog post category
 */
export const trackBlogRead = (slug, title, category) => {
  trackEvent('blog_view', {
    slug,
    title,
    category,
    page: `/blog/${slug}`,
  });
};

/**
 * Track newsletter email subscriptions
 * @param {string} source - Where the signup form was (e.g., 'blog_post', 'footer')
 */
export const trackEmailSubscribe = (source = 'unknown') => {
  trackEvent('email_subscribe', {
    source,
    page: window.location.pathname,
  });
};

/**
 * Track social share clicks
 * @param {string} platform - Social platform (e.g., 'linkedin', 'twitter')
 * @param {string} content - What was shared (e.g., blog slug)
 */
export const trackShareClick = (platform, content) => {
  trackEvent('share_click', {
    platform,
    content,
    page: window.location.pathname,
  });
};

/**
 * Track demo request form submissions
 */
export const trackDemoRequest = () => {
  trackEvent('demo_request', {
    page: window.location.pathname,
  });
};

/**
 * Track outbound link clicks
 * @param {string} url - The outbound URL
 * @param {string} linkText - The text of the link
 */
export const trackOutboundLink = (url, linkText) => {
  trackEvent('outbound_click', {
    url,
    link_text: linkText,
    page: window.location.pathname,
  });
};
