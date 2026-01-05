"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type Flower = {
    id: number;
    left: number;
    scale: number;
    duration: number;
    delay: number;
    opacity: number;
};

export default function HeroSection() {
    const [flowers, setFlowers] = useState<Flower[]>([]);
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        // Generate random flowers only on client to avoid hydration mismatch
        const newFlowers = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // 0-100%
            scale: 0.2 + Math.random() * 0.8, // 0.2 - 1.0 (Varied sizes)
            duration: 15 + Math.random() * 20, // 15-35s (Slow fall)
            delay: Math.random() * 40 - 20, // -20s to +20s (Mix of already falling and waiting)
            opacity: 0.3 + Math.random() * 0.7, // 0.3-1
        }));
        setFlowers(newFlowers);
    }, []);

    return (
        <section className="relative overflow-hidden pt-28 pb-20 text-center min-h-[500px]">
            <style>{`
                @keyframes falling-flowers {
                    0% { top: -50px; transform: rotate(0deg); opacity: 0; }
                    15% { opacity: var(--target-opacity, 1); }
                    75% { opacity: var(--target-opacity, 0); }
                    100% { top: 100%; transform: rotate(360deg); opacity: 0; }
                }
                @keyframes wave {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
            {/* Falling Flowers Container */}
            <div className="absolute inset-0 pointer-events-none z-1">
                {flowers.map((f) => (
                    <div
                        key={f.id}
                        className="absolute top-0"
                        style={{
                            left: `${f.left}%`,
                            width: `${f.scale * 40}px`,
                            height: `${f.scale * 40}px`,
                            opacity: 0,
                            animation: `falling-flowers ${f.duration}s linear infinite`,
                            animationDelay: `${f.delay}s`,
                            // @ts-ignore
                            "--target-opacity": f.opacity,
                        } as React.CSSProperties}
                    >
                        <Image
                            src="/petal.png"
                            alt=""
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Static Content (z-10 to stay above flowers) */}
            <div className="relative z-1 px-6 pt-24 py-8 md:py-16 gap-32 md:gap-20 lg:gap-28 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="inline-block rounded-full bg-primary/20 px-4 py-2 text-xs font-medium text-[#002853] border border-primary/40">
                        {t('hero.badge')}
                    </div>
                    <h1 className="w-full md:w-[90%] lg:w-[60%] text-[1.35rem] md:text-4xl xl:text-5xl font-medium leading-tight text-primary">
                        {t('hero.title')}
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-[#002853]">
                        {t('hero.subtitle')}
                    </p>
                </div>

                <div className="w-full md:w-fit flex flex-col items-center justify-center gap-8 mt-6">
                    <button className="rounded-lg bg-primary w-[95%] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
                        {t('hero.cta')}
                    </button>
                    {/* Language buttons moved to bottom of section */}<div className="flex justify-center gap-4 text-xs font-medium text-primary pb-10">
                        <button onClick={() => setLanguage('en')} className={`rounded-xl border border-[#EDEDFC] px-4 py-2 text-sm font-normal text-[#4C4C4C] transition-transform hover:scale-105 active:scale-95 ${language === 'en' ? 'bg-primary/20' : 'bg-white'}`}>English</button>
                        <button onClick={() => setLanguage('so')} className={`rounded-xl border border-[#EDEDFC] px-4 py-2 text-sm font-normal text-[#4C4C4C] transition-transform hover:scale-105 active:scale-95 ${language === 'so' ? 'bg-primary/20' : 'bg-white'}`}>Soomali</button>
                        <button onClick={() => setLanguage('es')} className={`rounded-xl border border-[#EDEDFC] px-4 py-2 text-sm font-normal text-[#4C4C4C] transition-transform hover:scale-105 active:scale-95 ${language === 'es' ? 'bg-primary/20' : 'bg-white'}`}>Español</button>
                    </div>
                </div>
            </div>

            <div className="relative mt-16">
                <Image
                    src="/bgInfo.svg"
                    alt="bg image"
                    width={100}
                    height={100}
                    className="w-full h-[400px] xl:h-[600px] object-cover object-top"
                />

                <div className="absolute top-0 md:top-16 left-0 right-0 px-8 py-16 text-center">
                    <h2 className="text-lg font-bold md:text-2xl lg:text-3xl text-primary">
                        {t('hero.introCard.title')}
                    </h2>

                    <div className="relative mt-8 md:mt-14 max-w-[1200px] mx-auto">
                        <div className="w-full h-[200px] md:h-fit">
                            <Image
                                src="/infoBg.svg"
                                alt="bg image"
                                width={100}
                                height={200}
                                className="w-full h-full object-contain md:object-cover object-top"
                            />
                        </div>

                        <span className="absolute top-[6px] left-1/2 z-10 flex h-8 w-8 md:h-12 md:w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#A0A9FF]/50 border-4 md:border-6 md:text-lg border-[#E6E8FF] text-primary font-bold">
                            !
                        </span>

                        <p className="z-10 absolute top-[10px] px-6 md:px-12 py-6 md:py-12 md:text-base lg:text-lg leading-relaxed text-[#1A0053]">
                            {t('hero.introCard.text')}
                        </p>
                    </div>
                </div>
                <span className="h-[100px] bg-linear-to-t from-white to-transparent absolute bottom-0 left-0 right-0" />
            </div>

            <div className="mb-10 md:mb-0 relative top-16 md:-top-20 flex justify-center items-center gap-4 md:gap-6">
                <Link href="#01" className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] px-4 py-3 bg-white font-bold text-2xl md:text-4xl text-primary border border-primary/40 flex items-center justify-center rounded-2xl hover:scale-105 active:scale-95 transition-transform">01</Link>
                <Link href="#02" className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] px-4 py-3 bg-white font-bold text-2xl md:text-4xl text-primary border border-primary/40 flex items-center justify-center rounded-2xl hover:scale-105 active:scale-95 transition-transform">02</Link>
                <Link href="#03" className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] px-4 py-3 bg-white font-bold text-2xl md:text-4xl text-primary border border-primary/40 flex items-center justify-center rounded-2xl hover:scale-105 active:scale-95 transition-transform">03</Link>
                <Link href="#04" className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] px-4 py-3 bg-white font-bold text-2xl md:text-4xl text-primary border border-primary/40 flex items-center justify-center rounded-2xl hover:scale-105 active:scale-95 transition-transform">04</Link>
            </div>
        </section>
    );
}
