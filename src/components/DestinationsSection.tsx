import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import local images
import dubaiImg from "@/assets/VIOM AIR LOGO/Dubai.jpg";
import qatarImg from "@/assets/VIOM AIR LOGO/Qatar.jpg";
import singaporeImg from "@/assets/VIOM AIR LOGO/Singapore.jpg";
import thailandImg from "@/assets/VIOM AIR LOGO/Thailand.jpg";
import usImg from "@/assets/VIOM AIR LOGO/US.jpg";
import malaysiaImg from "@/assets/VIOM AIR LOGO/malaysia.jpg";
import africaImg from "@/assets/VIOM AIR LOGO/Africa.jpg";

const destinations = [
    {
        id: "dubai",
        name: "Dubai",
        region: "U.A.E",
        image: dubaiImg,
        description: "Experience world-class logistics at our primary Middle East hub. We provide seamless connections for your cargo through Dubai's strategic gateway.",
    },
    {
        id: "singapore",
        name: "Singapore",
        region: "Southeast Asia",
        image: singaporeImg,
        description: "Reliable air freight services to the heart of Southeast Asia. Our Singapore hub offers cutting-edge infrastructure and strategic reach.",
    },
    {
        id: "qatar",
        name: "Qatar",
        region: "Middle East",
        image: qatarImg,
        description: "Expanding our cargo reach in the Gulf. With dedicated freighter services to Doha, we connect your business to growing logistics markets.",
    },
    {
        id: "malaysia",
        name: "Malaysia",
        region: "Southeast Asia",
        image: malaysiaImg,
        description: "Strategic air cargo connections to Kuala Lumpur. We facilitate vital trade routes between India and Malaysia with customized solutions.",
    },
    {
        id: "thailand",
        name: "Thailand",
        region: "Southeast Asia",
        image: thailandImg,
        description: "Connecting your business to the Land of Smiles. Our specialized services ensure your perishables arrive in perfect condition.",
    },
    {
        id: "usa",
        name: "United States",
        region: "North America",
        image: usImg,
        description: "Global reach to major North American hubs. We bridge the gap across continents, facilitating secure trade movements.",
    },
    {
        id: "africa",
        name: "African Countries",
        region: "Africa",
        image: africaImg,
        description: "Extensive coverage across the African continent. We are committed to connecting emerging markets with global trade centers.",
    },
];

export default function DestinationsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % destinations.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning]);

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentDest = destinations[currentIndex];

    return (
        <section className="py-24 bg-background overflow-hidden relative border-t border-border">
            <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
                {/* Rounded Slider Card */}
                <div className="relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black group-nav">

                    {/* Background Images */}
                    {destinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Cinematic Overlay - Darker at bottom for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                        </div>
                    ))}

                    {/* Content Container */}
                    <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-16 lg:p-20 text-white">
                        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <h2 className="text-3xl md:text-5xl font-light text-white mb-4 tracking-tight">
                                New freighter destination: <span className="font-medium">{currentDest.name}</span>
                            </h2>
                            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-8 max-w-2xl line-clamp-2 md:line-clamp-none">
                                {currentDest.description}
                            </p>

                            <button
                                onClick={() => navigate("/schedule")}
                                className="px-10 py-3 rounded-full border border-white/40 text-white font-medium text-sm transition-all hover:bg-white hover:text-black hover:border-white"
                            >
                                View Schedule
                            </button>
                        </div>
                    </div>

                    {/* Navigation Arrows - Positioned inside the card */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-between px-6 md:px-10 pointer-events-none">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white pointer-events-auto hover:bg-white transition-all hover:text-black active:scale-95"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white pointer-events-auto hover:bg-white transition-all hover:text-black active:scale-95"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="absolute top-10 right-10 z-30 flex gap-2">
                        {destinations.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
