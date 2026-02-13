import heroImage from "@/assets/images/final.png";

interface HeroSectionProps {
  onBookNow: () => void;
  onGetQuote: () => void;
}

export default function HeroSection({ onBookNow, onGetQuote }: HeroSectionProps) {
  return (
    <section className="relative h-[50dvh] sm:h-[80dvh] md:h-[90dvh] lg:h-[100dvh] min-h-[400px] flex items-end sm:items-center overflow-hidden pb-16 sm:pb-0 bg-[hsl(var(--navy))]">
      {/* Background image */}
      <img
        src={heroImage}
        alt="VIOM AIR cargo aircraft flying above clouds"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-[60%_20%] lg:object-[75%_center] 2xl:object-center opacity-70"
        fetchPriority="high"
      />
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-[94%] px-4 lg:px-8 mt-10 lg:mt-0">
        <div className="max-w-2xl xl:max-w-4xl animate-fade-up">

          <h1 className="text-lg sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-2 lg:mb-6">
            Delivering the World,
            <span className="logo-gradient-text block w-fit mt-1 sm:mt-2">Mile by Mile</span>
          </h1>
          <p className="text-[11px] sm:text-base lg:text-lg text-primary-foreground/80 mb-5 lg:mb-10 max-w-lg lg:max-w-2xl leading-relaxed line-clamp-3 sm:line-clamp-none">
            VIOM AIR provides ultra-secure, white-glove cargo logistics for high-value shipments — from cutting-edge pharmaceuticals to priceless luxury goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onBookNow}
              className="px-5 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg logo-gradient-bg text-[#1a2942] shadow-lg hover:opacity-90 transition-all w-full sm:w-auto border-2 border-transparent hover:border-[#1b2a47]"
            >
              Book now
            </button>
            <button
              onClick={onGetQuote}
              className="px-5 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg bg-[#1b2a47] text-white shadow-lg hover:opacity-90 transition-all w-full sm:w-auto border-2 border-transparent hover:border-[#B18874]"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade removed - no gradients */}
    </section>
  );
}
