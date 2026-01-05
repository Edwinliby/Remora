"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Footer() {
    const { t, setLanguage } = useLanguage();

    return (
        <footer className="px-6 pt-12 pb-4 text-sm text-gray-500">
            {/* <Link href="/" className="mb-6">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="grayscale opacity-70" />
            </Link> */}

            <div className="flex justify-between md:justify-around gap-8 mt-4">
                <div>
                    <p className="mb-4 text-xs text-gray-700">{t('footer.explore')}</p>
                    <div className="space-y-2 text-black flex flex-col">
                        <Link href="/">{t('footer.home')}</Link>
                        <Link href="/resources">{t('footer.resources')}</Link>
                        <Link href="/contact">{t('footer.contact')}</Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="mb-4 text-xs text-gray-700">{t('footer.categories')}</p>
                    <div className="space-y-2 text-black flex flex-col">
                        <Link href="/01">{t('navbar.menu.start')}</Link>
                        <Link href="/02">{t('navbar.menu.prenatal')}</Link>
                        <Link href="/03">{t('navbar.menu.everyday')}</Link>
                        <Link href="/04">{t('navbar.menu.paying')}</Link>
                    </div>
                </div>
                <div>
                    <p className="mb-4 text-xs text-gray-700">{t('footer.language')}</p>
                    <ul className="space-y-2 text-black cursor-pointer">
                        <li onClick={() => setLanguage('en')} className="hover:text-rose-500 transition-colors">English</li>
                        <li onClick={() => setLanguage('es')} className="hover:text-rose-500 transition-colors">Español</li>
                        <li onClick={() => setLanguage('so')} className="hover:text-rose-500 transition-colors">Soomali</li>
                    </ul>
                </div>
            </div>

            <div className="mt-18 w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-center text-[.7rem] text-gray-800">
                {t('footer.disclaimer')}
                <br /> <br />
                {t('footer.updated')}
            </div>

            <div className="flex items-center justify-between mt-6">
                <Link href="/privacy-policy" className="text-xs text-gray-700">{t('footer.privacy')}</Link>
                <Link href="/terms-of-use" className="text-xs text-gray-700">{t('footer.terms')}</Link>
            </div>
        </footer>
    );
}
