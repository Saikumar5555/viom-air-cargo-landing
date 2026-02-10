import heroImage from "@/assets/VIOM AIR LOGO/ViomHero.png";

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

      <div className="relative z-10 mx-auto w-full max-w-[94%] px-4 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Global Air Cargo Solutions
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Delivering the World,{" "}
            <span className="text-[#b38b77]">Mile by Mile</span>
          </h1>
          <p className="text-base text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
            Experience seamless cargo logistics with VIOM AIR. From pharmaceuticals
            to luxury goods
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookNow}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-lg gradient-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
            >
              Book Now
            </button>
            <button
              onClick={onTrack}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#b38b77] text-white shadow-lg hover:opacity-90 transition-all"
            >
              Track Your Shipment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade removed - no gradients */}
    </section>
  );
}
