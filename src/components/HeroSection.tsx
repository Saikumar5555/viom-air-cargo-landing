import heroImage from "@/assets/hero-aircraft.jpg";

interface HeroSectionProps {
  onBookNow: () => void;
  onTrack: () => void;
}

export default function HeroSection({ onBookNow, onTrack }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="VIOM AIR cargo aircraft flying above clouds"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Global Air Cargo Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Delivering the World,{" "}
            <span className="text-gradient-gold">Mile by Mile</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
            Experience seamless cargo logistics with VIOM AIR. From pharmaceuticals
            to luxury goods — we connect businesses across 120+ destinations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookNow}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg gradient-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              Book Now
            </button>
            <button
              onClick={onTrack}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg border-2 border-gold text-gold hover:bg-gold hover:text-accent-foreground transition-all"
            >
              Track Your Shipment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
