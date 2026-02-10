// ... (imports remain the same)
import { useState } from "react";
import { FileText, MapPin, Calendar, Globe, ArrowRight, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface QuickAccessCardsProps {
    className?: string;
    onBookClick?: () => void;
    onTrackClick?: () => void;
    onSearchClick?: () => void;
    onCheckClick?: () => void;
}

export default function QuickAccessCards({
    className,
    onBookClick,
    onTrackClick,
    onSearchClick,
    onCheckClick
}: QuickAccessCardsProps) {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const navigate = useNavigate();

    const cards = [
        {
            id: "book",
            icon: FileText,
            title: "Book & Quote",
            description: "Fly your shipment with us anytime, anywhere",
            expandedContent: (
                <div className="w-full text-left space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-white font-bold">D</div>
                        <span className="font-bold text-lg text-primary">Digital Lounge</span>
                    </div>
                    <p className="text-sm text-gray-600">Log in/Register to Digital Lounge</p>
                    <div className="pt-2">
                        <button
                            onClick={(e) => { e.stopPropagation(); onBookClick?.(); }}
                            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            Log in
                        </button>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Not yet a Digital Lounge member? <a href="#" className="underline font-semibold text-primary">Join Now</a>
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "track",
            icon: MapPin,
            title: "Track your Shipment",
            description: "Retrieve your shipment status",
            expandedContent: (
                <div className="w-full text-left space-y-4 animate-in fade-in duration-300">
                    <h4 className="font-medium text-primary mb-2">Track your Shipment</h4>
                    <div className="flex gap-4 text-sm font-medium text-primary">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="trackType" defaultChecked className="accent-primary" />
                            MAWB
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="trackType" className="accent-primary" />
                            CN
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Prefix" defaultValue="157" className="w-16 px-3 py-2 border rounded-lg text-center bg-gray-50 focus:outline-none focus:border-primary text-xs" />
                        <input type="text" placeholder="Enter your AWB number(s)" className="flex-1 px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:border-primary text-xs" />
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); onTrackClick?.(); }}
                        className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        Track
                    </button>
                </div>
            )
        },
        {
            id: "schedule",
            icon: Calendar,
            title: "Search Flight Schedule",
            description: "Our flights at a glance",
            expandedContent: (
                <div className="w-full text-left space-y-4 animate-in fade-in duration-300">
                    <h4 className="font-medium text-primary mb-2">Search Flight Schedule</h4>
                    <div className="flex items-center gap-2 border rounded-lg p-1 bg-gray-50">
                        <input type="text" placeholder="Origin" className="w-full px-3 py-2 bg-transparent text-xs focus:outline-none" />
                        <ArrowLeftRight className="h-4 w-4 text-gray-400" />
                        <input type="text" placeholder="Destination" className="w-full px-3 py-2 bg-transparent text-xs focus:outline-none" />
                    </div>
                    <div className="border rounded-lg p-1 bg-gray-50">
                        <label className="text-xs text-gray-500 px-3">Departure Date</label>
                        <input type="date" className="w-full px-3 py-1 bg-transparent text-sm focus:outline-none" />
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onSearchClick) onSearchClick();
                            else navigate("/schedule");
                        }}
                        className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        Search
                    </button>
                </div>
            )
        },
        {
            id: "stations",
            icon: Globe,
            title: "Station Capabilities",
            description: "Learn more about our stations worldwide",
            expandedContent: (
                <div className="w-full text-left space-y-4 animate-in fade-in duration-300">
                    <h4 className="font-medium text-primary mb-2">Station Capabilities</h4>
                    <input type="text" placeholder="City or Airport" className="w-full px-3 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:border-primary text-xs" />
                    <div className="relative">
                        <select className="w-full px-3 py-2 border rounded-lg bg-gray-50 appearance-none focus:outline-none focus:border-primary text-gray-500 text-xs">
                            <option>Select Product</option>
                            <option>Pharma</option>
                            <option>Fresh</option>
                            <option>Courier</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ArrowRight className="h-4 w-4 text-gray-400 rotate-90" />
                        </div>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); onCheckClick?.(); }}
                        className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        Check
                    </button>
                </div>
            )
        },
    ];

    return (
        <div className={cn("px-4 lg:px-8 relative z-20 mx-auto w-full max-w-[94%]", className || "-mt-[130px] mb-8")}>
            <div className="grid grid-cols-1 lg:grid-cols-4 bg-white rounded-xl shadow-xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-gray-100 min-h-[260px]">
                {cards.map((card) => {
                    const isHovered = hoveredCard === card.id;

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={cn(
                                "relative p-4 flex flex-col items-center text-center cursor-pointer h-full min-h-[260px]",
                                isHovered ? "bg-white" : "hover:bg-gray-50"
                            )}
                        >
                            {/* Static Content Container - NO resizing behavior */}
                            <div className="w-full h-full flex flex-col items-center justify-center relative min-h-[180px]">
                                {/* Default Content - Fades out but doesn't move or scale */}
                                <div className={cn(
                                    "flex flex-col items-center transition-opacity duration-300 absolute inset-0 justify-center p-6",
                                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}>
                                    <div className="mb-4 text-primary">
                                        <card.icon strokeWidth={1} className="h-12 w-12" />
                                    </div>
                                    <h3 className="text-lg font-light text-primary mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-light max-w-[200px]">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Expanded Content - Fades in strictly on top */}
                                <div className={cn(
                                    "w-full h-full flex flex-col justify-center transition-opacity duration-300",
                                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
                                )}>
                                    {isHovered && card.expandedContent}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
