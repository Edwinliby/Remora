import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function ClosingSection() {
    const { t } = useLanguage();

    return (
        <div className="relative w-full py-16 md:py-24 mt-12 mb-28">
            <div className="absolute top-0 md:-top-12 left-0 w-full h-[500px] overflow-hidden -z-1">
                <Image
                    src="/footerBg.svg"
                    alt="Background"
                    width={100}
                    height={100}
                    className="object-contain object-top w-full h-[500px]"
                />
            </div>

            <div className="absolute top-10 left-10 w-16 h-16 md:w-24 md:h-24 opacity-80 animate-pulse">
                <Image src="/petal.png" alt="petal" fill className="object-contain" />
            </div>
            <div className="absolute top-8 right-16 w-10 h-10 md:w-14 md:h-14 opacity-60">
                <Image src="/petal.png" alt="petal" fill className="object-contain rotate-45" />
            </div>
            <div className="absolute bottom-10 left-20 w-12 h-12 md:w-16 md:h-16 opacity-70">
                <Image src="/petal.png" alt="petal" fill className="object-contain -rotate-12" />
            </div>
            <div className="absolute top-1/2 right-10 w-16 h-16 md:w-20 md:h-20 opacity-90">
                <Image src="/petal.png" alt="petal" fill className="object-contain rotate-90" />
            </div>
            <div className="absolute bottom-12 right-1/3 w-14 h-14 md:w-20 md:h-20 opacity-60 blur-sm">
                <Image src="/petal.png" alt="petal" fill className="object-contain rotate-180" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center px-6 flex flex-col gap-2">
                <p className="text-primary text-2xl md:text-4xl font-serif">{t('closing.notAlone')}</p>
                <p className="text-sm md:text-lg text-[#002853] font-medium leading-relaxed">
                    {t('closing.supportAvailable')}<br />
                    {t('closing.comeBack')}
                </p>
                <p className="text-sm md:text-lg text-[#002853] font-medium">
                    {t('closing.wishYouBest')}
                </p>
            </div>
        </div>
    );
}