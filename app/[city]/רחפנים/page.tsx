import { CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  return {
    title: `רחפנים ב${city} | ציוד רחפנים מקצועי | KTV Israel`,
    description: `מחפשים רחפנים ב${city}? ציוד רחפנים מקצועי לניקוי, בדיקות ותחזוקה. טכנולוגיית רחפנים מתקדמת לכל סוגי עבודות. לחצו לתיאום!`,
    openGraph: {
      title: `רחפנים ב${city} | ציוד רחפנים מקצועי | KTV Israel`,
      description: `מחפשים רחפנים ב${city}? ציוד רחפנים מקצועי לניקוי, בדיקות ותחזוקה. טכנולוגיית רחפנים מתקדמת לכל סוגי עבודות. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/רחפנים`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function DronesPage({ params }: { params: Promise<{ city: string }> }) {
  try {
    const { city: rawCity } = await params;
    const city = decodeURIComponent(rawCity);

    const message = `היי KTV, הגעתי מהאתר. אני מעוניין בשירותי רחפנים ב${city}. אפשר לקבל פרטים?`;

    const droneTypes = [
      { title: "רחפני ניקוי", desc: "רחפנים ייעודיים לניקוי חלונות וחזיתות", icon: "🧹" },
      { title: "רחפני צילום", desc: "רחפנים עם מצלמות HD לצילום תרמי ותיעוד", icon: "📷" },
      { title: "רחפני בדיקה", desc: "רחפנים לבדיקות גגות ומבנים", icon: "🔍" },
      { title: "רחפני תחזוקה", desc: "רחפנים לתחזוקת פאנלים סולאריים וציוד", icon: "🔧" }
    ];

    return (
      <div className="min-h-screen bg-white text-right" dir="rtl">
        <nav className="p-4 border-b bg-slate-50">
          <div className="max-w-4xl mx-auto flex justify-center">
            <span className="font-bold text-blue-900">KTV Israel</span>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto py-16 px-6">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🚁✈️</div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              רחפנים מקצועיים ב{city} <br /><span className="text-blue-600">הפתרון הטכנולוגי המתקדם</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              KTV Israel מציעים מגוון רחב של רחפנים מקצועיים ב{city}.
              ציוד מתקדם לכל סוגי עבודות ניקוי, בדיקה ותחזוקה.
            </p>
            <WhatsAppButton city={city} message={message} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">סוגי רחפנים שאנו מפעילים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {droneTypes.map((type) => (
                <div key={type.title} className="border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-300 transition-colors text-center">
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-slate-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">היתרונות של עבודה עם רחפנים</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-indigo-900 mb-3">🚀 טכנולוגיה מתקדמת</h4>
                <p className="text-slate-600 mb-4">רחפנים עם הטכנולוגיה החדשנית ביותר בשוק.</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 mb-3">⏱️ חיסכון זמן</h4>
                <p className="text-slate-600 mb-4">השלמת עבודות בזמן שיאור קצר משיטות מסורתיות.</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 mb-3">💰 עלות תחרותית</h4>
                <p className="text-slate-600 mb-4">מחירים תחרותיים עם תוצאות עדיפות.</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 mb-3">🌍 ידידותי לסביבה</h4>
                <p className="text-slate-600 mb-4">פחות פחמים ופחות השפעה על הסביבה.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">תחומי שירות של הרחפנים</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>ניקוי חלונות בגובה וחזיתות בניינים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>ניקוי ותחזוקת פאנלים סולאריים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>צילום תרמי ובדיקות מבנים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>בדיקות גגות וזיהוי נזילות</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>תיעוד אתרי בנייה ופרויקטים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">✓</span>
                <span>ניטור אתרים ובקרת איכות</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לחוויה עם רחפנים מתקדמים ב{city}?</h3>
            <p className="text-slate-600 mb-6">צוות המומחים שלנו מחכה לספק לכם את השירות הטוב ביותר</p>
            <WhatsAppButton city={city} message={message} />
          </div>
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
                  href={`/${encodeURIComponent(cityName)}/רחפנים`}
                  className="text-slate-300 hover:text-white hover:underline transition-colors text-center"
                >
                  {cityName}
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400">© 2026 KTV Israel - פריסה ארצית מלאה</p>
            </div>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('Error in DronesPage:', error);
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
