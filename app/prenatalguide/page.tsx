"use client";

import Link from "next/link";
import SectionCard from "../components/SectionCard";
import ClosingSection from "../components/ClosingSection";
import HeroSection from "../components/HeroSection";
import { useLanguage } from "../context/LanguageContext";

import { sectionData as allSectionData } from "../utils/sectionData";
import AccordionGroup from "../components/AccordionGroup";

export default function Home() {
    const { t, language } = useLanguage();
    const sectionData = allSectionData[language as keyof typeof allSectionData] || allSectionData.en;

    const renderSectionContent = (item: any) => {
        const renderList = (items: any, padding = "pl-4") => {
            if (!items) return null;
            return (
                <ul className={`list-disc ${padding} space-y-1`}>
                    {items.map((li: any, i: number) => (
                        <li key={i}>
                            {typeof li === 'string' ? li : (
                                <Link
                                    href={li.link}
                                    target={li.link.startsWith('http') ? "_blank" : undefined}
                                    rel={li.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="text-[var(--color-primary)] underline hover:text-[var(--color-primary)]/80 transition-colors"
                                >
                                    {li.text}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            );
        };

        return (
            <div className="space-y-2 text-xs md:text-sm text-[#3C3C43] leading-relaxed">
                {item.introlinkText && item.introlink && (
                    <Link
                        href={item.introlink}
                        className="font-bold text-[var(--color-primary)] underline hover:text-[var(--color-primary)]/80 transition-colors block mb-2"
                    >
                        {item.introlinkText}
                    </Link>
                )}

                {item.intro && (Array.isArray(item.intro) ? item.intro.map((line: string, i: number) => <p key={i}>{line}</p>) : item.introLink ? <Link href={item.introLink} className="font-medium mb-2 text-primary underline block hover:text-primary/80 transition-colors">{item.intro}</Link> : <p>{item.intro}</p>)}

                {(item.listTitle || item.listItems) && (
                    <div>
                        {item.listTitle && <p className="font-semibold mb-2">{item.listTitle}</p>}
                        {renderList(item.listItems)}
                    </div>
                )}

                {(item.secondaryIntro || item.secondaryTitle || item.secondaryList) && (
                    <div className="mt-4">
                        {item.secondaryIntro && <p className="mb-2 md:w-3/4">{item.secondaryIntro}</p>}
                        {item.secondaryTitle && <p className="font-semibold mb-2">{item.secondaryTitle}</p>}
                        {renderList(item.secondaryList, "pl-5")}
                    </div>
                )}

                {(item.tertiaryTitle || item.tertiaryList) && (
                    <div className="mt-4">
                        {item.tertiaryTitle && (
                            item.tertiaryLink ? (
                                <Link href={item.tertiaryLink} className="font-semibold mb-2 text-primary underline block hover:text-primary/80 transition-colors">
                                    {item.tertiaryTitle}
                                </Link>
                            ) : (
                                <p className="font-semibold mb-2">{item.tertiaryTitle}</p>
                            )
                        )}
                        {item.tertiaryIntro && <p className="mb-2">{item.tertiaryIntro}</p>}
                        {renderList(item.tertiaryList, "pl-5")}
                    </div>
                )}

                {(item.quaternaryTitle || item.quaternaryList) && (
                    <div className="mt-4">
                        {item.quaternaryTitle && <p className="font-semibold mb-2">{item.quaternaryTitle}</p>}
                        {renderList(item.quaternaryList, "pl-5")}
                    </div>
                )}

                {item.closing && <p className="font-medium whitespace-pre-line mt-4">{Array.isArray(item.closing) ? item.closing.join('\n') : item.closing}</p>}

                {item.subAccordion && (
                    <div className="mt-6">
                        <AccordionGroup
                            items={item.subAccordion.map((sub: any) => ({ ...sub, variant: 'sub' }))}
                            renderContent={(subItem) => renderSectionContent(subItem)}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <main className="pb-10">
                <HeroSection />

                {/* Section 1 */}
                <SectionCard
                    number="01"
                    title={sectionData.section1.title}
                    description={sectionData.section1.description}
                    imageSrc="/1.png"
                    imageAlt="Pregnancy Journey"
                >
                    <div className="leading-relaxed space-y-2 text-sm md:text-base text-[#3C3C43]">
                        {/* Additional Description Items for Section 1 */}
                        {(sectionData.section1 as any).descriptionListItems && (
                            <ul className="list-disc pl-4 space-y-1">
                                {(sectionData.section1 as any).descriptionListItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
                            </ul>
                        )}

                        {(sectionData.section1 as any).descriptionPreClosing && (
                            <div className="mt-2">
                                {(sectionData.section1 as any).descriptionPreClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)}
                            </div>
                        )}

                        {(sectionData.section1 as any).descriptionLinkText && (sectionData.section1 as any).descriptionLink && (
                            <div className="mt-4 mb-2">
                                <Link
                                    href={(sectionData.section1 as any).descriptionLink}
                                    className="font-semibold text-[var(--color-primary)] underline hover:text-[var(--color-primary)]/80 transition-colors"
                                >
                                    {(sectionData.section1 as any).descriptionLinkText}
                                </Link>
                            </div>
                        )}

                        {(sectionData.section1 as any).descriptionClosing && (
                            <div className="mt-2 text-[#3C3C43]">
                                {Array.isArray((sectionData.section1 as any).descriptionClosing)
                                    ? (sectionData.section1 as any).descriptionClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)
                                    : <p>{(sectionData.section1 as any).descriptionClosing}</p>
                                }
                            </div>
                        )}

                        <div className="mt-6 space-y-2">
                            <AccordionGroup
                                items={sectionData.section1.accordion}
                                renderContent={(item) => renderSectionContent(item)}
                                idPrefix="section-1"
                            />
                        </div>
                    </div>
                </SectionCard>

                {/* Section 2 */}
                <SectionCard
                    number="02"
                    title={sectionData.section2.title}
                    description={sectionData.section2.description}
                    imageSrc="/2.png"
                    imageAlt="Prenatal Care"
                >
                    <div className="leading-relaxed space-y-2 text-sm md:text-base text-[#3C3C43]">
                        {/* Extra content for Section 2 specifically */}
                        {(sectionData.section2 as any).descriptionListItems && (
                            <ul className="list-disc pl-4 space-y-1">
                                {(sectionData.section2 as any).descriptionListItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
                            </ul>
                        )}

                        {(sectionData.section2 as any).descriptionPreClosing && (
                            <div className="mt-2">
                                {(sectionData.section2 as any).descriptionPreClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)}
                            </div>
                        )}

                        {(sectionData.section2 as any).descriptionPreClosingListItems && (
                            <ul className="list-disc pl-4 space-y-1">
                                {(sectionData.section2 as any).descriptionPreClosingListItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
                            </ul>
                        )}

                        {(sectionData.section2 as any).descriptionPreClosingClosing && (
                            <div className="mt-2">
                                {(sectionData.section2 as any).descriptionPreClosingClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)}
                            </div>
                        )}

                        {(sectionData.section2 as any).descriptionLinkText && (sectionData.section2 as any).descriptionLink && (
                            <div className="mt-4 mb-2">
                                <Link
                                    href={(sectionData.section2 as any).descriptionLink}
                                    className="font-semibold text-[var(--color-primary)] underline hover:text-[var(--color-primary)]/80 transition-colors"
                                >
                                    {(sectionData.section2 as any).descriptionLinkText}
                                </Link>
                            </div>
                        )}

                        {(sectionData.section2 as any).descriptionClosing && (
                            <div className="mt-2">
                                {(sectionData.section2 as any).descriptionClosing.map((line: string, i: number) => <p key={i} className="mb-2">{line}</p>)}
                            </div>
                        )}

                        <div className="space-y-2 mt-6">
                            <AccordionGroup
                                items={sectionData.section2.accordion}
                                renderContent={(item) => renderSectionContent(item)}
                                idPrefix="section-2"
                            />
                        </div>
                    </div>
                </SectionCard>

                {/* Section 3 */}
                <SectionCard
                    number="03"
                    title={sectionData.section3.title}
                    description={sectionData.section3.description}
                    imageSrc="/3.png"
                    imageAlt="Postnatal Care"
                >
                    <div className="leading-relaxed space-y-2 text-sm md:text-base text-[#3C3C43]">
                        {/* Extra content for Section 3 */}
                        {(sectionData.section3 as any).descriptionListItems && (
                            <ul className="list-disc pl-4 space-y-1">
                                {(sectionData.section3 as any).descriptionListItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
                            </ul>
                        )}

                        {(sectionData.section3 as any).descriptionPreClosing && (
                            <div className="mt-2 text-[#3C3C43]">
                                {Array.isArray((sectionData.section3 as any).descriptionPreClosing)
                                    ? (sectionData.section3 as any).descriptionPreClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)
                                    : <p>{(sectionData.section3 as any).descriptionPreClosing}</p>
                                }
                            </div>
                        )}

                        {(sectionData.section3 as any).descriptionLinkText && (sectionData.section3 as any).descriptionLink && (
                            <div className="mt-4 mb-2">
                                <Link
                                    href={(sectionData.section3 as any).descriptionLink}
                                    className="font-semibold text-[var(--color-primary)] underline hover:text-[var(--color-primary)]/80 transition-colors"
                                >
                                    {(sectionData.section3 as any).descriptionLinkText}
                                </Link>
                            </div>
                        )}

                        {(sectionData.section3 as any).descriptionClosing && (
                            <div className="mt-2 text-[#3C3C43]">
                                {Array.isArray((sectionData.section3 as any).descriptionClosing)
                                    ? (sectionData.section3 as any).descriptionClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)
                                    : <p>{(sectionData.section3 as any).descriptionClosing}</p>
                                }
                            </div>
                        )}

                        <div className="mt-6 space-y-2">
                            <AccordionGroup
                                items={sectionData.section3.accordion}
                                renderContent={(item) => renderSectionContent(item)}
                                idPrefix="section-3"
                            />
                        </div>
                    </div>
                </SectionCard>

                {/* Section 4 */}
                <SectionCard
                    number="04"
                    title={sectionData.section4.title}
                    description={sectionData.section4.description}
                    imageSrc="/4.png"
                    imageAlt="Support"
                >
                    <div className="leading-relaxed space-y-2 text-sm md:text-base text-[#3C3C43]">
                        {/* Extra content for Section 4 */}
                        {(sectionData.section4 as any).descriptionListItems && (
                            <ul className="list-disc pl-4 space-y-1">
                                {(sectionData.section4 as any).descriptionListItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
                            </ul>
                        )}

                        {(sectionData.section4 as any).descriptionPreClosing && (
                            <div className="mt-2 text-[#3C3C43]">
                                {Array.isArray((sectionData.section4 as any).descriptionPreClosing)
                                    ? (sectionData.section4 as any).descriptionPreClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)
                                    : <p>{(sectionData.section4 as any).descriptionPreClosing}</p>
                                }
                            </div>
                        )}

                        {(sectionData.section4 as any).descriptionLinkText && (sectionData.section4 as any).descriptionLink && (
                            <div className="mt-4 mb-2">
                                <Link
                                    href={(sectionData.section4 as any).descriptionLink}
                                    className="font-semibold text-[var(--color-primary)] underline hover:text-[var(--color-primary)]/80 transition-colors"
                                >
                                    {(sectionData.section4 as any).descriptionLinkText}
                                </Link>
                            </div>
                        )}

                        {(sectionData.section4 as any).descriptionClosing && (
                            <div className="mt-2 text-[#3C3C43]">
                                {Array.isArray((sectionData.section4 as any).descriptionClosing)
                                    ? (sectionData.section4 as any).descriptionClosing.map((line: string, i: number) => <p key={i} className="mb-1">{line}</p>)
                                    : <p>{(sectionData.section4 as any).descriptionClosing}</p>
                                }
                            </div>
                        )}

                        <div className="mt-6 space-y-2">
                            <AccordionGroup
                                items={sectionData.section4.accordion}
                                renderContent={(item) => renderSectionContent(item)}
                                idPrefix="section-4"
                            />
                        </div>
                    </div>
                </SectionCard>

                <ClosingSection />
            </main>
        </>
    );
}