'use client';
import { useState, useEffect } from 'react';

interface Lead {
  date: string;
  source: string;
  status: string;
  deviceType?: string;
  timeOnPage?: number;
  referrer?: string;
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

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">לוח בקרה KTV Israel</h1>
            <p className="text-slate-500">ניהול פניות וואטסאפ בזמן אמת</p>
          </div>
          <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
            סה"כ לידים: {leads.length}
          </div>
        </header>

        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-4 border-b">תאריך ושעה</th>
                <th className="p-4 border-b">מיקום ושירות</th>
                <th className="p-4 border-b text-center">פעולות</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr><td colSpan={3} className="p-12 text-center text-slate-400">מחכים לליד הראשון... 🚀</td></tr>
              ) : (
                leads.map((lead, i) => (
                  <tr key={i} className="border-b hover:bg-blue-50 transition-colors">
                    <td className="p-4 align-top">
                      <div className="font-medium text-slate-900">{lead.date.split(',')[0]}</div>
                      <div className="text-xs text-slate-500">{lead.date.split(',')[1]}</div>
                    </td>
                    <td className="p-4">
                      <div className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-sm mb-1">
                        {decodeURIComponent(lead.source).replace(/\//g, ' > ').substring(3)}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => deleteLead(i)}
                        className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-md text-sm border border-red-200"
                      >
                        מחיקה
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
