"use client";

import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FiMapPin, FiPhone, FiSearch, FiMail, FiTag, FiFilter, FiGlobe } from "react-icons/fi";

import { resourceData } from "../utils/resourceData";

export default function Resources() {
    const { t, language } = useLanguage();
    const rawResources = resourceData[language] || resourceData['en'];
    const SAMPLE_RESOURCES = rawResources.map((r, index) => ({
        ...r,
        id: `res-${index}`,
        location: r.city,
    }));

    // Extract unique locations and categories for filter tags
    const LOCATIONS = ["All", ...Array.from(new Set(SAMPLE_RESOURCES.map(r => r.location)))];
    const CATEGORIES = ["All", ...Array.from(new Set(SAMPLE_RESOURCES.map(r => r.category)))];

    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const gridRef = useRef<HTMLDivElement>(null);
    const filterContainerRef = useRef<HTMLDivElement>(null);
    const categoryFilterContainerRef = useRef<HTMLDivElement>(null);

    // Smooth scroll helper
    const smoothScrollToGrid = () => {
        setTimeout(() => {
            const yOffset = -200; // More offset to show header
            const element = gridRef.current;
            if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    const handleFilterChange = (loc: string) => {
        setSelectedLocation(loc);
        setIsFilterOpen(false);
        smoothScrollToGrid();
    };

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        setIsCategoryFilterOpen(false);
        smoothScrollToGrid();
    };

    const handleTagChange = (tag: string) => {
        setSelectedTag(tag === selectedTag ? "All" : tag);
        smoothScrollToGrid();
    };

    // Scroll to filter input when focused (mobile friendly)


    const filteredResources = SAMPLE_RESOURCES.filter(r => {
        const matchLocation = selectedLocation === "All" || r.location === selectedLocation;
        const matchCategory = selectedCategory === "All" || r.category === selectedCategory;
        const matchTag = selectedTag === "All" || (r.tags && r.tags.includes(selectedTag));
        return matchLocation && matchCategory && matchTag;
    }).sort((a, b) => a.name.localeCompare(b.name));

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
                        {t('resourcesPage.subtitle')}
                    </p>
                </div>

                {/* Unified Filter Bar */}
                <div className="sticky top-22 z-40 max-w-2xl mx-auto mb-8 md:mb-12">
                    <div className="flex flex-row bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative z-20">

                        {/* Location Section */}
                        <div ref={filterContainerRef} className="flex-1 relative">
                            <button
                                onClick={() => {
                                    setIsFilterOpen(!isFilterOpen);
                                    setIsCategoryFilterOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-3 md:px-6 md:py-4 rounded-l-2xl transition-colors ${isFilterOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                            >
                                <div className="text-left overflow-hidden">
                                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">{t('resourcesPage.filter.location')}</span>
                                    <span className={`font-bold text-sm md:text-base truncate block max-w-[100px] md:max-w-[200px] ${selectedLocation === "All" ? "text-gray-700" : "text-[var(--color-primary)]"}`}>
                                        {selectedLocation === "All" ? "All" : selectedLocation}
                                    </span>
                                </div>
                                <div className="hidden md:block p-2 rounded-full bg-gray-50 text-gray-400">
                                    <FiMapPin className="w-4 h-4" />
                                </div>
                            </button>

                            {/* Location Dropdown */}
                            {isFilterOpen && (
                                <div className="absolute top-full left-0 w-[calc(100vw-2rem)] md:w-[320px] max-w-[350px] mt-4 bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-left z-50 p-2">
                                    <div className="p-2 border-b border-gray-50 mb-2">
                                        <div className="relative">
                                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="text"
                                                placeholder={t('resourcesPage.filter.search')}
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[var(--color-primary)]/10 text-sm font-medium"
                                                autoFocus
                                            />
                                        </div>
                                    </div>
                                    <div className="max-h-[280px] overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-gray-200">
                                        {filteredLocations.map((loc) => (
                                            <button
                                                key={loc}
                                                onClick={() => handleFilterChange(loc)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-bold transition-all ${selectedLocation === loc
                                                    ? "bg-indigo-50 text-[var(--color-primary)]"
                                                    : "text-gray-600 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {loc}
                                                {selectedLocation === loc && <FiMapPin className="w-4 h-4" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="w-px bg-gray-200 my-2"></div>

                        {/* Category Section */}
                        <div ref={categoryFilterContainerRef} className="flex-1 relative">
                            <button
                                onClick={() => {
                                    setIsCategoryFilterOpen(!isCategoryFilterOpen);
                                    setIsFilterOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-3 md:px-6 md:py-4 rounded-r-2xl transition-colors ${isCategoryFilterOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                            >
                                <div className="text-left overflow-hidden">
                                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">{t('resourcesPage.filter.category')}</span>
                                    <span className={`font-bold text-sm md:text-base truncate block max-w-[100px] md:max-w-[200px] ${selectedCategory === "All" ? "text-gray-700" : "text-[var(--color-primary)]"}`}>
                                        {selectedCategory === "All" ? "All" : selectedCategory}
                                    </span>
                                </div>
                                <div className="hidden md:block p-2 rounded-full bg-gray-50 text-gray-400">
                                    <FiTag className="w-4 h-4" />
                                </div>
                            </button>

                            {/* Category Dropdown */}
                            {isCategoryFilterOpen && (
                                <div className="absolute top-full right-0 w-[calc(100vw-2rem)] md:w-[320px] max-w-[350px] mt-4 bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right z-50 p-2">
                                    <div className="max-h-[280px] overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-gray-200">
                                        {CATEGORIES.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => handleCategoryChange(cat)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-bold transition-all ${selectedCategory === cat
                                                    ? "bg-indigo-50 text-[var(--color-primary)]"
                                                    : "text-gray-600 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {cat}
                                                {selectedCategory === cat && <FiTag className="w-4 h-4" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Backdrop */}
                    {(isFilterOpen || isCategoryFilterOpen) && (
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => {
                                setIsFilterOpen(false);
                                setIsCategoryFilterOpen(false);
                            }}
                        />
                    )}
                </div>

                {/* Resource Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-5 scroll-mt-32">
                    {/* Active Tag Filter Indicator */}
                    {selectedTag !== "All" && (
                        <div className="md:col-span-2 mb-2 flex items-center justify-between bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
                            <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                <FiTag className="text-[var(--color-primary)]" />
                                {t('resourcesPage.filter.filteringByTag')} <span className="font-bold text-[var(--color-primary)]">{selectedTag}</span>
                            </span>
                            <button
                                onClick={() => handleTagChange("All")}
                                className="text-xs font-bold text-gray-400 hover:text-gray-600 hover:underline"
                            >
                                {t('resourcesPage.filter.clearTag')}
                            </button>
                        </div>
                    )}

                    {filteredResources.map((resource) => (
                        <div
                            key={resource.id}
                            className="group relative bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100/50 transition-all duration-300 flex flex-col h-full"
                        >

                            {/* Card Header & Content */}
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg ${resource.category ? "bg-indigo-50/80" : ""} text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-wider`}>
                                        {resource.category}
                                    </span>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleFilterChange(resource.location);
                                        }}
                                        className="flex items-center gap-1.5 text-gray-400 text-[11px] font-bold hover:text-[var(--color-primary)] transition-colors group/loc"
                                    >
                                        <FiMapPin className="w-3.5 h-3.5" />
                                        {resource.location}
                                    </button>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                    {resource.name}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-4 font-medium line-clamp-3">
                                    {resource.description}
                                </p>

                                {/* Tags */}
                                {resource.tags && resource.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {resource.tags.map(tag => (
                                            <button
                                                key={tag}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleTagChange(tag);
                                                }}
                                                className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all border ${selectedTag === tag
                                                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm"
                                                    : "bg-gray-50 text-gray-500 border-gray-100 hover:border-indigo-200 hover:text-[var(--color-primary)]"
                                                    }`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Action Footer */}
                                <div className="pt-4 border-t border-gray-50 mt-auto flex flex-col gap-2.5">
                                    {resource.phone && (
                                        <a
                                            href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                                            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gray-50 hover:bg-[var(--color-primary)] group/btn transition-all duration-300 border border-transparent"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm group-hover/btn:scale-110 transition-transform">
                                                    <FiPhone className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover/btn:text-indigo-200">{t('resourcesPage.actions.call')}</span>
                                                    <span className="text-sm font-bold text-gray-900 group-hover/btn:text-white">{resource.phone}</span>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-gray-400 group-hover/btn:bg-white/20 group-hover/btn:text-white transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </div>
                                        </a>
                                    )}

                                    {resource.phone2 && (
                                        <a
                                            href={`tel:${resource.phone2.replace(/[^0-9]/g, '')}`}
                                            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gray-50 hover:bg-[var(--color-primary)] group/btn transition-all duration-300 border border-transparent"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm group-hover/btn:scale-110 transition-transform">
                                                    <FiPhone className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover/btn:text-indigo-200">{t('resourcesPage.actions.altPhone')}</span>
                                                    <span className="text-sm font-bold text-gray-900 group-hover/btn:text-white">{resource.phone2}</span>
                                                </div>
                                            </div>
                                        </a>
                                    )}

                                    {resource.email && (
                                        <a
                                            href={`mailto:${resource.email}`}
                                            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gray-50 hover:bg-[var(--color-primary)] group/btn transition-all duration-300 border border-transparent"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm group-hover/btn:scale-110 transition-transform">
                                                    <FiMail className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover/btn:text-indigo-200">{t('resourcesPage.actions.email')}</span>
                                                    <span className="text-sm font-bold text-gray-900 group-hover/btn:text-white truncate max-w-[180px]">{resource.email}</span>
                                                </div>
                                            </div>
                                        </a>
                                    )}

                                    {resource.website && (
                                        <a
                                            href={resource.website.startsWith('http') ? resource.website : `https://${resource.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gray-50 hover:bg-[var(--color-primary)] group/btn transition-all duration-300 border border-transparent"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm group-hover/btn:scale-110 transition-transform">
                                                    <FiGlobe className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover/btn:text-indigo-200">{t('resourcesPage.actions.website')}</span>
                                                    <span className="text-sm font-bold text-gray-900 group-hover/btn:text-white truncate max-w-[180px]">{resource.website}</span>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-gray-400 group-hover/btn:bg-white/20 group-hover/btn:text-white transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                            </div>
                                        </a>
                                    )}

                                    {!resource.phone && !resource.phone2 && !resource.email && !resource.website && (
                                        <div className="h-12"></div>
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
                        <p className="text-gray-500 font-medium">{t('resourcesPage.filter.noResults')}</p>
                        <button
                            onClick={() => {
                                handleFilterChange("All");
                                handleCategoryChange("All");
                                handleTagChange("All");
                            }}
                            className="text-[var(--color-primary)] font-bold mt-2 hover:underline"
                        >
                            {t('resourcesPage.filter.clearFilters')}
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}