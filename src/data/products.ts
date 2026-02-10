import { Pill, Car, Leaf, Package, ShieldCheck, Thermometer, Clock, Shield, MapPin, Globe } from "lucide-react";

export interface Product {
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

export const products: Product[] = [
    {
        id: "exquisite",
        name: "Exquisite",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=2070&auto=format&fit=crop",
        tagline: "White-Glove Handling for Fragile & High-Value Cargo",
        description: "Specialized logistics for sensitive, high-value, and fragile items ensuring maximum protection.",
        longDescription: "Our Delicate Items service provides meticulous care for your most precious cargo. From luxury jewelry and fine watches to fragile electronics and glassware, we employ white-glove handling, specialized cushioning, and climate-controlled environments to ensure every item arrives in pristine condition.",
        features: ["White-glove handling", "Impact-resistant packaging", "Climate & humidity control", "Discrete high-security transit", "Real-time shock monitoring"],
        specifications: [
            { label: "Transit Time", value: "Priority Express" },
            { label: "Protection", value: "Shock-Absorbent & Anti-Static" },
            { label: "Security", value: "24/7 Dedicated Surveillance" },
            { label: "Handling", value: "Expert Specialists" }
        ],
        benefits: [
            "Guaranteed protection for fragile assets",
            "Complete peace of mind for high-value goods",
            "Reduced risk of transit damage",
            "Specialized insurance coverage"
        ],
        useCases: [
            "Luxury jewelry & watches",
            "Fine art & collectibles",
            "High-end electronics",
            "Delicate laboratory glassware"
        ],
        category: "Valuable Cargo"
    },
    {
        id: "securelift",
        name: "SecureLift",
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        tagline: "High-Tech & Electronics",
        description: "Secure and careful handling for sensitive high-tech equipment and electronics.",
        longDescription: "SecureLift provides a premium logistics solution for high-value and sensitive electronic goods. From semiconductors to consumer electronics, we employ advanced security protocols and specialized handling techniques to protect your assets against theft, damage, and environmental factors.",
        features: ["Anti-static handling", "Shock monitoring", "High-security storage", "Temperature control", "GPS tracking"],
        specifications: [
            { label: "Security Level", value: "Tier 1 High Security" },
            { label: "Protection", value: "Anti-static & Climate Controlled" },
            { label: "Monitoring", value: "End-to-end GPS & Shock Sensors" },
            { label: "Insurance", value: "High-Value Cargo Coverage" }
        ],
        benefits: [
            "Maximum protection for high-value assets",
            "Reduced risk of damage to sensitive components",
            "Complete transparency with real-time tracking",
            "Dedicated secure facilities for storage and transit"
        ],
        useCases: [
            "Semiconductor and wafer transport",
            "Consumer electronics distribution",
            "High-end medical equipment logistics",
            "Server and data center hardware migration"
        ],
        category: "Technology"
    },
    {
        id: "pharma",
        name: "Pharma",
        icon: Pill,
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1979&auto=format&fit=crop",
        tagline: "Temperature-Controlled Pharmaceutical Logistics",
        description: "VIOM AIR Pharma ensures your pharmaceutical shipments are handled with the highest standards of care. Our GDP-compliant cold chain solutions maintain precise temperature control throughout the entire journey.",
        longDescription: "The pharmaceutical industry requires uncompromising quality and reliability. Our Pharma service is CEIV Pharma certified and GDP compliant, offering a seamless cold chain solution. We utilize state-of-the-art temperature-controlled containers and active monitoring systems to ensure the integrity of life-saving medicines and vaccines.",
        features: ["2-8°C and 15-25°C temperature ranges", "Real-time temperature monitoring", "GDP & CEIV Pharma certified", "Priority handling at all stations", "Dedicated pharma acceptance zones"],
        specifications: [
            { label: "Temp Range", value: "+2°C to +8°C / +15°C to +25°C" },
            { label: "Certifications", value: "IATA CEIV Pharma, GDP" },
            { label: "Facility", value: "Dedicated Cold Room Storage" },
            { label: "Visibility", value: "Real-time Temp & Location Logging" }
        ],
        benefits: [
            "Global compliance with health regulations",
            "Preservation of product efficacy through cold chain integrity",
            "Reduced risk of temperature excursions",
            "Expert team trained in pharmaceutical handling"
        ],
        useCases: [
            "Vaccine distribution",
            "Bio-pharmaceutical transport",
            "Clinical trial materials",
            "Active pharmaceutical ingredients (API)"
        ],
        category: "Life Sciences"
    },
    {
        id: "fresh",
        name: "Fresh",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?q=80&w=2070&auto=format&fit=crop",
        tagline: "Perishable Goods & Fresh Produce",
        description: "Keep your perishable cargo fresh from origin to destination with VIOM AIR Fresh. Our cold chain infrastructure ensures flowers, fruits, seafood, and other perishables arrive in perfect condition.",
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
    },
    {
        id: "live",
        name: "Courier",
        icon: MapPin,
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop",
        tagline: "Express Small Parcel & Document Delivery",
        description: "Fast and reliable courier services for documents and small packages across our global network.",
        longDescription: "VIOM AIR Courier is designed for speed and reliability. Whether it's critical business documents or small retail parcels, we provide door-to-door tracking and priority handling to ensure your urgent shipments reach their destination on time, every time.",
        features: ["Door-to-door delivery", "Priority express routing", "Electronic proof of delivery", "Real-time GPS tracking", "Global network access"],
        specifications: [
            { label: "Transit Time", value: "Next-Day / Second-Day" },
            { label: "Max Weight", value: "30kg per parcel" },
            { label: "Tracking", value: "Full End-to-End" },
            { label: "Service", value: "Door-to-Door / Airport-to-Door" }
        ],
        benefits: [
            "Fastest transit times for small shipments",
            "Transparent tracking for every parcel",
            "Reliable delivery for critical documents",
            "Cost-effective for small-batch logistics"
        ],
        useCases: [
            "Business documents",
            "E-commerce parcels",
            "Small spare parts",
            "Urgent medicinal samples"
        ],
        category: "Express"
    },
    {
        id: "drive",
        name: "Drive",
        icon: Car,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop",
        tagline: "Automotive Parts & Vehicles",
        description: "VIOM AIR Drive specializes in the transport of automotive components, spare parts, and prototype vehicles with customized loading solutions.",
        longDescription: "The automotive supply chain is complex and demanding. VIOM AIR Drive offers reliable and flexible logistics solutions for the automotive industry. From Just-in-Time (JIT) parts delivery to the transport of finished vehicles and sensitive prototype models, we have the expertise and equipment to keep your production lines moving.",
        features: ["Heavy cargo capability", "Custom loading equipment", "AOG (Aircraft on Ground) support", "Just-in-time delivery", "Oversized cargo solutions"],
        specifications: [
            { label: "Load Type", value: "Heavy & Oversized Automotive Cargo" },
            { label: "Supply Chain", value: "Just-In-Time (JIT) Support" },
            { label: "Equipment", value: "Specialized Vehicle Racks & Pallets" },
            { label: "Tracking", value: "Full Milestone Monitoring" }
        ],
        benefits: [
            "Synchronized supply chain operations",
            "Safe transport of finished vehicles",
            "Confidential handling of prototype models",
            "Support for high-volume production schedules"
        ],
        useCases: [
            "Urgent production line parts",
            "Prototype vehicle transport for testing",
            "High-end luxury car delivery",
            "Motorsports logistics"
        ],
        category: "Automotive"
    },
];
