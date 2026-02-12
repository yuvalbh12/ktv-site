import { CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  return {
    title: `סולארי ב${city} | פאנלים סולאריים ואנרגיה סולארית | KTV Israel`,
    description: `מחפשים פתרון סולארי ב${city}? ניקוי ותחזוקת פאנלים סולאריים עם רחפנים מתקדמים. הגברת יעילות וחיסכון באנרגיה. לחצו לתיאום!`,
    openGraph: {
      title: `סולארי ב${city} | פאנלים סולאריים ואנרגיה סולארית | KTV Israel`,
      description: `מחפשים פתרון סולארי ב${city}? ניקוי ותחזוקת פאנלים סולאריים עם רחפנים מתקדמים. הגברת יעילות וחיסכון באנרגיה. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/סולארי`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function SolarPage({ params }: { params: Promise<{ city: string }> }) {
  try {
    const { city: rawCity } = await params;
    const city = decodeURIComponent(rawCity);

    const WHATSAPP_NUMBER = "972533707570";
    const message = encodeURIComponent(`היי KTV, הגעתי מהאתר. אני מעוניין בשירותים סולאריים ב${city}. אפשר לקבל פרטים?`);
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    const solarServices = [
      { title: "ניקוי פאנלים סולאריים", desc: "ניקוי מקצועי של פאנלים סולאריים להגברת יעילות", icon: "🧹" },
      { title: "תחזוקת פאנלים", desc: "בדיקה ותחזוקה שוטפת של מערכות סולאריות", icon: "🔧" },
      { title: "בדיקות סולאריות", desc: "בדיקות מקיפות של מערכות אנרגיה סולארית", icon: "🔍" },
      { title: "התקנת פאנלים", desc: "התקנה מקצועית של פאנלים סולאריים", icon: "⚡" },
      { title: "ניטור סולארי", desc: "ניטור קבוע של ביצוע מערכות סולאריות", icon: "📊" },
      { title: "ייעוץ סולארי", desc: "ייעוץ מקצועי למערכות אנרגיה סולארית", icon: "💡" }
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
            <div className="text-6xl mb-4">☀️</div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              פתרונות סולאריים ב{city} <br /><span className="text-blue-600">האנרגיה של העתיד כאן עכשיו</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              KTV Israel מספקים פתרונות סולאריים מתקדמים ב{city}.
              ניקוי, תחזוקה והתקנה של פאנלים סולאריים עם טכנולוגיית רחפנים.
            </p>
            <WhatsAppButton href={whatsappHref} city={city} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">שירותים סולאריים מקצועיים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solarServices.map((service) => (
                <div key={service.title} className="border-2 border-slate-100 p-6 rounded-2xl hover:border-yellow-300 transition-colors text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">למה ניקוי פאנלים סולאריים חשוב?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-yellow-900 mb-3">⚡ הגברת יעילות</h4>
                <p className="text-slate-600 mb-4">פאנלים נקיים מפיקים עד 25% יותר אנרגיה.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-900 mb-3">💰 חיסכון כספי</h4>
                <p className="text-slate-600 mb-4">יעילות גבוהה יותר = חשבונות חשמל נמוכים יותר.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-900 mb-3">🌿 אריכות חיים</h4>
                <p className="text-slate-600 mb-4">תחזוקה סדירה מאריכה את חיי הפאנלים.</p>
              </div>
              <div>
                <h4 className="font-bold text-yellow-900 mb-3">🌍 אנרגיה נקייה</h4>
                <p className="text-slate-600 mb-4">תרומה לסביבה עם אנרגיה מתחדשת.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">הטכנולוגיה שלנו לסולאר</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-orange-900 mb-3">🚁 רחפני סולאר</h4>
                <p className="text-slate-600 mb-4">רחפנים ייעודיים לעבודה עם פאנלים סולאריים.</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-900 mb-3">💧 מים מינימליים</h4>
                <p className="text-slate-600 mb-4">ניקוי עם מים מועטים ללא נזק לפאנלים.</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-900 mb-3">📊 ניטור ביצוע</h4>
                <p className="text-slate-600 mb-4">מעקב אחר ביצוע המערכת בזמן אמת.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">תהליך ניקוי פאנלים סולאריים</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">1</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">סקר</h4>
                <p className="text-slate-600 text-sm">בדיקת מצב הפאנלים</p>
              </div>
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">2</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">תכנון</h4>
                <p className="text-slate-600 text-sm">התאמת ציוד וזמנים</p>
              </div>
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">3</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">ניקוי</h4>
                <p className="text-slate-600 text-sm">ניקוי עם רחפנים</p>
              </div>
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">4</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">דוח</h4>
                <p className="text-slate-600 text-sm">דוח ביצוע והמלצות</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">יתרונות אנרגיה סולארית</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>הפחתת תלות באנרגיה מסורתית</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>החזר השקעה תוך מספר שנים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>ערך נכס מוגבר לנכס</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>אנרגיה ירוקה ומתחדשת</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>תמריצים ממשלת ישראל</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לפתרון סולארי מתקדם ב{city}?</h3>
            <p className="text-slate-600 mb-6">צוות המומחים שלנו מחכה לספק לכם את השירות הטוב ביותר</p>
            <WhatsAppButton href={whatsappHref} city={city} />
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
                  href={`/${encodeURIComponent(cityName)}/סולארי`}
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
    console.error('Error in SolarPage:', error);
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
