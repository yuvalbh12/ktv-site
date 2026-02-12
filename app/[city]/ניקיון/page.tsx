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

    const WHATSAPP_NUMBER = "972533707570";
    const message = encodeURIComponent(`היי KTV, הגעתי מהאתר. אני מעוניין בשירותי ניקיון ב${city}. אפשר לקבל פרטים?`);
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

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
            <WhatsAppButton href={whatsappHref} city={city} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">כל שירותי הניקיון ב{city}</h2>
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

          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">למה לבחור ניקיון עם KTV Israel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-green-900 mb-2">🌟 ניקיון מושלם</h4>
                <p className="text-slate-600">תוצאות ניקיון מקצועיות עם טכנולוגיה מתקדמת.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-2">⏰ חיסכון זמן</h4>
                <p className="text-slate-600">שירות מהיר ויעיל שחוסך לכם זמן יקר.</p>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-2">🛡️ בטיחות מלאה</h4>
                <p className="text-slate-600">אין סיכונים - כל העבודה נשלטת מהקרקע.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">היתרונות של ניקיון עם רחפנים</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>גישה למקומות גבוהים ובלתי נגישים ללא ציוד כבד</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>ניקוי אחיד ומושלם בכל הגבהים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>שמירה על הסביבה - ללא כימים מזיקים</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>מחיר תחרותי לניקוי מסורתי</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">מוכנים לניקיון מקצועי ב{city}?</h3>
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
                  href={`/${encodeURIComponent(cityName)}/ניקיון`}
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
