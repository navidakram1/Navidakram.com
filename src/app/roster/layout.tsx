import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#194391',
};

export const metadata: Metadata = {
  title: 'RosterFlow | AI Workforce & Shift Management - navidakram.com/roster',
  description: 'Enterprise multi-tenant workforce scheduling, AI shift generation, real-time clock-in attendance, and wage calculation on navidakram.com/roster.',
  keywords: [
    'RosterFlow',
    'Shift Management',
    'Roster Schedule',
    'Workforce Management',
    'Sk Navid Akram',
    'Cork Ireland'
  ],
  openGraph: {
    title: 'RosterFlow - AI Workforce & Shift Management SaaS',
    description: 'Enterprise multi-tenant workforce scheduling and AI shift generation by Sk Navid Akram.',
    url: 'https://navidakram.com/roster',
    siteName: 'navidakram.com',
    type: 'website',
  },
};

export default function RosterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="roster-app-scope min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {children}
    </div>
  );
}
