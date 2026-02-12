import { SERVICES, CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string, service: string }> }): Promise<Metadata> {
  const { city: rawCity, service: rawService } = await params;
  const city = decodeURIComponent(rawCity);
  const service = decodeURIComponent(rawService);

  return {
    title: `ניקוי חלונות בגובה ב${city} | KTV Israel`,
    description: `מחפשים ניקוי חלונות בגובה ב${city}? הפתרון המתקדם ביותר עם רחפנים מקצועיים. בטיחות מלאה ותוצאות מושלמות. לחצו לתיאום!`,
    openGraph: {
      title: `ניקוי חלונות בגובה ב${city} | KTV Israel`,
      description: `מחפשים ניקוי חלונות בגובה ב${city}? הפתרון המתקדם ביותר עם רחפנים מקצועיים. בטיחות מלאה ותוצאות מושלמות. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/${encodeURIComponent(service)}`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function LeadPage({ params }: { params: Promise<{ city: string, service: string }> }) {
  try {
    const { city: rawCity, service: rawService } = await params;
    const city = decodeURIComponent(rawCity);
    const service = decodeURIComponent(rawService);

    const message = `היי KTV, הגעתי מהאתר. אני מעוניין ב${service} ב${city}. אפשר לקבל פרטים?`;

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
              <p>אנחנו מספקים פתרונות מהירים ויעילים שחוסכים זמן יקר.</p>
            </div>
            <div className="border-2 border-slate-100 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">🛡️ בטיחות מלאה</h3>
              <p>אין עובדים תלויים בין שמיים לארץ. הכל נשלט מהקרקע.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">הטכנולוגיה מאחורי KTV</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                <div className="text-3xl mb-4">🧪</div>
                <h4 className="font-bold text-teal-900 mb-3">SelfCleaner™</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  חומר ניקוי בלעדי שמתפרק ביולוגית ושומר על החלון נקי לאורך זמן.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                <div className="text-3xl mb-4">🛠️</div>
                <h4 className="font-bold text-teal-900 mb-3">KTV Care</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  תוכניות תחזוקה שנתיות לבנייני משרדים ומוסדות.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                <div className="text-3xl mb-4">🚁</div>
                <h4 className="font-bold text-teal-900 mb-3">ניקוי בגובה רב</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  יכולת הגעה ל-100+ מטרים ללא צורך בפיגומים.
                </p>
              </div>
            </div>
          </div>

          <WhatsAppButton city={city} message={message} />
        </main>

        <footer className="bg-slate-900 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">שירות ארצי - אנחנו מגיעים לכל מקום</h3>
              <p className="text-slate-300">צוותי הרחפנים של KTV Israel פרוסים בנקודות אסטרטגיות כדי להעניק שירות מהיר ובטיחותי בכל חלקי הארץ</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'ירושלים',
                'תל אביב',
                'חיפה',
                'ראשון לציון',
                'פתח תקווה',
                'אשדוד',
                'נתניה',
                'באר שבע',
                'חולון',
                'בני ברק'
              ].map((cityName) => (
                <Link
                  key={cityName}
                  href={`/${encodeURIComponent(cityName)}/ניקוי-חלונות-בגובה`}
                  className="text-slate-300 hover:text-white hover:underline transition-colors text-center"
                >
                  {cityName}
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400"> 2026 KTV Israel - פריסה ארצית מלאה</p>
            </div>
          </div>
        </footer>
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
