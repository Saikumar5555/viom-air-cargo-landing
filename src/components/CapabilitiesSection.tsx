import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { capabilities } from "@/data/capabilities";
import { Link } from "react-router-dom";

export default function CapabilitiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2; // Scroll half a container at a time
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="pt-10 pb-2 lg:pt-12 lg:pb-4 bg-background overflow-hidden relative">
      <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8 mb-2 lg:mb-4 flex justify-between items-end">
        <div>
          <p className="text-xl md:text-2xl font-bold uppercase" style={{ color: '#BA9684' }}>
            EXPLORE OUR CAPABILITIES
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8 relative group/nav">
        {/* Navigation Buttons - Left */}
        {/* Navigation Buttons - Left Removed */}

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-0 scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex gap-4 lg:gap-6 w-max xl:w-full">
            {capabilities.map((product) => (
              <Link
                key={product.id}
                to={`/capability/${product.id}`}
                className="group relative h-[300px] w-[85vw] sm:w-[45vw] md:w-[40vw] lg:w-[30vw] xl:w-auto xl:flex-1 min-w-[260px] xl:min-w-0 flex-shrink-0 xl:shrink overflow-hidden rounded-[2rem] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 snap-center isolation-isolate transform-gpu"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                {/* Background Image Container with redundant rounding and GPU acceleration */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden translate-z-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                  <h3 className="text-2xl font-bold text-white mb-1 transition-colors">
                    {product.name}
                  </h3>
                  <div className="overflow-hidden max-h-12 opacity-100 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-12 lg:group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <span
                      className="inline-block mt-2 px-6 py-2 text-white text-sm font-medium rounded-full shadow-lg transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-100"
                      style={{ backgroundColor: '#b38b77' }}
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Right */}
        {/* Navigation Buttons - Right Removed */}
      </div>
    </section>
  );
}
