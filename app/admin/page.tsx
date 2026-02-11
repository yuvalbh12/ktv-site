'use client';
import { useState, useEffect } from 'react';

interface Lead {
  date: string;
  source: string;
  status: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ktv_leads');
      if (saved) setLeads(JSON.parse(saved));
    }
  }, []);

  const deleteLead = (index: number) => {
    const newLeads = leads.filter((_, i) => i !== index);
    setLeads(newLeads);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ktv_leads', JSON.stringify(newLeads));
    }
  };

  // Calculate KPIs
  const totalLeads = leads.length;
  const todayLeads = leads.filter(lead => {
    const leadDate = new Date(lead.date);
    const today = new Date();
    return leadDate.toDateString() === today.toDateString();
  }).length;

  // Find most popular city
  const cityCounts: { [key: string]: number } = {};
  leads.forEach(lead => {
    const pathParts = decodeURIComponent(lead.source).split('/');
    if (pathParts.length >= 2) {
      const city = pathParts[1];
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    }
  });
  const mostPopularCity = Object.keys(cityCounts).length > 0
    ? Object.entries(cityCounts).sort(([, a], [, b]) => b - a)[0][0]
    : 'אין נתונים';

  // Extract city and service from source
  const extractCityAndService = (source: string) => {
    const parts = decodeURIComponent(source).split('/');
    return {
      city: parts[1] || 'לא ידוע',
      service: parts[2] || 'לא ידוע'
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">לוח בקרה KTV Israel</h1>
          <p className="text-slate-600 text-lg">מערכת ניהול פניות וואטסאפ בזמן אמת</p>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">סה"כ לידים</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{totalLeads}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">לידים היום</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{todayLeads}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">העיר הפופולרית</p>
                <p className="text-xl font-bold text-slate-900 mt-1">{mostPopularCity}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="bg-slate-900 text-white px-6 py-4">
            <h2 className="text-xl font-semibold">רשימת לידים ({totalLeads})</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b">
                  <th className="p-4 font-semibold">תאריך ושעה</th>
                  <th className="p-4 font-semibold">עיר ושירות</th>
                  <th className="p-4 font-semibold text-center">סטטוס</th>
                  <th className="p-4 font-semibold text-center">פעולות</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-16 text-center">
                      <div className="text-slate-400">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-xl">מחכים לליד הראשון...</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  leads.map((lead, i) => {
                    const { city, service } = extractCityAndService(lead.source);
                    return (
                      <tr key={i} className="border-b hover:bg-blue-50 transition-colors">
                        <td className="p-4 align-top">
                          <div className="font-medium text-slate-900">
                            {lead.date.split(',')[0]}
                          </div>
                          <div className="text-sm text-slate-500">
                            {lead.date.split(',')[1]}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col gap-2">
                            <span className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-800 text-sm font-medium">
                              📍 {city}
                            </span>
                            <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm">
                              🔧 {service}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                            חדש
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => deleteLead(i)}
                            className="text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium border border-red-200 transition-colors"
                          >
                            🗑️ מחיקה
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
