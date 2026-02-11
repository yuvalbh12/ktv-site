'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [leads, setLeads] = useState([]);

  // טעינה מהזכרון בטעינת הדף
  useEffect(() => {
    const saved = localStorage.getItem('ktv_leads');
    if (saved) setLeads(JSON.parse(saved));
  }, []);

  // שמירה בכל פעם שהרשימה משתנה
  useEffect(() => {
    localStorage.setItem('ktv_leads', JSON.stringify(leads));
  }, [leads]);

  return (
    <div className="p-8" dir="rtl">
      <h1 className="text-2xl font-bold mb-6">ניהול לידים - KTV Israel</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">תאריך</th>
              <th className="p-2">מקור</th>
              <th className="p-2">סטטוס</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan={3} className="p-4 text-center text-gray-500">אין לידים חדשים כרגע.</td></tr>
            ) : (
              leads.map((lead, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{lead.date}</td>
                  <td className="p-2">{lead.source}</td>
                  <td className="p-2">{lead.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
