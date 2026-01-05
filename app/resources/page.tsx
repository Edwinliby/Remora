"use client";

import { FiFilter, FiX } from "react-icons/fi";

const MOCK_LABELS = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"];

const MOCK_RESOURCES = Array(4).fill({
    name: "Name",
    description: "Description",
    tags: "Tags",
    location: "Location",
});

export default function Resources() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto mt-16 px-4 py-8 space-y-8">

                {/* Filter Section */}
                <div className="bg-white rounded-[32px] border border-[#d6d6ff] p-6 shadow-sm">
                    {/* Filter Button */}
                    <div className="flex justify-center mb-8">
                        <button className="flex items-center gap-2 px-12 py-3 border border-[#d6d6ff] text-[#9b9bff] rounded-xl text-sm font-medium hover:bg-indigo-50 transition-colors bg-white">
                            Filters
                            <FiFilter className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Tags Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {MOCK_LABELS.map((tag, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between px-4 py-3 bg-white border border-[#f0f0f5] rounded-2xl text-gray-500 text-sm"
                            >
                                <span>{tag}</span>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <FiX className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resource List */}
                <div className="space-y-0">
                    {MOCK_RESOURCES.map((item, i) => (
                        <div
                            key={i}
                            className={`py-6 space-y-1 ${i !== MOCK_RESOURCES.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                        >
                            <div className="text-gray-700 font-medium">{item.name}</div>
                            <div className="text-gray-500 text-sm">{item.description}</div>
                            <div className="text-gray-500 text-sm">{item.tags}</div>
                            <div className="text-gray-500 text-sm">{item.location}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}