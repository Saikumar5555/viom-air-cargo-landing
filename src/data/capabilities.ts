import { Plane, HeartPulse, Leaf, Package } from "lucide-react";
import pharmaImage from "@/assets/images/pharma.png";

export interface Capability {
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

export const capabilities: Capability[] = [
    {
        id: "pharmaceutical",
        name: "Pharmaceutical",
        icon: HeartPulse,
        image: pharmaImage,
        tagline: "Life-Saving Logistics",
        description: "Specialized transport for pharmaceuticals, medical devices, and other life-science products.",
        longDescription: "Pharmaceutical logistics requires precision and care. We ensure the integrity of your medical shipments through temperature-controlled environments and strict adherence to healthcare regulations. From clinical trials to hospital supplies, we prioritize the safety and efficacy of every item.",
        features: ["Temperature control", "GDP compliant", "Priority handling", "Real-time monitoring", "Specialized packaging"],
        specifications: [
            { label: "Temp Range", value: "+2°C to +8°C / +15°C to +25°C" },
            { label: "Compliance", value: "GDP, IATA CEIV" },
            { label: "Security", value: "High Value Protocols" },
            { label: "Traceability", value: "Full Audit Trail" }
        ],
        benefits: [
            "Patient safety focus",
            "Regulatory compliance",
            "Risk mitigation",
            "Chain of custody integrity"
        ],
        useCases: [
            "Pharmaceutical distribution",
            "Medical device transport",
            "Clinical trial logistics",
            "Hospital resupply"
        ],
        category: "Life Sciences"
    },
    {
        id: "charter",
        name: "Charter",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop",
        tagline: "Custom Air Charter Solutions",
        description: "Tailored air charter services for urgent, outsized, or special cargo needs.",
        longDescription: "When standard schedules don't meet your requirements, our Charter service offers the ultimate flexibility. We provide dedicated aircraft for your cargo, whether it's heavy machinery, humanitarian aid, or time-critical shipments. Our team manages every detail from aircraft selection to flight permits.",
        features: ["Dedicated aircraft", "Global reach", "Flexible scheduling", "Oversized cargo handling", "24/7 support"],
        specifications: [
            { label: "Aircraft Type", value: "Various (Small Jets to Freighters)" },
            { label: "Availability", value: "On-Demand" },
            { label: "Route", value: "Custom Point-to-Point" },
            { label: "Handling", value: "Priority" }
        ],
        benefits: [
            "Complete control over schedule",
            "Direct access to remote locations",
            "Secure and private transport",
            "Capacity for large/heavy items"
        ],
        useCases: [
            "Emergency relief supplies",
            "Automotive production line stoppages",
            "Oil and gas equipment",
            "Live entertainment logistics"
        ],
        category: "Specialized"
    },
    {
        id: "airfreight",
        name: "Air Freight",
        icon: Package,
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2074&auto=format&fit=crop",
        tagline: "Global General Cargo Services",
        description: "Reliable and efficient air freight solutions for your general cargo needs.",
        longDescription: "Our Air Freight service connects you to key markets worldwide. We offer a range of options from express to economical, ensuring your general cargo moves smoothly across our network. With reliable transit times and comprehensive tracking, you can trust us with your standard shipments.",
        features: ["Global network coverage", "Door-to-door options", "Consolidation services", "Online tracking", "Customs support"],
        specifications: [
            { label: "Service Level", value: "Standard / Express" },
            { label: "Weight", value: "No limit (aircraft dependent)" },
            { label: "Tracking", value: "Online Portal" },
            { label: "Documentation", value: "e-AWB Support" }
        ],
        benefits: [
            "Cost-effective transport",
            "Reliable transit times",
            "Global connectivity",
            "Scalable capacity"
        ],
        useCases: [
            "Retail goods",
            "Electronics",
            "Textiles",
            "Machine parts"
        ],
        category: "General Cargo"
    },
    {
        id: "fresh",
        name: "Fresh",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop",
        tagline: "Perishable Goods & Fresh Produce",
        description: "Keep your perishable cargo fresh from origin to destination with VIOM AIR Fresh.",
        longDescription: "Speed and temperature control are the keys to freshness. VIOM AIR Fresh is specialized in the rapid transport of perishable goods. From seasonal fruits and vegetables to delicate flowers and fresh seafood, we provide specialized containers and expedited handling to ensure your products reach the market in peak condition.",
        features: ["Temperature-controlled facilities", "Fast connection times", "CEIV Fresh certified", "Humidity control", "Priority offloading"],
        specifications: [
            { label: "Service Speed", value: "Expedited Perishable Flow" },
            { label: "Environmental Control", value: "Temp & Humidity Optimized" },
            { label: "IATA Standard", value: "CEIV Fresh Compliant" },
            { label: "Storage", value: "Cooler Facilities at Hubs" }
        ],
        benefits: [
            "Extended shelf life for your products",
            "Maintained flavor, texture, and appearance",
            "Access to global markets for seasonal produce",
            "Reduced waste through efficient logistics"
        ],
        useCases: [
            "Tropical fruit exports",
            "Cut flower supply chains",
            "High-grade seafood logistics",
            "Time-sensitive dairy products"
        ],
        category: "Perishables"
    }
];
