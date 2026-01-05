"use client";

import { useState, useEffect } from "react";
import Accordion from "./Accordion";

interface AccordionGroupProps {
    items: any[];
    renderContent: (item: any) => React.ReactNode;
    idPrefix?: string;
}

export default function AccordionGroup({ items, renderContent, idPrefix }: AccordionGroupProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!idPrefix) return;

        const handleHashChange = () => {
            const hash = window.location.hash.slice(1); // remove '#'
            const prefixWithDash = idPrefix + '-';

            if (hash && hash.startsWith(prefixWithDash)) {
                // e.g. section-1-2 -> "2"
                const indexStr = hash.replace(prefixWithDash, '');
                const index = parseInt(indexStr, 10);

                if (!isNaN(index) && index >= 0 && index < items.length) {
                    setOpenIndex(index);
                }
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [idPrefix, items.length]);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-0">
            {items.map((item, index) => (
                <Accordion
                    key={index}
                    id={idPrefix ? `${idPrefix}-${index}` : undefined}
                    title={item.title}
                    subtitle={item.subtitle}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                    variant={item.variant}
                >
                    {renderContent(item)}
                </Accordion>
            ))}
        </div>
    );
}
