'use client';

import dynamic from 'next/dynamic';

const RosterHome = dynamic(() => import('@/roster/page'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-700">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-xl border border-slate-200">
        <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-center">
          <p className="font-semibold text-slate-800 text-base">Loading RosterFlow</p>
          <p className="text-xs text-slate-500 mt-1">AI Workforce & Shift Management System</p>
        </div>
      </div>
    </div>
  ),
});

export default function RosterPage() {
  return <RosterHome />;
}
