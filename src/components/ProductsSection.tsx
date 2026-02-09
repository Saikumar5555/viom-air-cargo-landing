import { useState } from "react";
import { X } from "lucide-react";
import { Pill, Gem, Car, Leaf, ShieldCheck, Package } from "lucide-react";

const products = [
  {
    id: "pharma",
    name: "Pharma",
    icon: Pill,
    tagline: "Temperature-Controlled Pharmaceutical Logistics",
    description: "VIOM AIR Pharma ensures your pharmaceutical shipments are handled with the highest standards of care. Our GDP-compliant cold chain solutions maintain precise temperature control throughout the entire journey.",
    features: ["2-8°C and 15-25°C temperature ranges", "Real-time temperature monitoring", "GDP & CEIV Pharma certified", "Priority handling at all stations", "Dedicated pharma acceptance zones"],
  },
  {
    id: "exquisite",
    name: "Exquisite",
    icon: Gem,
    tagline: "Luxury Goods & High-Value Cargo",
    description: "For your most valuable and delicate shipments, VIOM AIR Exquisite provides white-glove service with enhanced security and careful handling throughout the transport chain.",
    features: ["Secure vault storage", "Tamper-proof packaging", "Insurance coverage available", "Dedicated handling team", "Real-time tracking"],
  },
  {
    id: "drive",
    name: "Drive",
    icon: Car,
    tagline: "Automotive Parts & Vehicles",
    description: "VIOM AIR Drive specializes in the transport of automotive components, spare parts, and prototype vehicles with customized loading solutions.",
    features: ["Heavy cargo capability", "Custom loading equipment", "AOG (Aircraft on Ground) support", "Just-in-time delivery", "Oversized cargo solutions"],
  },
  {
    id: "fresh",
    name: "Fresh",
    icon: Leaf,
    tagline: "Perishable Goods & Fresh Produce",
    description: "Keep your perishable cargo fresh from origin to destination with VIOM AIR Fresh. Our cold chain infrastructure ensures flowers, fruits, seafood, and other perishables arrive in perfect condition.",
    features: ["Temperature-controlled facilities", "Fast connection times", "CEIV Fresh certified", "Humidity control", "Priority offloading"],
  },
  {
    id: "secure-lift",
    name: "Secure Lift",
    icon: ShieldCheck,
    tagline: "High-Security Cargo Transport",
    description: "VIOM AIR Secure Lift provides the highest level of security for classified, diplomatic, and sensitive cargo with armed escort and surveillance options.",
    features: ["24/7 surveillance", "Armed escort available", "Restricted access handling", "Background-checked personnel", "Chain of custody documentation"],
  },
  {
    id: "courier",
    name: "Courier",
    icon: Package,
    tagline: "Express Delivery Services",
    description: "When time is critical, VIOM AIR Courier delivers with guaranteed next-flight-out priority and door-to-door express service across our global network.",
    features: ["Next-flight-out priority", "Door-to-door delivery", "Same-day acceptance", "Proof of delivery", "SMS & email notifications"],
  },
];

export default function ProductsSection() {
  const [selected, setSelected] = useState<(typeof products)[0] | null>(null);

  return (
    <section id="products" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Products
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                className="text-left bg-card rounded-2xl p-8 shadow-card card-lift border border-border/50 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.tagline}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-card-hover overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="gradient-primary p-6 text-primary-foreground">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground">
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <selected.icon className="h-6 w-6" />
                <h2 className="text-xl font-bold">{selected.name}</h2>
              </div>
              <p className="text-sm text-primary-foreground/70">{selected.tagline}</p>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selected.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-full py-3 rounded-lg gradient-gold text-accent-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
