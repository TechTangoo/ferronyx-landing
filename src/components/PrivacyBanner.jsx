import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';
import { initializeGA } from '@/lib/analytics';

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Initialize GA4 after consent
    initializeGA();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-5 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm mb-1">
                  Cookie Preferences
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  We use cookies to analyze site traffic and improve your experience.
                  Your data helps us understand how to serve robotics teams better.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-4 py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-zinc-200 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 px-4 py-2 bg-white/5 text-zinc-300 text-xs font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-zinc-500 hover:text-zinc-300 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyBanner;
