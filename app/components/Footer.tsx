"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Footer() {
    const { t, setLanguage } = useLanguage();

    return (
        <footer className="px-6 pb-4 text-sm text-gray-500">
            <div className="flex justify-between md:justify-around gap-8 mt-4">
                <div>
                    <p className="mb-4 text-xs text-gray-700">{t('footer.explore')}</p>
                    <div className="space-y-2 text-black flex flex-col">
                        <Link href="/prenatalguide">{t('footer.home')}</Link>
                        <Link href="/prenatalguide/resources">{t('footer.resources')}</Link>
                        <Link href="/prenatalguide/contact">{t('footer.contact')}</Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="mb-4 text-xs text-gray-700">{t('footer.categories')}</p>
                    <div className="space-y-2 text-black flex flex-col">
                        <Link href="/prenatalguide/#01">{t('navbar.menu.start')}</Link>
                        <Link href="/prenatalguide/#02">{t('navbar.menu.prenatal')}</Link>
                        <Link href="/prenatalguide/#03">{t('navbar.menu.everyday')}</Link>
                        <Link href="/prenatalguide/#04">{t('navbar.menu.paying')}</Link>
                    </div>
                </div>
                <div>
                    <p className="mb-4 text-xs text-gray-700">{t('footer.language')}</p>
                    <ul className="space-y-2 text-black cursor-pointer">
                        <li onClick={() => setLanguage('en')} className="hover:text-primary transition-colors">English</li>
                        <li onClick={() => setLanguage('es')} className="hover:text-primary transition-colors">Español</li>
                        <li onClick={() => setLanguage('so')} className="hover:text-primary transition-colors">Soomali</li>
                    </ul>
                </div>
            </div>

            {/* <div className="flex flex-col items-center mt-16">
                <p className="text-base text-gray-700">{t('footer.partnerWith')}</p>
                <div className="flex justify-center gap-4">
                    <Link href='https://www.remorahealth.com'><Image src="/logo.png" alt="Logo" width={100} height={100} className="w-24 h-24 p-5 object-contain" /></Link>
                    <Link href='https://healthynebraska.org/'><Image src="/partnerLogo1.png" alt="Partner Logo 1" width={100} height={100} className="w-24 h-24 object-contain" /></Link>
                </div>
            </div> */}

            <div className="mt-10 w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-center text-[.7rem] text-gray-800">
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
