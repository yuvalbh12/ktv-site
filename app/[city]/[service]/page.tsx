import { SERVICES, CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';

export default async function LeadPage({ params }: { params: Promise<{ city: string, service: string }> }) {
  try {
    const { city: rawCity, service: rawService } = await params;
    const city = decodeURIComponent(rawCity);
    const service = decodeURIComponent(rawService);

    // כאן תוכלי להחליף למספר האמיתי שלו בעתיד
    const WHATSAPP_NUMBER = "972533707570";
    const message = encodeURIComponent(`היי KTV, הגעתי מהאתר. אני מעוניין ב${service} ב${city}. אפשר לקבל פרטים?`);
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    return (
      <div className="min-h-screen bg-white text-right" dir="rtl">
        <nav className="p-4 border-b bg-slate-50">
          <div className="max-w-4xl mx-auto flex justify-center">
            <span className="font-bold text-blue-900">KTV Israel</span>
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

          <WhatsAppButton href={whatsappHref} city={city} />

          <p className="text-center mt-6 text-slate-400 text-sm">
            מענה מהיר בוואטסאפ תוך פחות מ-30 דקות
          </p>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error in LeadPage:', error);
    return (
      <div className="min-h-screen bg-white text-right p-8" dir="rtl">
        <h1 className="text-2xl font-bold text-red-600">שגיאה בטעינת הדף</h1>
        <p className="mt-4">אנא נסו שוב מאוחר יותר או פנו לתמיכה.</p>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          ← חזרה לדף הבית
        </Link>
      </div>
    );
  }
}
