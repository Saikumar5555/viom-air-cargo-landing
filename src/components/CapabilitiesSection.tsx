import { Link } from "react-router-dom";
import { capabilities } from "@/data/capabilities";
import { ArrowRight } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="pt-2 pb-6 lg:pt-4 lg:pb-10 bg-navy">
      <div className="space-y-0">
        {capabilities.map((capability, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={capability.id}
              className={isEven ? "bg-navy" : "bg-[#152238]"}
            >
              <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8 py-6 lg:py-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9]">
                      <img
                        src={capability.image}
                        alt={capability.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold logo-gradient-text w-fit mb-4">
                      {capability.name}
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed mb-6">
                      {capability.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {capability.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/capability/${capability.id}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold logo-gradient-bg text-[#1a2942] transition-all hover:opacity-90 shadow-lg text-sm"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
