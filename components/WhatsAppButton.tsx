'use client';

import { useEffect, useState } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, eventId: string, eventParams?: Record<string, any>) => void;
  }
}

interface WhatsAppButtonProps {
  href?: string;
  city: string;
  message?: string;
}

export default function WhatsAppButton({ href, city, message }: WhatsAppButtonProps) {
  const [startTime] = useState(Date.now());
  const [deviceType, setDeviceType] = useState('');
  const [referrer, setReferrer] = useState('');

  // Generate WhatsApp href if not provided
  const whatsappHref = href || (() => {
    const WHATSAPP_NUMBER = "972533707570";
    const defaultMessage = message || `היי KTV, הגעתי מהאתר. אני מעוניין בשירותים ב${city}. אפשר לקבל פרטים?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;
  })();

  useEffect(() => {
    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setDeviceType(isMobile ? 'Mobile' : 'Desktop');

    // Clean referrer
    if (typeof window !== 'undefined') {
      const ref = document.referrer;
      if (ref.includes('google')) {
        setReferrer('Google');
      } else if (ref.includes('facebook') || ref.includes('fb.')) {
        setReferrer('Facebook');
      } else if (ref === '') {
        setReferrer('Direct');
      } else {
        setReferrer('Other');
      }
    }
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);

      // Track Google Analytics event
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          city: city,
          device_type: deviceType,
          time_on_page: timeOnPage,
          referrer: referrer,
          page_path: window.location.pathname
        });
      }

      const leads = JSON.parse(localStorage.getItem("ktv_leads") || "[]");
      const newLead = {
        date: new Date().toLocaleString("he-IL"),
        source: window.location.pathname,
        status: "חדש - וואטסאפ",
        deviceType: deviceType,
        timeOnPage: timeOnPage,
        referrer: referrer
      };
      localStorage.setItem("ktv_leads", JSON.stringify([newLead, ...leads]));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-lg border-t border-green-200 md:relative md:bg-transparent md:border-none md:p-0 z-50">
      <div className="max-w-md mx-auto md:max-w-none">
        {/* Urgency Badges */}
        <div className="flex justify-center gap-2 mb-2 md:mb-3">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
            🔥
          </span>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
            ⏰ תגובה מהירה
          </span>
        </div>

        {/* Main Button with Shine Effect */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine"></div>

          {/* Ping Animation */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>

          {/* Button */}
          <a
            href={whatsappHref}
            onClick={handleWhatsAppClick}
            className="relative block w-full bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white text-center py-4 md:py-6 px-6 rounded-2xl text-lg md:text-2xl font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 border-2 border-green-400/30 hover:border-green-400/60 group"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <span className="text-xl md:text-2xl">📱</span>
              <span>שלחו הודעה לתיאום ב{city}</span>
              <span className="hidden md:inline text-lg">→</span>
            </div>

            {/* Hover Subtext */}
            <div className="absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-green-600 text-sm font-medium bg-white px-3 py-1 rounded-full shadow-md">
                מענה מיידי בוואטסאפ
              </span>
            </div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center gap-4 mt-3 md:mt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="text-green-500">✓</span> מאובטח
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-500">✓</span> ללא עלות
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-500">✓</span> זמין 24/7
          </span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
