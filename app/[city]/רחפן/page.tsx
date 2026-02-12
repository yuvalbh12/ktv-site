import { CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  return {
    title: `רחפן ניקוי ב${city} | טכנולוגיית רחפנים מתקדמת | KTV Israel`,
    description: `מחפשים רחפן ניקוי ב${city}? טכנולוגיית רחפנים מתקדמת לניקוי חלונות, חזיתות ופאנלים סולאריים. בטיחות מלאה ותוצאות מושלמות. לחצו לתיאום!`,
    openGraph: {
      title: `רחפן ניקוי ב${city} | טכנולוגיית רחפנים מתקדמת | KTV Israel`,
      description: `מחפשים רחפן ניקוי ב${city}? טכנולוגיית רחפנים מתקדמת לניקוי חלונות, חזיתות ופאנלים סולאריים. בטיחות מלאה ותוצאות מושלמות. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/רחפן`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function DronePage({ params }: { params: Promise<{ city: string }> }) {
  try {
    const { city: rawCity } = await params;
    const city = decodeURIComponent(rawCity);

    const message = `היי KTV, הגעתי מהאתר. אני מעוניין בשירותי רחפנים ב${city}. אפשר לקבל פרטים?`;

    const droneServices = [
      { title: "ניקוי חלונות בגובה", desc: "רחפן מקצועי לניקוי חלונות גבוהים ללא פיגומים", link: "ניקוי-חלונות-בגובה" },
      { title: "שטיפת חזיתות", desc: "רחפן לשטיפת חזיתות בניינים עם טכנולוגיית אוסמוזה", link: "שטיפת-חזיתות-באוסמוזה" },
      { title: "ניקוי פאנלים סולאריים", desc: "רחפן לניקוי ותחזוקת פאנלים סולאריים על הגג", link: "ניקוי-פאנלים-סולאריים" },
      { title: "צילום תרמי", desc: "רחפן עם מצלמה תרמית לבדיקות מבנים", link: "צילום-תרמי-למבנים" },
      { title: "בדיקות גגות", desc: "רחפן לבדיקות גגות וזיהוי בעיות", link: "צילום-תרמי-למבנים" },
      { title: "ניטור אתר", desc: "רחפן לניטור ותיעוד אתרי בנייה", link: "צילום-תרמי-למבנים" }
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
            <div className="text-6xl mb-4">🚁</div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              רחפן ניקוי ב{city} <br /><span className="text-blue-600">הטכנולוגיה שמשנה את הכל</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              KTV Israel מציעים שירותי רחפנים מתקדמים ב{city}.
              טכנולוגיית רחפנים חדשנית לניקוי, בדיקות ותחזוקה.
            </p>
            <WhatsAppButton city={city} message={message} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">שירותי רחפנים ב{city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {droneServices.map((service) => (
                <div key={service.link} className="border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-300 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <Link
                    href={`/${encodeURIComponent(city)}/${service.link}`}
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                  >
                    פרטים נוספים →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-sky-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">היתרונות של רחפני ניקוי</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-sky-900 mb-2">🚁 גישה לכל מקום</h4>
                <p className="text-slate-600">הרחפן מגיע לכל גובה וכל מקום שבלתי אפשרי לגשת אליו.</p>
              </div>
              <div>
                <h4 className="font-bold text-sky-900 mb-2">⚡ מהירות ויעילות</h4>
                <p className="text-slate-600">עבודה מהירה פי כמה משיטות מסורתיות עם תוצאות מושלמות.</p>
              </div>
              <div>
                <h4 className="font-bold text-sky-900 mb-2">🛡️ בטיחות מוחלטת</h4>
                <p className="text-slate-600">אין עובדים בסיכון - כל הפעולות נשלטות מהקרקע בבטחון.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">הטכנולוגיה שלנו</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-900 mb-3">🎯 רחפנים מקצועיים</h4>
                <p className="text-slate-600 mb-4">רחפני עבודה מתקדמים עם ציוד ניקוי ייעודי.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-3">💧 מים מינימליים</h4>
                <p className="text-slate-600 mb-4">טכנולוגיית אוסמוזה שחוסכת מים ומגינה על הסביבה.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-3">📷 מצלמות HD</h4>
                <p className="text-slate-600 mb-4">תיעוד באיכות גבוהה של כל עבודת הניקוי.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-3">🌐 GPS מדויק</h4>
                <p className="text-slate-600 mb-4">ניווט מדויק ובקרת איכות בזמן אמת.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">הטכנולוגיה מאחורי KTV</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-sky-100">
                <div className="text-3xl mb-4">🧪</div>
                <h4 className="font-bold text-sky-900 mb-3">SelfCleaner™</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  חומר ניקוי בלעדי שמתפרק ביולוגית ושומר על החלון נקי לאורך זמן.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-sky-100">
                <div className="text-3xl mb-4">🛠️</div>
                <h4 className="font-bold text-sky-900 mb-3">KTV Care</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  תוכניות תחזוקה שנתיות לבנייני משרדים ומוסדות.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-sky-100">
                <div className="text-3xl mb-4">🚁</div>
                <h4 className="font-bold text-sky-900 mb-3">ניקוי בגובה רב</h4>
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
                <div className="aspect-video bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                  <span className="text-6xl text-sky-500">🏢</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">ניקוי חזיתות זכוכית</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                  <span className="text-6xl text-cyan-500">🏛️</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">הסרת פיח מאבן ירושלים</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl text-blue-500">☀️</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">תחזוקת פאנלים סולאריים</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <span className="text-6xl text-teal-500">🧹</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">ניקוי חלונות בגובה</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <span className="text-6xl text-indigo-500">🔍</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm font-medium">צילום תרמי למבנים</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-6xl text-green-500">🏠</span>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לחווית רחפנים מתקדמת ב{city}?</h3>
            <p className="text-slate-600 mb-6">צוות המומחים שלנו מחכה לספק לכם את השירות החדשני ביותר</p>
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
                  href={`/${encodeURIComponent(cityName)}/רחפן`}
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
    console.error('Error in DronePage:', error);
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
