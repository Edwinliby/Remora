
import Image from "next/image";
import { ReactNode } from "react";

interface SectionCardProps {
    number: string;
    title: string;
    description: string | string[];
    imageSrc: string;
    imageAlt: string;
    children?: ReactNode;
    className?: string;
    imageClassName?: string;
}

export default function SectionCard({
    number,
    title,
    description,
    imageSrc,
    imageAlt,
    children,
    className = "",
    imageClassName = "",
}: SectionCardProps) {
    return (
        <section id={number} className={`px-6 py-10 max-w-[1200px] mx-auto ${className}`}>
            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-md h-full w-full">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className={`object-contain h-full w-full ${imageClassName}`}
                />
            </div>

            <div className="mb-2 text-5xl font-bold text-rose-300 opacity-50">{number}</div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {title}
            </h2>
            <div className="text-sm md:text-base text-[#3C3C43] whitespace-pre-line leading-relaxed">
                {Array.isArray(description) ? description.map((line, i) => (
                    <p key={i} className="mb-1">{line}</p>
                )) : description}
            </div>

            <div>{children}</div>
        </section>
    );
}
