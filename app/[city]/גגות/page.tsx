import { CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  return {
    title: `גגות ב${city} | בדיקות ותחזוקת גגות עם רחפנים | KTV Israel`,
    description: `מחפשים פתרון לגגות ב${city}? בדיקות גגות, ניקוי ותחזוקה עם רחפנים מתקדמים. זיהוי נזילות ובעיות בגגות. לחצו לתיאום!`,
    openGraph: {
      title: `גגות ב${city} | בדיקות ותחזוקת גגות עם רחפנים | KTV Israel`,
      description: `מחפשים פתרון לגגות ב${city}? בדיקות גגות, ניקוי ותחזוקה עם רחפנים מתקדמים. זיהוי נזילות ובעיות בגגות. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/גגות`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function RoofsPage({ params }: { params: Promise<{ city: string }> }) {
  try {
    const { city: rawCity } = await params;
    const city = decodeURIComponent(rawCity);

    const message = `היי KTV, הגעתי מהאתר. אני מעוניין בשירותי גגות ב${city}. אפשר לקבל פרטים?`;

    const roofServices = [
      { title: "בדיקות גגות", desc: "בדיקות מקיפות של גגות עם רחפנים ומצלמות תרמיות", icon: "🔍" },
      { title: "זיהוי נזילות", desc: "איתור מדויק של נזילות ובעיות בגגות", icon: "💧" },
      { title: "ניקוי גגות", desc: "ניקוי מקצועי של גגות ומשטחים", icon: "🧹" },
      { title: "תחזוקת גגות", desc: "תחזוקה שוטפת של גגות וניקוזי מים", icon: "🔧" },
      { title: "צילום גגות", desc: "תיעוד מצב גגות לצרכים הנדסיים", icon: "📷" },
      { title: "ניטור גגות", desc: "ניטור קבוע של מצב הגג והתפתחויות", icon: "📊" }
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
            <div className="text-6xl mb-4">🏠</div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              פתרונות גגות ב{city} <br /><span className="text-blue-600">הטכנולוגיה ששומרת על הגג</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              KTV Israel מספקים פתרונות מתקדמים לגגות ב{city}.
              בדיקות, ניקוי ותחזוקה עם רחפנים וטכנולוגיה חדשנית.
            </p>
            <WhatsAppButton city={city} message={message} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">שירותי גגות מקצועיים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roofServices.map((service) => (
                <div key={service.title} className="border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-300 transition-colors text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">למה בדיקות גגות חשובות?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-900 mb-3">🚨 מניעת נזקים</h4>
                <p className="text-slate-600 mb-4">גילוי מוקדם של בעיות מנע נזקים יקרים.</p>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-3">💰 חיסכון כספי</h4>
                <p className="text-slate-600 mb-4">תיקון בעיות קטנות זול יותר מתיקון נזקים גדולים.</p>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-3">🏡 שמירה על הנכס</h4>
                <p className="text-slate-600 mb-4">גג תקין שומר על ערך הנכס שלך.</p>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-3">🌡️ יעילות אנרגטית</h4>
                <p className="text-slate-600 mb-4">גג תקין משפר את בידוד וחיסכון באנרגיה.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">הטכנולוגיה שלנו לגגות</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-3">📷 מצלמות HD</h4>
                <p className="text-slate-600 mb-4">צילום באיכות גבוהה של כל חלקי הגג.</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-3">🌡️ מצלמות תרמיות</h4>
                <p className="text-slate-600 mb-4">זיהוי בעיות בידוד ונזילות נסתרות.</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-3">🗺️ GPS מדויק</h4>
                <p className="text-slate-600 mb-4">מיפוי מדויק של כל בעיה ומיקומה.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">תהליך בדיקת גגות</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">1</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">סקר אווירי</h4>
                <p className="text-slate-600 text-sm">סריקת הגג עם רחפן</p>
              </div>
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">2</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">צילום תרמי</h4>
                <p className="text-slate-600 text-sm">זיהוי בעיות חבויות</p>
              </div>
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">3</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">ניתוח נתונים</h4>
                <p className="text-slate-600 text-sm">דוח מפורט עם המלצות</p>
              </div>
              <div className="text-center">
                <div className="bg-green-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-800 font-bold">4</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">המלצות תיקון</h4>
                <p className="text-slate-600 text-sm">פתרונות מעשיים לתיקון</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">הטכנולוגיה מאחורי KTV</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
                <div className="text-3xl mb-4">🧪</div>
                <h4 className="font-bold text-red-900 mb-3">SelfCleaner™</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  חומר ניקוי בלעדי שמתפרק ביולוגית ושומר על החלון נקי לאורך זמן.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
                <div className="text-3xl mb-4">🛠️</div>
                <h4 className="font-bold text-red-900 mb-3">KTV Care</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  תוכניות תחזוקה שנתיות לבנייני משרדים ומוסדות.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
                <div className="text-3xl mb-4">🚁</div>
                <h4 className="font-bold text-red-900 mb-3">ניקוי בגובה רב</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  יכולת הגעה ל-100+ מטרים ללא צורך בפיגומים.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">גלריית עבודות - רחפנים בפעולה</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <span className="text-6xl text-red-500">🏢</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">ניקוי חזיתות זכוכית</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <span className="text-6xl text-orange-500">🏛️</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">הסרת פיח מאבן ירושלים</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <span className="text-6xl text-yellow-500">☀️</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">תחזוקת פאנלים סולאריים</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <span className="text-6xl text-pink-500">🧹</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">ניקוי חלונות בגובה</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <span className="text-6xl text-rose-500">🔍</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">צילום תרמי למבנים</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="text-6xl text-amber-500">🏠</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">בדיקות גגות ומרפסות</p>
                </div>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              צילומים מפרויקטים אמיתיים של צוות KTV Israel בעבודה
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לבדיקת גגות מקצועית ב{city}?</h3>
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
                  href={`/${encodeURIComponent(cityName)}/גגות`}
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
    console.error('Error in RoofsPage:', error);
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
