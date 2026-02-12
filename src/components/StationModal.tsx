import { useState } from "react";
import { X, Globe, ArrowRight, Search } from "lucide-react";

interface StationModalProps {
    open: boolean;
    onClose: () => void;
}

export default function StationModal({ open, onClose }: StationModalProps) {
    const [searched, setSearched] = useState(false);

    if (!open) return null;

    const handleCheck = () => {
        setSearched(true);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="gradient-primary p-6 text-primary-foreground relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-6 w-6" />
                        <h2 className="text-xl font-bold">Station Capabilities</h2>
                    </div>
                    <p className="text-sm text-white/80">Check our capabilities worldwide</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                City or Airport
                            </label>
                            <input
                                type="text"
                                placeholder="Enter City or Airport Code"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                Product Type
                            </label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-600 text-sm transition-all cursor-pointer">
                                    <option>Select Product</option>
                                    <option>Pharma</option>
                                    <option>Fresh</option>
                                    <option>Courier</option>
                                    <option>General Cargo</option>
                                    <option>Dangerous Goods</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <ArrowRight className="h-4 w-4 text-gray-400 rotate-90" />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCheck}
                            className="w-full py-3.5 mt-2 rounded-lg gradient-gold text-white font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                        >
                            <Search className="h-4 w-4" /> Check Capabilities
                        </button>
                    </div>

                    {searched && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center border border-gray-100 animate-in fade-in slide-in-from-bottom-2">
                            <Globe className="h-8 w-8 mx-auto mb-2 text-primary/40" />
                            <p className="text-sm font-medium text-gray-900">Capabilities Found</p>
                            <p className="text-xs text-gray-500 mt-1">
                                We have full handling capabilities for the selected product at this station.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
