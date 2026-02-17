import { useState, useEffect } from "react";
import { X, ArrowRight, Package, Thermometer, ShieldCheck, Truck, Plane, Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { services } from "../data/services";

// Import images
import pharmaImg from "../assets/images/pharma.png";
import freshImg from "../assets/images/fresh.jpg";
import secureImg from "../assets/images/claims.png"; // Placeholder
import generalImg from "../assets/images/general.jpg";
import driveImg from "../assets/images/ViomHero.png"; // Charter image
import exquisiteImg from "../assets/images/image.jpg"; // Placeholder

const capabilitiesData = [
    {
        id: "pharmaceutical",
        name: "Pharmaceutical",
        description: "Temperature-controlled solutions for pharmaceutical and life sciences cargo, ensuring integrity from origin to destination.",
        image: pharmaImg,
        icon: Thermometer,
        href: "/capability/pharmaceutical"
    },
    {
        id: "charter",
        name: "Charter",
        description: "Tailored air cargo charter solutions providing flexibility and capacity for urgent or specialized shipments.",
        image: driveImg,
        icon: Plane,
        href: "/capability/charter"
    },
    {
        id: "airfreight",
        name: "Air Freight",
        description: "Reliable and efficient general air freight services connecting global markets with speed and precision.",
        image: generalImg,
        icon: Package,
        href: "/capability/airfreight"
    },
    {
        id: "fresh",
        name: "Fresh",
        description: "Expert handling of perishables to preserve freshness and quality throughout the supply chain.",
        image: freshImg,
        icon: Leaf,
        href: "/capability/fresh"
    }
];

const serviceItems = services.map(s => ({
    id: s.id,
    name: s.name,
    description: s.description,
    image: s.image,
    icon: s.icon,
    href: `/service/${s.id}`
}));

const allItems = [...capabilitiesData, ...serviceItems];

interface CapabilitiesDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CapabilitiesDrawer({ isOpen, onClose }: CapabilitiesDrawerProps) {
    const navigate = useNavigate();
    const [activeProduct, setActiveProduct] = useState(allItems[0]);
    const [isClosing, setIsClosing] = useState(false);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300); // Match transition duration
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div className="fixed top-16 lg:top-20 right-0 bottom-0 z-40 flex justify-end h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]">
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-transparent transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"
                    }`}
                onClick={handleClose}
            />

            {/* Drawer Panel */}
            <div
                className={`relative w-full md:w-[40vw] bg-white shadow-2xl flex flex-col md:flex-row h-full transition-transform duration-300 ease-out border-l border-border ${isClosing ? "translate-x-full" : "animate-in slide-in-from-right duration-300"
                    }`}
            >


                {/* Left Side: Product List */}
                <div className="w-full md:w-1/2 border-r border-border bg-gray-50/50 flex flex-col pt-8 pb-8 px-6 overflow-y-auto">
                    <h2 className="text-xl font-bold text-navy mb-6">Our Services</h2>
                    <div className="space-y-2">
                        {allItems.map((product) => (
                            <button
                                key={product.id}
                                onMouseEnter={() => setActiveProduct(product)}
                                onClick={() => {
                                    setActiveProduct(product);
                                    navigate(product.href);
                                    handleClose();
                                }}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${activeProduct.id === product.id
                                    ? "bg-navy text-white shadow-lg"
                                    : "hover:bg-muted text-gray-600 hover:text-navy"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <product.icon className={`h-4 w-4 ${activeProduct.id === product.id ? "text-gold" : "text-gray-400 group-hover:text-navy"
                                        }`} />
                                    <span className="font-semibold text-sm">{product.name}</span>
                                </div>
                                {activeProduct.id === product.id && (
                                    <ArrowRight className="h-5 w-5 text-gold animate-in fade-in slide-in-from-left-2" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Product Details */}
                <div className="w-full md:w-1/2 relative overflow-hidden bg-navy">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={activeProduct.image}
                            alt={activeProduct.name}
                            className="w-full h-full object-cover transition-all duration-500 transform scale-105"
                            key={activeProduct.image} // Force re-render for animation
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16 mb-12">
                        <div className="animate-in slide-in-from-bottom-5 fade-in duration-500" key={activeProduct.id}>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center backdrop-blur-md border border-gold/30">
                                    <activeProduct.icon className="h-4 w-4 text-gold" />
                                </div>
                                <span className="text-gold font-bold tracking-wider uppercase text-xs">Capability Focus</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                                {activeProduct.name}
                            </h3>

                            <p className="text-sm text-white/80 max-w-xl leading-relaxed mb-6">
                                {activeProduct.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to={activeProduct.href}
                                    onClick={handleClose}
                                    className="px-6 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-white hover:text-navy transition-all duration-300 flex items-center gap-2 shadow-lg shadow-gold/20 text-sm"
                                >
                                    Explore Solution
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    to="/schedule"
                                    onClick={handleClose}
                                    className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                                >
                                    Check Schedule
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
