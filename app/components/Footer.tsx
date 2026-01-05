
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Footer() {
    const { t, setLanguage } = useLanguage();

    return (
        <footer className="px-6 pt-12 pb-4 text-sm text-gray-500">
            <div className="mb-8">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="grayscale opacity-70" />
            </div>

            <div className="flex justify-between md:justify-around gap-8">
                <div>
                    <p className="mb-4 text-xs text-gray-700">{t('footer.explore')}</p>
                    <div className="space-y-2 text-black flex flex-col">
                        <Link href="/">{t('footer.home')}</Link>
                        <Link href="/resources">{t('footer.resources')}</Link>
                        <Link href="/contact">{t('footer.contact')}</Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="mb-4 text-xs text-gray-700">Categories</p>
                    <div className="space-y-2 text-black flex flex-col">
                        <Link href="/01">Start, Safety & Pregnancy Decisions</Link>
                        <Link href="/02">Prenatal Care: Access & How It Works</Link>
                        <Link href="/03">Everyday Pregnancy Care</Link>
                        <Link href="/04">Paying for Care, Paperwork & Support</Link>
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
                Free, confidential community resource for Dawson County. Information only — not medical or legal advice.
                <br /> <br />
                Updated: March 2025
            </div>

            <div className="flex items-center justify-between mt-6">
                <Link href="/privacy-policy" className="text-xs text-gray-700">Privacy Policy</Link>
                <Link href="/terms-of-use" className="text-xs text-gray-700">Terms of Use</Link>
            </div>
        </footer>
    );
}
