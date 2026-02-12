import heroImage from "@/assets/VIOM AIR LOGO/image.jpg";

interface HeroSectionProps {
  onBookNow: () => void;
  onTrack: () => void;
}

export default function HeroSection({ onBookNow, onTrack }: HeroSectionProps) {
  return (
    <section className="relative h-[100dvh] md:h-[90dvh] lg:h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt="VIOM AIR cargo aircraft flying above clouds"
        className="absolute inset-0 w-full h-full object-cover object-[75%_30%] md:object-[60%_20%] lg:object-[75%_center] 2xl:object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-[94%] px-4 lg:px-8 mt-16 lg:mt-0">
        <div className="max-w-2xl xl:max-w-4xl animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3 lg:mb-4">
            Global Air Cargo Solutions
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-4 lg:mb-6">
            Delivering the World,{" "}
            <span className="text-[#b38b77]">Mile by Mile</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-primary-foreground/80 mb-6 lg:mb-10 max-w-lg lg:max-w-2xl leading-relaxed">
            Where discretion meets excellence. VIOM AIR provides ultra-secure, white-glove cargo logistics for high-value shipments — from cutting-edge pharmaceuticals to priceless luxury goods — ensuring your most important assets arrive safely, privately, and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onBookNow}
              className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg gradient-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all w-full sm:w-auto"
            >
              Book Now
            </button>
            <button
              onClick={onTrack}
              className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg bg-[#b38b77] text-white shadow-lg hover:opacity-90 transition-all w-full sm:w-auto"
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
