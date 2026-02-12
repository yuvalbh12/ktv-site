import { CITIES } from '../../../constants';
import Link from 'next/link';
import WhatsAppButton from '../../../components/WhatsAppButton';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity);

  return {
    title: `ניקוי בניינים ב${city} | חזיתות וחלונות | KTV Israel`,
    description: `מחפשים ניקוי בניינים ב${city}? ניקוי חזיתות, חלונות בגובה ופאנלים סולאריים. טכנולוגיית רחפנים מתקדמת לבניינים מכל סוג. לחצו לתיאום!`,
    openGraph: {
      title: `ניקוי בניינים ב${city} | חזיתות וחלונות | KTV Israel`,
      description: `מחפשים ניקוי בניינים ב${city}? ניקוי חזיתות, חלונות בגובה ופאנלים סולאריים. טכנולוגיית רחפנים מתקדמת לבניינים מכל סוג. לחצו לתיאום!`,
      url: `https://ktv-site-iota.vercel.app/${encodeURIComponent(city)}/ניקוי-בניינים`,
      siteName: 'KTV Israel',
      locale: 'he_IL',
      type: 'website',
    },
  };
}

export default async function BuildingCleaningPage({ params }: { params: Promise<{ city: string }> }) {
  try {
    const { city: rawCity } = await params;
    const city = decodeURIComponent(rawCity);

    const WHATSAPP_NUMBER = "972533707570";
    const message = encodeURIComponent(`היי KTV, הגעתי מהאתר. אני מעוניין בניקוי בניינים ב${city}. אפשר לקבל פרטים?`);
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    const buildingTypes = [
      { title: "בנייני מגורים", desc: "ניקוי חזיתות וחלונות לבנייני דירות", icon: "🏢" },
      { title: "בנייני משרדים", desc: "ניקוי מקצועי למגדלי משרדים ומרכזים עסקיים", icon: "🏬" },
      { title: "מרכזים מסחריים", desc: "ניקוי חזיתות שופרינג וחלונות ראווה", icon: "🏪" },
      { title: "בתי חולים", desc: "ניקוי חלונות וחזיתות עם סטנדרטים גבוהים", icon: "🏥" },
      { title: "מלונות", desc: "ניקוי חלונות וחזיתות למראה מושלם", icon: "🏨" },
      { title: "מבנים ציבוריים", desc: "ניקוי עבור מבנים ציבוריים ומוסדיים", icon: "🏛️" }
    ];

    const services = [
      { title: "ניקוי חזיתות", desc: "שטיפת חזיתות בטכנולוגיית אוסמוזה", link: "שטיפת-חזיתות-באוסמוזה" },
      { title: "ניקוי חלונות בגובה", desc: "ניקוי חלונות גבוהים עם רחפנים", link: "ניקוי-חלונות-בגובה" },
      { title: "ניקוי פאנלים סולאריים", desc: "ניקוי ותחזוקה פאנלים סולאריים", link: "ניקוי-פאנלים-סולאריים" },
      { title: "צילום תרמי", desc: "בדיקות תרמיות לאיתור בעיות", link: "צילום-תרמי-למבנים" }
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
              ניקוי בניינים ב{city} <br /><span className="text-blue-600">הפתרון הטכנולוגי המתקדם</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed">
              KTV Israel מתמחים בניקוי בניינים מכל סוג ב{city}. 
              טכנולוגיית רחפנים חדשנית לניקוי חזיתות, חלונות ופאנלים סולאריים.
            </p>
            <WhatsAppButton href={whatsappHref} city={city} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">סוגי בניינים שאנו מנקים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingTypes.map((type) => (
                <div key={type.title} className="border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-300 transition-colors text-center">
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-slate-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">שירותי ניקוי לבניינים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
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

          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">היתרונות של ניקוי בניינים עם רחפנים</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-purple-900 mb-3">🏗️ גישה לכל גובה</h4>
                <p className="text-slate-600 mb-4">ניגשים לכל חלקי הבניין ללא צורך בפיגומים או ציוד כבד.</p>
              </div>
              <div>
                <h4 className="font-bold text-purple-900 mb-3">⚡ עבודה מהירה</h4>
                <p className="text-slate-600 mb-4">השלמת עבודות ניקוי בזמן קצר יותר משיטות מסורתיות.</p>
              </div>
              <div>
                <h4 className="font-bold text-purple-900 mb-3">🌿 ידידותי לסביבה</h4>
                <p className="text-slate-600 mb-4">ללא שימוש בכימים מזיקים ומים מועטים.</p>
              </div>
              <div>
                <h4 className="font-bold text-purple-900 mb-3">💰 חסכון בעלויות</h4>
                <p className="text-slate-600 mb-4">מחיר תחרותי לניקוי מסורתי עם תוצאות טובות יותר.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">תהליך עבודה</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-800 font-bold">1</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">סקר</h4>
                <p className="text-slate-600 text-sm">בדיקת הבניין וזיהוי צרכים</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-800 font-bold">2</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">תכנון</h4>
                <p className="text-slate-600 text-sm">התאמת הציוד ולוח זמנים</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-800 font-bold">3</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">ביצוע</h4>
                <p className="text-slate-600 text-sm">ניקוי מקצועי עם רחפנים</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-800 font-bold">4</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">גמר</h4>
                <p className="text-slate-600 text-sm">בדיקת איכות ומסירה</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לניקוי בניינים מקצועי ב{city}?</h3>
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
                  href={`/${encodeURIComponent(cityName)}/ניקוי-בניינים`}
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
    console.error('Error in BuildingCleaningPage:', error);
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
