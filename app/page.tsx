import { SERVICES, CITIES } from '../constants';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-right" dir="rtl">
      <header className="bg-blue-900 text-white py-20 px-4 text-center">
        <p className="text-2xl opacity-90 font-light">KTV Israel - ניקוי חלונות בטכנולוגיה מתקדמת</p>
      </header>

      <main className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-slate-800 border-r-8 border-blue-600 pr-4">אזורי שירות ופתרונות</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITIES.map((city) => (
            <div key={city} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">{city}</h3>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <Link
                      href={`/${encodeURIComponent(city)}/${encodeURIComponent(service)}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      • {service} ב{city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-12 text-center mt-20">
        <p>© 2026 KTV Working Drone - פריסה ארצית מלאה</p>
      </footer>
    </div>
  );
}
