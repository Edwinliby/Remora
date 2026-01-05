"use client";

import { useState, useRef, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  id?: string;
}

export default function Accordion({ title, subtitle, children, isOpen, onToggle, id, variant }: AccordionProps & { variant?: string }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = isOpen !== undefined;
  const active = isControlled ? isOpen : internalIsOpen;

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  useEffect(() => {
    if (active && containerRef.current) {
      // Use a timeout to allow the closing animation of the previous item to (mostly) finish,
      // preventing the newly opened item from moving up and out of view after scrolling.
      const timer = setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <div id={id} ref={containerRef} className="border-b border-primary last:border-0 scroll-mt-32">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-primary transition-colors hover:text-primary focus:outline-none"
        onClick={handleToggle}
      >
        <div className="flex flex-col">
          <span className="text-base md:text-lg text-primary mb-2">{title}</span>
          {subtitle && <span className="text-xs md:text-sm text-gray-800 font-normal mt-1">{subtitle}</span>}
        </div>
        <span
          className={`transform transition-transform duration-300 flex items-center justify-center ${variant === 'sub' ? 'w-auto h-auto' : 'w-8 h-8 bg-primary/10 rounded-full'} ${active ? "rotate-180" : ""}`}
        >
          {variant === 'sub' ? (
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1Z" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <TiArrowSortedDown size={20} color="var(--color-primary)" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${active ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="pb-4 text-sm md:text-base text-gray-800">{children}</div>
      </div>
    </div>
  );
}
