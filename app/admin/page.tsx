'use client';
import { useState, useEffect } from 'react';

interface Lead {
  date: string;
  source: string;
  status: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);

  // טעינה מהזכרון בטעינת הדף
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ktv_leads');
      if (saved) setLeads(JSON.parse(saved));
    }
  }, []);

  // שמירה בכל פעם שהרשימה משתנה
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ktv_leads', JSON.stringify(leads));
    }
  }, [leads]);

  return (
    <div className="min-h-screen bg-slate-50 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">ניהול לידים - KTV Israel</h1>
          <p className="text-slate-600">מערכת ניהול לידים מתקדמת</p>
        </header>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-blue-900 text-white px-6 py-4">
            <h2 className="text-xl font-semibold">רשימת לידים ({leads.length})</h2>
          </div>

          <div className="p-6">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="p-3 text-right font-semibold text-slate-700">תאריך</th>
                  <th className="p-3 text-right font-semibold text-slate-700">מקור</th>
                  <th className="p-3 text-right font-semibold text-slate-700">סטטוס</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-slate-500 bg-slate-50">
                      אין לידים חדשים כרגע.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-3 text-slate-900">{lead.date}</td>
                      <td className="p-3 text-slate-700">{lead.source}</td>
                      <td className="p-3">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
