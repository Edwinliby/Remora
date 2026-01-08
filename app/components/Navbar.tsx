"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            // If scrolled more than 10px, treat as scrolled
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isMenuOpen]);

    const menuItems = [
        {
            category: t('navbar.menu.start'),
            mainHref: "/#01",
            items: [
                { label: t('navbar.items.gettingStarted'), href: "/#section-1-0" },
                { label: t('navbar.items.thinkPregnant'), href: "/#section-1-1" },
                { label: t('navbar.items.careRightAway'), href: "/#section-1-2" },
                { label: t('navbar.items.extraHelp'), href: "/#section-1-3" },
                { label: t('navbar.items.options'), href: "/#section-1-4" },
                { label: t('navbar.items.whyPrenatal'), href: "/#section-1-5" }
            ]
        },
        {
            category: t('navbar.menu.prenatal'),
            mainHref: "/#02",
            items: [
                { label: t('navbar.items.advocating'), href: "/#section-2-0" },
                { label: t('navbar.items.choosingProvider'), href: "/#section-2-1" },
                { label: t('navbar.items.locations'), href: "/#section-2-2" },
                { label: t('navbar.items.whatLooksLike'), href: "/#section-2-3" }
            ]
        },
        {
            category: t('navbar.menu.everyday'),
            mainHref: "/#03",
            items: [
                { label: t('navbar.items.wellness'), href: "/#section-3-0" }
            ]
        },
        {
            category: t('navbar.menu.paying'),
            mainHref: "/#04",
            items: [
                { label: t('navbar.items.coverage'), href: "/#section-4-0" },
                { label: t('navbar.items.specialSituations'), href: "/#section-4-1" },
                { label: t('navbar.items.moreHelp'), href: "/#section-4-2" },
                { label: t('navbar.items.applyCoverage'), href: "/#section-4-3" },
                { label: t('navbar.items.marketplace'), href: "/#section-4-4" },
                { label: t('navbar.items.documents'), href: "/#section-4-5" },
                { label: t('navbar.items.waitingCoverage'), href: "/#section-4-6" },
                { label: t('navbar.items.importantInfo'), href: "/#section-4-7" }
            ]
        }
    ];

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        // Set initial active link based on hash
        setActiveLink(window.location.hash || window.location.pathname);
    }, []);

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-white/50 backdrop-blur-sm shadow-xs" : "bg-transparent"
                }`}
        >
            <Link href="/" className="w-10 h-10">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
                className={`text-gray-600 focus:outline-none md:hidden ${isMenuOpen ? "invisible opacity-0" : "visible opacity-100"}`}
                onClick={() => setIsMenuOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 left-0 z-[999] flex h-[100dvh] w-[100vw] flex-col bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    className="absolute top-3 right-3 text-gray-900 focus:outline-none z-50 p-2 bg-white shadow-sm rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex-1 overflow-y-auto px-6 pb-20 pt-18">
                    {/* Header Image Placeholder */}
                    <div className="mb-8 overflow-hidden rounded-lg">
                        <Image src="/1.png" alt="Pregnancy Support" width={600} height={400} className="h-auto w-full object-cover" />
                    </div>

                    <Link href="/resources" onClick={() => handleLinkClick('/resources')} className={`flex items-center justify-between mb-8 group cursor-pointer ${activeLink === '/resources' ? 'text-primary' : 'text-gray-800'}`}>
                        <h2 className={`text-3xl font-normal transition-colors ${activeLink === '/resources' ? 'text-primary' : 'text-gray-800 group-hover:text-primary'}`}>{t('navbar.menu.resourceList')}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-colors ${activeLink === '/resources' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </Link>

                    <div className="space-y-12">
                        {menuItems.map((section, idx) => (
                            <div key={idx}>
                                <h3 className={`text-2xl font-normal mb-6 leading-tight transition-colors ${activeLink.includes(section.mainHref) ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}>
                                    <Link href={section.mainHref} onClick={() => handleLinkClick(section.mainHref)}>
                                        {section.category}
                                    </Link>
                                </h3>
                                <ul className="space-y-1 mt-3">
                                    {section.items.map((item, i) => {
                                        const isActive = activeLink === item.href;
                                        return (
                                            <li key={i}>
                                                <Link
                                                    href={item.href}
                                                    className={`group flex items-center py-2.5 pl-4 border-l-2 transition-all ml-1 ${isActive ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/50'}`}
                                                    onClick={() => handleLinkClick(item.href)}
                                                >
                                                    <span className={`text-[15px] font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-gray-500 group-hover:text-primary'}`}>
                                                        {item.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
