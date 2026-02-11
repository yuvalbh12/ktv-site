'use client';

import { useEffect, useState } from 'react';

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
    <a
      href={href}
      onClick={handleWhatsAppClick}
      className="block w-full bg-green-500 text-white text-center py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-95"
    >
      שלחו הודעה לתיאום ב{city}
    </a>
  );
}
