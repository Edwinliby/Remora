"use client";

import Image from "next/image";
import Accordion from "./components/Accordion";
import SectionCard from "./components/SectionCard";
import ClosingSection from "./components/ClosingSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { useLanguage } from "./context/LanguageContext";

import { sectionData } from "./utils/sectionData";
import AccordionGroup from "./components/AccordionGroup";

export default function Home() {
  const { t } = useLanguage();

  const renderSectionContent = (item: any) => {
    if (item.variant === 'extra-support-card') {
      return (
        <div className="leading-relaxed">
          <div className="border-2 border-[#FFD8D8] rounded-3xl p-6 bg-[#FFF9F9]">
            <p className="font-medium text-[#FF7979] text-xl mb-4">Extra Support</p>

            {item.intro && <p className="text-xs md:text-sm text-[#3C3C43] mb-2">{item.intro}</p>}

            <ul className="list-disc space-y-1 pl-4 text-xs md:text-sm text-[#3C3C43] mb-4">
              {item.listItems && item.listItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
            </ul>

            {item.closing && <p className="text-xs md:text-sm text-[#3C3C43] mb-6">{item.closing}</p>}

            {item.buttonText && (
              <button className="w-full py-3 border border-[#FF7979] text-xs md:text-sm text-[#FF7979] rounded-xl font-medium bg-white hover:bg-[#FF7979] hover:text-white transition-colors">
                {item.buttonText}
              </button>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-2 text-xs md:text-sm text-[#3C3C43] leading-relaxed">
        {item.intro && (Array.isArray(item.intro) ? item.intro.map((line: string, i: number) => <p key={i}>{line}</p>) : <p>{item.intro}</p>)}

        {(item.listTitle || item.listItems) && (
          <div>
            {item.listTitle && <p className="font-medium mb-2">{item.listTitle}</p>}
            {item.listItems && (
              <ul className="list-disc pl-4 space-y-1">
                {item.listItems.map((li: string, i: number) => <li key={i}>{li}</li>)}
              </ul>
            )}
          </div>
        )}

        {(item.secondaryTitle || item.secondaryList) && (
          <div className="mt-4">
            {item.secondaryTitle && <p className="font-medium mb-2">{item.secondaryTitle}</p>}
            {item.secondaryIntro && <p className="mb-2">{item.secondaryIntro}</p>}
            {item.secondaryList && (
              <ul className="list-disc pl-5 space-y-1">
                {item.secondaryList.map((li: string, i: number) => <li key={i}>{li}</li>)}
              </ul>
            )}
          </div>
        )}

        {(item.tertiaryTitle || item.tertiaryList) && (
          <div className="mt-4">
            {item.tertiaryTitle && <p className="font-medium mb-2">{item.tertiaryTitle}</p>}
            {item.tertiaryIntro && <p className="mb-2">{item.tertiaryIntro}</p>}
            {item.tertiaryList && (
              <ul className="list-disc pl-5 space-y-1">
                {item.tertiaryList.map((li: string, i: number) => <li key={i}>{li}</li>)}
              </ul>
            )}
          </div>
        )}

        {(item.quaternaryTitle || item.quaternaryList) && (
          <div className="mt-4">
            {item.quaternaryTitle && <p className="font-medium mb-2">{item.quaternaryTitle}</p>}
            {item.quaternaryList && (
              <ul className="list-disc pl-5 space-y-1">
                {item.quaternaryList.map((li: string, i: number) => <li key={i}>{li}</li>)}
              </ul>
            )}
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
      <Navbar />

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
          <div className="mt-6 space-y-2">
            <AccordionGroup
              items={sectionData.section1.accordion}
              renderContent={(item) => renderSectionContent(item)}
              idPrefix="section-1"
            />
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
            {(sectionData.section2 as any).descriptionClosing && (
              <div>
                {(sectionData.section2 as any).descriptionClosing.map((line: string, i: number) => <p key={i} className="mb-2">{line}</p>)}
              </div>
            )}

            <div className="space-y-2">
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
          <div className="mt-6 space-y-2">
            <AccordionGroup
              items={sectionData.section3.accordion}
              renderContent={(item) => renderSectionContent(item)}
              idPrefix="section-3"
            />
          </div>
        </SectionCard>

        {/* Section 4 - kept as is for now as it wasn't in sectionData */}
        <SectionCard
          number="04"
          title={sectionData.section4.title}
          description={sectionData.section4.description}
          imageSrc="/4.png"
          imageAlt="Support"
        >
          <div className="mt-6 space-y-2">
            <AccordionGroup
              items={sectionData.section4.accordion}
              renderContent={(item) => renderSectionContent(item)}
              idPrefix="section-4"
            />
          </div>
        </SectionCard>
      </main>

      <ClosingSection />
      <Footer />
    </>
  );
}
