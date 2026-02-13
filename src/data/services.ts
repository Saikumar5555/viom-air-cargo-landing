import { Plane, TriangleAlert, Package, Zap } from "lucide-react";
import tempImage from "@/assets/images/temperature.jpg";
import generalImage from "@/assets/images/general.jpg";

export interface Service {
    id: string;
    name: string;
    icon: any;
    image: string;
    tagline: string;
    description: string;
    longDescription: string;
    features: string[];
    specifications: { label: string; value: string }[];
    benefits: string[];
    useCases: string[];
    category: string;
}

export const services: Service[] = [
    {
        id: "general",
        name: "General Air Freight",
        icon: Plane,
        image: generalImage,
        tagline: "Reliable Global Cargo Solutions",
        description: "Efficient and reliable air freight solutions for all your general cargo needs.",
        longDescription: "Our General Air Freight service provides comprehensive shipping solutions for businesses of all sizes. With access to a global network of carriers and destinations, we ensure your cargo reaches its destination safely and on time. Whether you're shipping documents, pallets, or containerized freight, our team of experts handles every aspect of the logistics chain.",
        features: [
            "Domestic & International shipping",
            "Airport-to-Airport / Door-to-Door service",
            "Express & Economy options",
            "Consolidation services",
            "Real-time tracking",
            "Customs clearance support"
        ],
        specifications: [
            { label: "Service Level", value: "Standard / Express / Economy" },
            { label: "Coverage", value: "200+ Countries" },
            { label: "Tracking", value: "24/7 Online Portal" },
            { label: "Documentation", value: "Full e-AWB Support" }
        ],
        benefits: [
            "Competitive pricing across all service levels",
            "Flexible scheduling to meet your deadlines",
            "Dedicated account management",
            "Comprehensive insurance options",
            "Proven track record of on-time delivery"
        ],
        useCases: [
            "E-commerce shipments",
            "Industrial equipment",
            "Retail inventory",
            "Automotive parts",
            "Electronics and technology",
            "Manufacturing supplies"
        ],
        category: "Standard Services"
    },
    {
        id: "special",
        name: "Special Cargo",
        icon: Package,
        image: generalImage,
        tagline: "Customized Solutions for Unique Shipments",
        description: "Tailored handling for oversized, valuable, and sensitive cargo requiring special care.",
        longDescription: "Not all cargo fits into standard shipping containers. Our Special Cargo service provides customized solutions for shipments that require extra care, special handling, or unique logistics arrangements. From live animals to priceless artwork, from automotive manufacturing to heavy machinery, we design bespoke shipping solutions that meet your specific requirements.",
        features: [
            "Live animal transport (IATA LAR certified)",
            "Oversized & heavy cargo specialists",
            "Artwork & valuables with secure handling",
            "Automotive logistics",
            "Temperature-sensitive options",
            "White glove service available"
        ],
        specifications: [
            { label: "Max Weight", value: "Aircraft Dependent" },
            { label: "Max Dimensions", value: "Custom Solutions" },
            { label: "Certifications", value: "IATA CEIV, LAR" },
            { label: "Handling", value: "Specialized Equipment" }
        ],
        benefits: [
            "Tailored solutions for unique requirements",
            "Experienced specialists in niche cargo types",
            "Custom packaging and crating services",
            "Coordination with specialized ground handlers",
            "Insurance expertise for high-value items"
        ],
        useCases: [
            "Racehorses and livestock",
            "Museum exhibits and fine art",
            "Luxury vehicles",
            "Industrial machinery",
            "Aircraft engines and parts",
            "Entertainment and event equipment"
        ],
        category: "Specialized Services"
    },
    {
        id: "temperature",
        name: "Temperature-Controlled Cargo",
        icon: Zap,
        image: tempImage,
        tagline: "Precision Climate Control for Sensitive Shipments",
        description: "Specialized cold chain solutions for pharmaceuticals, perishables, and temperature-sensitive goods.",
        longDescription: "Our Temperature-Controlled Cargo service provides end-to-end cold chain management for shipments that require precise climate control. From active refrigerated containers to passive thermal packaging, we ensure your sensitive cargo maintains its integrity throughout the journey. Our dedicated Pharma and Fresh hubs are equipped with temperature-monitored storage and handling facilities.",
        features: [
            "Active and passive cooling systems",
            "Real-time temperature monitoring",
            "Specialized pharma and fresh hubs",
            "IATA CEIV Pharma certified handling",
            "Thermal blanket protection",
            "24/7 cold chain management"
        ],
        specifications: [
            { label: "Temperature Range", value: "-20°C to +25°C" },
            { label: "Equipment", value: "Active ULD / Passive Solutions" },
            { label: "Certification", value: "IATA CEIV Pharma / Fresh" },
            { label: "Monitoring", value: "GPS & Temp Data Logging" }
        ],
        benefits: [
            "Maintain product efficacy and quality",
            "Compliance with global health regulations",
            "Reduced risk of thermal excursions",
            "Highest priority loading and handling",
            "Detailed thermal mapping reports"
        ],
        useCases: [
            "Pharmaceuticals and vaccines",
            "Fresh produce and flowers",
            "Dairies and meat products",
            "Life science samples",
            "High-end chocolates and wines",
            "Healthcare supplies"
        ],
        category: "Premium Services"
    }
];
