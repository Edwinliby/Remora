"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-[#A0A9FF]/10 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">

        {/* Hero Section */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] tracking-tight mb-2">
            Remora
          </h1>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-16 max-w-4xl mx-auto">

          {/* Prenatal Guide Card */}
          <Link href="/prenatalguide"
            className="group relative bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:border-[var(--color-primary)]/50 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-8"
          >
            <div className="w-24 h-24 bg-indigo-50/80 rounded-full flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002853] group-hover:text-[var(--color-primary)] transition-colors">
                {t('hero.badge')}
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                {t('hero.introCard.text')[0].split('.')[0]}.
              </p>
            </div>
            <span className="mt-auto px-6 py-3 rounded-full bg-gray-50 text-[var(--color-primary)] font-bold flex items-center gap-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
              View Guide <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </Link>

          {/* Resources Card */}
          <Link href="/resources"
            className="group relative bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:border-[var(--color-primary)]/50 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-8"
          >
            <div className="w-24 h-24 bg-indigo-50/80 rounded-full flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002853] group-hover:text-[var(--color-primary)] transition-colors">
                {t('navbar.menu.resourceList')}
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                {t('resourcesPage.subtitle')}
              </p>
            </div>
            <span className="mt-auto px-6 py-3 rounded-full bg-gray-50 text-[var(--color-primary)] font-bold flex items-center gap-2 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
              Find Resources <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </Link>

        </div>
      </div>
    </main>
  );
}