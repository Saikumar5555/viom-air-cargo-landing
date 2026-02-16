import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import faqImg from "@/assets/images/faq.jpg";
import locationImg from "@/assets/images/location.jpg";
import supportImg from "@/assets/images/support.jpg";
import claimsImg from "@/assets/images/claims.png";

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
    <section id="help" className="pt-4 pb-10 lg:pt-6 lg:pb-12 bg-white">
      <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] logo-gradient-text mb-3">
            Support
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b2a47]">Access Our Help Centre</h2>
        </div>

        {/* Card Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {helpCards.map((card) => (
            <button
              key={card.id}
              onClick={() => navigate(`/support/${card.id}`)}
              className="group relative overflow-hidden rounded-3xl bg-card border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-300 card-lift h-[80px] sm:h-[100px] lg:h-[120px] w-[140px] sm:w-[180px] lg:w-[220px] isolation-isolate"
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              {/* Wrapped in a rounded container to fix the sharp edges rendering bug during scale transition */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden translate-z-0">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 transform-gpu"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                />

                {/* Gradient Overlay - Subtle for clearer images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-2 h-full flex flex-col items-center justify-end text-center pb-2">
                <div className="flex items-center gap-1 text-white group-hover:text-white transition-colors">
                  <h3 className="text-xs md:text-sm font-bold mb-0 drop-shadow-2xl">{card.title}</h3>
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
