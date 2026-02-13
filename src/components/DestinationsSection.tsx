import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import local images
import dubaiImg from "@/assets/images/Dubai.jpg";
import qatarImg from "@/assets/images/Qatar.jpg";
import singaporeImg from "@/assets/images/Singapore.jpg";
import thailandImg from "@/assets/images/Thailand.jpg";
import usImg from "@/assets/images/US.jpg";
import malaysiaImg from "@/assets/images/malaysia.jpg";
import africaImg from "@/assets/images/Africa.jpg";

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
        <section className="pt-6 pb-10 lg:pt-8 lg:pb-14 bg-white overflow-hidden relative border-t border-gray-100">
            <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
                {/* Rounded Slider Card - Rounded removed for sharp edges */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[550px] rounded-none overflow-hidden shadow-2xl bg-black group-nav">

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
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            {/* Cinematic Overlay - Darker at bottom for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                        </div>
                    ))}

                    {/* Content Container */}
                    <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-12 lg:p-14 xl:p-20 text-white">
                        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700 mb-10 md:mb-0">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-2 md:mb-4 tracking-tight">
                                New freighter destination: <span className="font-medium block md:inline">{currentDest.name}</span>
                            </h2>
                            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed mb-6 md:mb-8 max-w-2xl line-clamp-3 md:line-clamp-none">
                                {currentDest.description}
                            </p>

                            <button
                                onClick={() => navigate("/schedule")}
                                className="px-8 py-2.5 md:px-10 md:py-3 rounded-full border border-white/40 text-white font-medium text-xs md:text-sm transition-all hover:bg-white hover:text-black hover:border-white"
                            >
                                View Schedule
                            </button>
                        </div>
                    </div>

                    {/* Navigation Arrows - Positioned inside the card */}
                    <div className="absolute inset-x-0 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-30 flex items-center justify-end md:justify-between px-6 md:px-10 gap-2 pointer-events-none">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white pointer-events-auto hover:bg-white transition-all hover:text-black active:scale-95"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white pointer-events-auto hover:bg-white transition-all hover:text-black active:scale-95"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 z-30 flex gap-2">
                        {destinations.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 md:w-8 bg-primary" : "w-1.5 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
