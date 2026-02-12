import { CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  return {
    title: `ניקיון ב${city} | ניקוי מקצועי לבית ועסק | KTV Israel`,
    description: `מחפשים ניקיון ב${city}? שירותי ניקוי מקצועיים לבניינים, חלונות, חזיתות ופאנלים סולאריים. טכנולוגיית רחפנים מתקדמת לתוצאות מושלמות. לחצו לתיאום!`,
    openGraph: {
      title: `ניקיון ב${city} | ניקוי מקצועי לבית ועסק | KTV Israel`,
      description: `מחפשים ניקיון ב${city}? שירותי ניקוי מקצועיים לבניינים, חלונות, חזיתות ופאנלים סולאריים. טכנולוגיית רחפנים מתקדמת לתוצאות מושלמות. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/ניקיון`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function GeneralCleaningPage({ params }: { params: Promise<{ city: string }> }) {
  try {
    const { city: rawCity } = await params;
    const city = decodeURIComponent(rawCity);

    const message = `היי KTV, הגעתי מהאתר. אני מעוניין בשירותי ניקיון ב${city}. אפשר לקבל פרטים?`;

    const services = [
      { title: "ניקוי חלונות בגובה", desc: "פתרון חדשני לניקוי חלונות גבוהים ללא פיגומים", link: "ניקוי-חלונות-בגובה" },
      { title: "ניקוי חלונות רגיל", desc: "ניקוי חלונות מקצועי לבתים ומשרדים", link: "ניקוי-חלונות-בגובה" },
      { title: "ניקוי חזיתות", desc: "ניקוי חזיתות בניינים עם טכנולוגיית אוסמוזה", link: "שטיפת-חזיתות-באוסמוזה" },
      { title: "ניקוי פאנלים סולאריים", desc: "הגברת יעילות הפאנלים עם ניקוי מקצועי", link: "ניקוי-פאנלים-סולאריים" },
      { title: "ניקוי בניינים", desc: "פתרונות ניקוי מלאים לכל סוגי הבניינים", link: "שטיפת-חזיתות-באוסמוזה" },
      { title: "ניקוי מרפסות", desc: "ניקוי מרפסות ומרפסות שמש מקצועי", link: "ניקוי-חלונות-בגובה" }
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
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
              שירותי ניקיון ב{city} <br /><span className="text-blue-600">הפתרון המקצועי והמתקדם</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              KTV Israel מספקים מגוון רחב של שירותי ניקיון ב{city}.
              מניקוי חלונות בגובה ועד ניקוי חזיתות - טכנולוגיית רחפנים לתוצאות מושלמות.
            </p>
            <WhatsAppButton city={city} message={message} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">בחרו את השירות המתאים לכם</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              <button className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🧹</div>
                <h3 className="font-bold text-slate-900 mb-2">ניקוי חלונות</h3>
                <p className="text-slate-600 text-sm">פתרון חדשני לניקוי חלונות גבוהים</p>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-slate-900 mb-2">ניקוי חלונות רגיל</h3>
                <p className="text-slate-600 text-sm">ניקוי חלונות מקצועיים ובתים</p>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold text-slate-900 mb-2">ניקוי חזיתות</h3>
                <p className="text-slate-600 text-sm">ניקוי חזיתות בניינים עם טכנולוגיית אוסמוזה</p>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">☀️</div>
                <h3 className="font-bold text-slate-900 mb-2">פאנלים סולאריים</h3>
                <p className="text-slate-600 text-sm">הגברת יעילות הפאנלים עם ניקוי מקצועי</p>
              </button>
              <button className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="font-bold text-slate-900 mb-2">KTV Care</h3>
                <p className="text-slate-600 text-sm">תוכניות תחזוקה שנתיות למוסדות</p>
              </button>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">בחרתם: ניקוי חלונות בגובה</h3>
              <div className="bg-white rounded-xl p-6 inline-block max-w-md">
                <h4 className="font-bold text-green-900 mb-3 text-lg">ניקוי חלונות בגובה</h4>
                <p className="text-slate-600 mb-4">פתרון חדשני לניקוי חלונות גבוהים ללא פיגומים.</p>
                <WhatsAppButton city={city} message={`היי KTV, אני מעוניין בניקוי חלונות בגובה ב${city}. אפשר לקבל פרטים?`} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">טכנולוגיות מקצועיות</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
                  <div className="text-3xl mb-4">🧪</div>
                  <h4 className="font-bold text-green-900 mb-3">SelfCleaner™ Technology</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    חומר ניקוי בלעדי שמתפרק ביולוגית. שומר על החלון נקי לאורך זמן ומגן הביצועים.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>• הגנה יציבה יותר משך</li>
                    <li>• בטוח סביבת וידידות</li>
                    <li>• תוצאה ארוכה</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="text-3xl mb-4">🛠️</div>
              <h4 className="font-bold text-green-900 mb-3">KTV Care Plans</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                תוכניות תחזוקה שנתיות לבנייני משרדים ומוסדות עם תכניסה מלאה.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• בדיקות ותחזוקה שוטפתית</li>
                <li>• תכנוןות תכניסה מלאה</li>
                <li>• דוח תקופות וניתוחים</li>
              </ul>
            </div>
          </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">פתרונות תעשייתיים</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-green-300 transition-colors">
                <div className="text-4xl mb-4">☀️</div>
                <h4 className="font-bold text-slate-900 mb-3">פאנלים סולאריים</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  ניקוי ותחזוקת פאנלים סולאריים עם טכנוסה מלאה.
                </p>
                <WhatsAppButton city={city} message={`היי KTV, אני מעוניין בפאנלים סולאריים ב${city}. אפשר לקבל פרטים?`} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-green-300 transition-colors">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="font-bold text-slate-900 mb-3">בניינים גבוהים</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  ניקוי חזיתות וחלונות בבניינים גבוהים ללא צורך בפיגומים.
                </p>
                <WhatsAppButton city={city} message={`היי KTV, אני מעוניין בניקוי בניינים גבוהים ב${city}. אפשר לקבל פרטים?`} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-green-300 transition-colors">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="font-bold text-slate-900 mb-3">אבני סטון</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  ניקוי ושטיפת חזיתות באבני סטון עם טכנוסה מלאה.
                </p>
                <WhatsAppButton city={city} message={`היי KTV, אני מעוניין בניקוי אבני סטון ב${city}. אפשר לקבל פרטים?`} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">גלריית עבודות - רחפנים בפעולה</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <span className="text-6xl text-green-500">🏢</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                    <p className="text-sm font-medium">ניקוי חזיתות זכוכית</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-6xl text-blue-500">🏛️</span>
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
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <span className="text-6xl text-purple-500">🧹</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                    <p className="text-sm font-medium">ניקוי חלונות בגובה</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <span className="text-6xl text-orange-500">🔍</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                    <p className="text-sm font-medium">צילום תרמי למבנים</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <span className="text-6xl text-red-500">🏠</span>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לניקוי מקצועי ב{city}?</h3>
              <p className="text-slate-600 mb-6">צוות המומחים שלנו מחכה לספק לכם את השירות הטוב ביותר</p>
              <WhatsAppButton city={city} message={message} />
            </div>
          </main >
        </div >
      </div >
    );
  } catch (error) {
    console.error('Error in GeneralCleaningPage:', error);
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
