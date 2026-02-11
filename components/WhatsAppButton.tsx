'use client';

import { useEffect } from 'react';

interface WhatsAppButtonProps {
  href: string;
  city: string;
}

export default function WhatsAppButton({ href, city }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      const leads = JSON.parse(localStorage.getItem("ktv_leads") || "[]");
      const newLead = {
        date: new Date().toLocaleString("he-IL"),
        source: window.location.pathname,
        status: "חדש - וואטסאפ"
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
