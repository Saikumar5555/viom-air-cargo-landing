import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { capabilities } from "@/data/capabilities";
import { ArrowRight } from "lucide-react";

// Combine capabilities and services into one array
const allServices = [...capabilities, ...services];

export default function ServicesSection() {
    return (
        <section id="services" className="pt-2 pb-6 lg:pt-4 lg:pb-10 bg-navy">
            <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8 mb-4 pt-6">
                <p className="text-3xl md:text-4xl font-extrabold uppercase logo-gradient-text w-fit">
                    OUR SERVICES
                </p>
            </div>

            <div className="space-y-0">
                {allServices.map((service, index) => {
                    const isEven = index % 2 === 0;
                    // Determine if this is a capability or service for routing
                    const isCapability = capabilities.some(cap => cap.id === service.id);
                    const detailUrl = isCapability ? `/capability/${service.id}` : `/service/${service.id}`;

                    return (
                        <div
                            key={service.id}
                            className={isEven ? "bg-navy" : "bg-[#152238]"}
                        >
                            <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8 py-6 lg:py-8">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                                    }`}>
                                    {/* Image */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9]">
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <h3 className="text-2xl md:text-3xl font-bold logo-gradient-text w-fit mb-4">
                                            {service.name}
                                        </h3>
                                        <p className="text-base text-white/70 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features list */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.slice(0, 4).map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-white/60">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            to={detailUrl}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl font-semibold logo-gradient-bg text-[#1a2942] transition-all hover:opacity-90 shadow-lg text-sm"
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
