"use client";

import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FiMapPin, FiPhone, FiFilter, FiSearch } from "react-icons/fi";

// Sample Data with Location Tags
import { SAMPLE_RESOURCES } from "../utils/resourceData";

// Extract unique locations for filter tags
const LOCATIONS = ["All", ...Array.from(new Set(SAMPLE_RESOURCES.map(r => r.location)))];

export default function Resources() {
    const { t } = useLanguage();
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const gridRef = useRef<HTMLDivElement>(null);
    const filterContainerRef = useRef<HTMLDivElement>(null);

    const handleFilterChange = (loc: string) => {
        setSelectedLocation(loc);
        setIsFilterOpen(false);
        // Smooth scroll to results area
        setTimeout(() => {
            const yOffset = -200; // More offset to show header
            const element = gridRef.current;
            if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    // Scroll to filter input when focused (mobile friendly)
    const handleInputFocus = () => {
        setTimeout(() => {
            const element = filterContainerRef.current;
            if (element) {
                // Scroll the filter container into view with some padding
                const yOffset = -100;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 300); // Slight delay for keyboard to pop up
    };

    const filteredResources = selectedLocation === "All"
        ? SAMPLE_RESOURCES
        : SAMPLE_RESOURCES.filter(r => r.location === selectedLocation);

    const filteredLocations = LOCATIONS.filter(loc =>
        loc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-gray-50/30 pt-28 pb-20">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-block p-2.5 rounded-2xl bg-indigo-50 text-[var(--color-primary)] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-3 tracking-tight">
                        {t('navbar.menu.resourceList') || "Local Resources"}
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Connect with trusted services and organizations in your community.
                    </p>
                </div>

                {/* Scalable Filter Dropdown */}
                <div ref={filterContainerRef} className="relative max-w-sm mx-auto mb-12 z-20">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-between px-5 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[var(--color-primary)] hover:shadow-md transition-all group"
                    >
                        <span className="flex items-center gap-3 text-gray-700 font-medium text-base">
                            <div className="p-1.5 rounded-lg bg-indigo-50 text-[var(--color-primary)]">
                                <FiFilter className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col items-start leading-none gap-0.5">
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Filter by Location</span>
                                <span className="text-[var(--color-primary)] font-bold">{selectedLocation}</span>
                            </div>
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isFilterOpen ? "rotate-180 text-[var(--color-primary)]" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isFilterOpen && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl shadow-indigo-100 border border-gray-100 overflow-hidden text-left animate-in fade-in zoom-in-95 duration-200 origin-top z-30">
                            {/* Search Input */}
                            <div className="p-3 border-b border-gray-50">
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search locations..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={handleInputFocus}
                                        onClick={handleInputFocus}
                                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 text-sm text-gray-700 placeholder:text-gray-400 font-medium outline-none transition-all"
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <div className="max-h-[280px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                {filteredLocations.map((loc) => (
                                    <button
                                        key={loc}
                                        onClick={() => handleFilterChange(loc)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 ${selectedLocation === loc
                                                ? "bg-indigo-50 text-[var(--color-primary)]"
                                                : "text-gray-600 hover:bg-gray-50 hover:translate-x-1"
                                            }`}
                                    >
                                        {loc}
                                        {selectedLocation === loc && (
                                            <FiMapPin className="w-4 h-4" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Backdrop to close */}
                    {isFilterOpen && (
                        <div className="fixed inset-0 z-[-1]" onClick={() => setIsFilterOpen(false)}></div>
                    )}
                </div>

                {/* Resource Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-5 scroll-mt-32">
                    {filteredResources.map((resource) => (
                        <div
                            key={resource.id}
                            className="group relative bg-white rounded-3xl p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                        >

                            {/* Card Header & Content */}
                            <div className="flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50/50 text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-wider border border-indigo-50">
                                        {resource.category}
                                    </span>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleFilterChange(resource.location);
                                        }}
                                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50/80 text-gray-500 text-[11px] font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer border border-transparent hover:border-[var(--color-primary)] group/loc"
                                    >
                                        <FiMapPin className="w-3 h-3 group-hover/loc:animate-bounce" />
                                        {resource.location}
                                    </button>
                                </div>

                                <h3 className="text-lg font-bold text-[#1A0053] leading-tight mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                    {resource.name}
                                </h3>

                                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 font-medium line-clamp-3 flex-grow">
                                    {resource.description}
                                </p>

                                {/* Action Footer */}
                                <div className="pt-4 border-t border-gray-50 mt-auto">
                                    {resource.phone ? (
                                        <a
                                            href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                                            className="w-full flex items-center justify-between p-3 rounded-2xl bg-gray-50/50 hover:bg-[var(--color-primary)] group/btn transition-all duration-300 border border-transparent hover:shadow-lg hover:shadow-indigo-500/20"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm group-hover/btn:scale-110 transition-transform">
                                                    <FiPhone className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover/btn:text-indigo-100">Contact</span>
                                                    <span className="text-sm font-bold text-[#1A0053] group-hover/btn:text-white">{resource.phone}</span>
                                                </div>
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-white/0 flex items-center justify-center text-gray-300 group-hover/btn:bg-white/20 group-hover/btn:text-white transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="h-14"></div> // Spacer for alignment if no phone
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredResources.length === 0 && (
                    <div ref={gridRef} className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
                            <FiFilter className="w-8 h-8" />
                        </div>
                        <p className="text-gray-500 font-medium">No resources found for this location.</p>
                        <button
                            onClick={() => handleFilterChange("All")}
                            className="text-[var(--color-primary)] font-bold mt-2 hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}