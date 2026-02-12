'use client';

import { useEffect, useState } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, eventId: string, eventParams?: Record<string, any>) => void;
  }
}

interface WhatsAppButtonProps {
  href: string;
  city: string;
}

export default function WhatsAppButton({ href, city }: WhatsAppButtonProps) {
  const [startTime] = useState(Date.now());
  const [deviceType, setDeviceType] = useState('');
  const [referrer, setReferrer] = useState('');

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
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t md:relative md:bg-transparent md:border-none md:p-0 z-50">
      <a
        href={href}
        onClick={handleWhatsAppClick}
        className="block w-full bg-green-500 text-white text-center py-4 md:py-6 rounded-2xl text-xl md:text-2xl font-bold shadow-2xl hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-95 animate-bounce-subtle"
      >
        שלחו הודעה לתיאום ב{city}
      </a>
    </div>
  );
}
