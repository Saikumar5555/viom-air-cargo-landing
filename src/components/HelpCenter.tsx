import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import faqImg from "@/assets/VIOM AIR LOGO/faq.jpg";
import locationImg from "@/assets/VIOM AIR LOGO/location.jpg";
import supportImg from "@/assets/VIOM AIR LOGO/support.jpg";
import claimsImg from "@/assets/VIOM AIR LOGO/claims.png";

export default function HelpCenter() {
  const navigate = useNavigate();

  const helpCards = [
    {
      id: "claims",
      title: "Claims",
      backgroundImage: claimsImg,
    },
    {
      id: "contact",
      title: "Contact Us",
      backgroundImage: supportImg,
    },
    {
      id: "faq",
      title: "FAQs",
      backgroundImage: faqImg,
    },
    {
      id: "locations",
      title: "Find a Local Office",
      backgroundImage: locationImg,
    },
  ];

  return (
    <section id="help" className="py-24 bg-gradient-to-b from-background to-sky-light/30">
      <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b38b77] mb-3">
            Support
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Access Our Help Centre</h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {helpCards.map((card) => (
            <button
              key={card.id}
              onClick={() => navigate(`/support/${card.id}`)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 card-lift h-[200px] sm:h-[260px] lg:h-[320px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />

              {/* Gradient Overlay - Subtle for clearer images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col items-center justify-end text-center pb-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-2xl">{card.title}</h3>
                <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
