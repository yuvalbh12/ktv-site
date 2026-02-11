import { SERVICES, CITIES } from '../../../constants';
import Link from 'next/link';

export default async function LeadPage({ params }: { params: Promise<{ city: string, service: string }> }) {
  const { city: rawCity, service: rawService } = await params;
  const city = decodeURIComponent(rawCity);
  const service = decodeURIComponent(rawService);

  // כאן תוכלי להחליף למספר האמיתי שלו בעתיד
  const WHATSAPP_NUMBER = "972533707570";
  const message = encodeURIComponent(`היי KTV, הגעתי מהאתר. אני מעוניין ב${service} ב${city}. אפשר לקבל פרטים?`);

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
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <nav className="p-4 border-b bg-slate-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-bold text-blue-900">KTV Israel</span>
          <Link href="/" className="text-blue-600 font-medium">← לכל אזורי השירות</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-16 px-6">
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
          שירות VIP ב{city}
        </span>
        <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
          {service} ב{city} <br /><span className="text-blue-600">בטכנולוגיית רחפנים</span>
        </h1>

        <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
          הפתרון המתקדם ביותר ב{city} לניקוי חזיתות וחלונות. בלי פיגומים, בלי סנפלינג – רק רחפן מקצועי ותוצאות מושלמות.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border-2 border-slate-100 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">⏱️ חיסכון בזמן</h3>
            <p>אנחנו מסיימים ביום עבודה אחד מה שלוקח לאחרים שבוע.</p>
          </div>
          <div className="border-2 border-slate-100 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">🛡️ בטיחות מלאה</h3>
            <p>אין עובדים תלויים בין שמיים לארץ. הכל נשלט מהקרקע.</p>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          onClick={handleWhatsAppClick}
          className="block w-full bg-green-500 text-white text-center py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-95"
        >
          שלחו הודעה לתיאום ב{city}
        </a>

        <p className="text-center mt-6 text-slate-400 text-sm">
          מענה מהיר בוואטסאפ תוך פחות מ-30 דקות
        </p>
      </main>
    </div>
  );
}
