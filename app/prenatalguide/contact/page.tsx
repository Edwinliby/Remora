"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <main className="relative min-h-screen pt-24 pb-12 px-4 overflow-hidden">
            <div className="relative z-10 max-w-[1000px] mx-auto bg-white/80 backdrop-blur-md rounded-[2rem] shadow-xl shadow-purple-900/5 border border-white/50 p-6 md:p-12 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Info Section */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-block p-3 w-fit rounded-2xl bg-indigo-50 text-[var(--color-primary)] mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">
                            {t('contactPage.title')}
                        </h1>
                        <p className="text-[#1A0053]/80 text-base md:text-lg font-medium leading-relaxed mb-6">
                            {t('contactPage.subtitle')}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-xl bg-purple-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                                    <p className="text-base font-semibold text-[#1A0053]">{t('contactPage.info.email')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-xl bg-purple-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                                    <p className="text-base font-semibold text-[#1A0053]">{t('contactPage.info.phone')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-xl bg-purple-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="text-base font-semibold text-[#1A0053]">{t('contactPage.info.address')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <form className="space-y-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="block text-xs font-bold text-[#1A0053] uppercase tracking-wider ml-1">
                                    {t('contactPage.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[var(--color-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-300 font-medium"
                                    placeholder="Sarah Doe"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-xs font-bold text-[#1A0053] uppercase tracking-wider ml-1">
                                    {t('contactPage.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[var(--color-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-300 font-medium"
                                    placeholder="sarah@example.com"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="block text-xs font-bold text-[#1A0053] uppercase tracking-wider ml-1">
                                    {t('contactPage.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-[var(--color-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all duration-300 font-medium resize-none"
                                    placeholder={t('contactPage.form.message')}
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[var(--color-primary)] text-white font-bold text-base py-3.5 rounded-xl hover:bg-[#8b95f2] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/20 mt-2 group flex items-center justify-center gap-2"
                            >
                                {t('contactPage.form.submit')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    );
}
