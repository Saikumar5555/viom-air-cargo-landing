import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import TrackShipmentModal from "@/components/TrackShipmentModal";
import SignInModal from "@/components/SignInModal";
import RegisterModal from "@/components/RegisterModal";
import QuickAccessCards from "@/components/QuickAccessCards";
import { toast } from "sonner";
import { Plane, PlaneTakeoff, PlaneLanding, Calendar, Info, FileText, MapPin, Globe, ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const airports = [
    { city: "Dubai", code: "DXB", country: "U.A.E" },
    { city: "Doha", code: "DOH", country: "Qatar" },
    { city: "Singapore", code: "SIN", country: "Singapore" },
    { city: "Bangkok", code: "BKK", country: "Thailand" },
    { city: "Mumbai", code: "BOM", country: "India" },
    { city: "New Delhi", code: "DEL", country: "India" },
    { city: "New York", code: "JFK", country: "USA" },
    { city: "Chicago", code: "ORD", country: "USA" },
    { city: "Nairobi", code: "NBO", country: "Kenya (Africa)" },
    { city: "Johannesburg", code: "JNB", country: "South Africa" },
    { city: "Kuala Lumpur", code: "KUL", country: "Malaysia" },
];

export default function Schedule() {
    const [scheduleType, setScheduleType] = useState<"specific" | "weekly">("specific");

    // Modal states
    const [bookingOpen, setBookingOpen] = useState(false);
    const [trackOpen, setTrackOpen] = useState(false);
    const [signInOpen, setSignInOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Search state
    const [originSearchOpen, setOriginSearchOpen] = useState(false);
    const [destSearchOpen, setDestSearchOpen] = useState(false);
    const [origin, setOrigin] = useState<typeof airports[0] | null>(null);
    const [destination, setDestination] = useState<typeof airports[0] | null>(null);
    const [originQuery, setOriginQuery] = useState("");
    const [destQuery, setDestQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const originRef = useRef<HTMLDivElement>(null);
    const destRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (originRef.current && !originRef.current.contains(event.target as Node)) {
                setOriginSearchOpen(false);
            }
            if (destRef.current && !destRef.current.contains(event.target as Node)) {
                setDestSearchOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredOriginAirports = airports.filter(a =>
        a.city.toLowerCase().includes(originQuery.toLowerCase()) ||
        a.code.toLowerCase().includes(originQuery.toLowerCase())
    );

    const filteredDestAirports = airports.filter(a =>
        a.city.toLowerCase().includes(destQuery.toLowerCase()) ||
        a.code.toLowerCase().includes(destQuery.toLowerCase())
    );

    const handleBookNowClick = () => {
        if (isAuthenticated) {
            setBookingOpen(true);
        } else {
            setSignInOpen(true);
        }
    };

    const handleSignInSuccess = () => {
        setIsAuthenticated(true);
        setSignInOpen(false);
        toast.success("Successfully signed in!");
        setBookingOpen(true);
    };

    const handleRegisterSuccess = () => {
        setRegisterOpen(false);
        toast.success("Registration successful! Please sign in.");
        setSignInOpen(true);
    };

    const handleSearch = () => {
        if (!origin || !destination) {
            toast.error("Please select both origin and destination");
            return;
        }
        setIsSearching(true);
        const promise = new Promise((resolve) => setTimeout(resolve, 1500));
        toast.promise(promise, {
            loading: `Searching flights from ${origin.city} to ${destination.city}...`,
            success: () => {
                setIsSearching(false);
                return "Found 3 flights matching your criteria!";
            },
            error: "Error searching flights",
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onSignInClick={() => setSignInOpen(true)} />

            <main className="pt-32 pb-20">
                <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-light text-primary mb-12 tracking-tight">
                        Schedule & Routing
                    </h1>

                    {/* Search Form Container */}
                    <div className="bg-white rounded-2xl shadow-xl mb-12 border border-gray-100 flex flex-col lg:flex-row relative z-30">
                        {/* Origin & Destination (Maroon Background) */}
                        <div className="lg:w-1/2 bg-primary p-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/20 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                            {/* Origin */}
                            <div ref={originRef} className="flex-1 p-8 relative flex flex-col justify-center cursor-pointer" onClick={() => setOriginSearchOpen(!originSearchOpen)}>
                                <label className="text-[10px] uppercase tracking-wider text-white/60 mb-2 font-medium block text-center">Origin</label>
                                <div className="flex items-center justify-between group">
                                    <PlaneTakeoff className="text-white/80 h-6 w-6" />
                                    <div className="text-center flex-1">
                                        <div className="text-white text-3xl font-light">{origin?.city || "--"}</div>
                                        <div className="text-white/40 text-[10px]">{origin?.code || "---"}</div>
                                    </div>
                                    <ChevronDown className={cn("text-white/60 h-5 w-5 transition-transform", originSearchOpen && "rotate-180")} />
                                </div>

                                {/* Origin Search Results */}
                                {originSearchOpen && (
                                    <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="p-4 border-b">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    autoFocus
                                                    placeholder="Airport of origin"
                                                    className="w-full pl-4 pr-10 py-2 border rounded-full text-sm focus:outline-none focus:border-primary"
                                                    value={originQuery}
                                                    onChange={(e) => setOriginQuery(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                {originQuery && <X className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" onClick={(e) => { e.stopPropagation(); setOriginQuery(""); }} />}
                                            </div>
                                        </div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {filteredOriginAirports.map((a) => (
                                                <div
                                                    key={a.code}
                                                    className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center group"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOrigin(a);
                                                        setOriginSearchOpen(false);
                                                    }}
                                                >
                                                    <div>
                                                        <div className="text-sm font-medium text-primary group-hover:text-primary">{a.city}</div>
                                                        <div className="text-[10px] text-gray-500">{a.country}</div>
                                                    </div>
                                                    <div className="text-xs font-bold text-gray-400">{a.code}</div>
                                                </div>
                                            ))}
                                            {filteredOriginAirports.length === 0 && (
                                                <div className="p-8 text-center text-gray-400 text-sm italic">No airports found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Destination */}
                            <div ref={destRef} className="flex-1 p-8 relative flex flex-col justify-center cursor-pointer" onClick={() => setDestSearchOpen(!destSearchOpen)}>
                                <label className="text-[10px] uppercase tracking-wider text-white/60 mb-2 font-medium block text-center">Destination</label>
                                <div className="flex items-center justify-between group">
                                    <PlaneLanding className="text-white/80 h-6 w-6" />
                                    <div className="text-center flex-1">
                                        <div className="text-white text-3xl font-light">{destination?.city || "--"}</div>
                                        <div className="text-white/40 text-[10px]">{destination?.code || "---"}</div>
                                    </div>
                                    <ChevronDown className={cn("text-white/60 h-5 w-5 transition-transform", destSearchOpen && "rotate-180")} />
                                </div>

                                {/* Destination Search Results */}
                                {destSearchOpen && (
                                    <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="p-4 border-b">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    autoFocus
                                                    placeholder="Airport of destination"
                                                    className="w-full pl-4 pr-10 py-2 border rounded-full text-sm focus:outline-none focus:border-primary"
                                                    value={destQuery}
                                                    onChange={(e) => setDestQuery(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                {destQuery && <X className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" onClick={(e) => { e.stopPropagation(); setDestQuery(""); }} />}
                                            </div>
                                        </div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {filteredDestAirports.map((a) => (
                                                <div
                                                    key={a.code}
                                                    className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex justify-between items-center group"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDestination(a);
                                                        setDestSearchOpen(false);
                                                    }}
                                                >
                                                    <div>
                                                        <div className="text-sm font-medium text-primary group-hover:text-primary">{a.city}</div>
                                                        <div className="text-[10px] text-gray-500">{a.country}</div>
                                                    </div>
                                                    <div className="text-xs font-bold text-gray-400">{a.code}</div>
                                                </div>
                                            ))}
                                            {filteredDestAirports.length === 0 && (
                                                <div className="p-8 text-center text-gray-400 text-sm italic">No airports found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Date & Search (White/Light Grey Background) */}
                        <div className="lg:w-1/2 bg-[#f8f9fa] p-8 flex flex-col justify-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none z-10">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Radios */}
                                <div className="flex items-center gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                            scheduleType === "specific" ? "border-primary" : "border-gray-300"
                                        )}>
                                            {scheduleType === "specific" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                        </div>
                                        <input
                                            type="radio"
                                            className="hidden"
                                            checked={scheduleType === "specific"}
                                            onChange={() => setScheduleType("specific")}
                                        />
                                        <span className={cn("text-sm transition-colors", scheduleType === "specific" ? "text-primary font-medium" : "text-gray-500")}>Specific Date</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                            scheduleType === "weekly" ? "border-primary" : "border-gray-300"
                                        )}>
                                            {scheduleType === "weekly" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                        </div>
                                        <input
                                            type="radio"
                                            className="hidden"
                                            checked={scheduleType === "weekly"}
                                            onChange={() => setScheduleType("weekly")}
                                        />
                                        <span className={cn("text-sm transition-colors", scheduleType === "weekly" ? "text-primary font-medium" : "text-gray-500")}>Weekly Schedule</span>
                                    </label>
                                </div>

                                {/* Date Input */}
                                <div className="flex-1 w-full relative">
                                    <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
                                        <input
                                            type="date"
                                            defaultValue="2026-02-11"
                                            className="bg-transparent border-none focus:outline-none text-sm font-medium w-full"
                                        />
                                        <Calendar className="h-5 w-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={handleSearch}
                                    disabled={isSearching}
                                    className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSearching ? "Searching..." : "Search Flights"}
                                    {!isSearching && <Search className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-primary/80 mb-20 flex items-start gap-2">
                        International schedules showing our latest flight timings and aircraft details. <span className="text-primary font-semibold">Note: All schedule are subject to changes.</span>
                    </p>

                    {/* Explore Our Solutions */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-primary mb-4 tracking-tight">Explore Our Solutions</h2>
                        <p className="text-primary/70 text-xl font-light">Plan your next shipment with us!</p>
                    </div>

                    <QuickAccessCards
                        className="mb-0"
                        onBookClick={handleBookNowClick}
                        onTrackClick={() => setTrackOpen(true)}
                    />
                </div>
            </main>

            <Footer />

            {/* Modals */}
            <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
            <TrackShipmentModal open={trackOpen} onClose={() => setTrackOpen(false)} />
            <SignInModal
                isOpen={signInOpen}
                onClose={() => setSignInOpen(false)}
                onRegisterClick={() => {
                    setSignInOpen(false);
                    setRegisterOpen(true);
                }}
                onSignInSuccess={handleSignInSuccess}
            />
            <RegisterModal
                isOpen={registerOpen}
                onClose={() => setRegisterOpen(false)}
                onBackToSignIn={() => {
                    setRegisterOpen(false);
                    setSignInOpen(true);
                }}
                onRegisterSuccess={handleRegisterSuccess}
            />
        </div>
    );
}
