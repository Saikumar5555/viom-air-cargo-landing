import { useParams, useNavigate } from "react-router-dom";
import { capabilities } from "@/data/capabilities";
import { ArrowLeft, CheckCircle2, ChevronRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function CapabilityDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const capability = capabilities.find((p) => p.id === id);

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBookNow = () => {
        if (isAuthenticated) {
            // If authenticated, we could open a booking modal or navigate to a dedicated booking page
            // For now, let's show a success message since the specific booking flow isn't defined here
            alert("Booking initiated for " + capability?.name);
        } else {
            // Navigate to home with signin query param
            navigate("/?signin=true");
        }
    };

    if (!capability) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Capability Not Found</h1>
                    <button
                        onClick={() => navigate("/")}
                        className="text-primary hover:underline flex items-center gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-20">
            <Navbar onSignInClick={() => navigate("/?signin=true")} />

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                    <img
                        src={capability.image}
                        alt={capability.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                            <capability.icon className="h-4 w-4" />
                            {capability.category} Solutions
                        </div>
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tight">
                            {capability.name}
                        </h1>
                        <p className="text-base md:text-xl text-white/90 max-w-2xl font-light">
                            {capability.tagline}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12 lg:py-24">
                    <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

                            {/* Left Column: Description & Benefits */}
                            <div className="lg:col-span-2 space-y-10 lg:space-y-16">
                                <div>
                                    <h2 className="text-3xl font-bold text-foreground mb-8">Service Overview</h2>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {capability.longDescription}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-4">
                                            {capability.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-6">
                                            Why Choose {capability.name}?
                                        </h3>
                                        <ul className="space-y-4">
                                            {capability.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-muted/30 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
                                    <Quote className="absolute top-8 right-8 h-24 w-24 text-primary/5 -z-0" />
                                    <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10">Common Use Cases</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                        {capability.useCases.map((useCase, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border shadow-sm">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                    {idx + 1}
                                                </div>
                                                <span className="font-medium text-foreground">{useCase}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Specs & CTA */}
                            <div className="space-y-8">
                                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
                                    <h3 className="text-xl font-bold text-foreground mb-6 pb-6 border-b border-border">
                                        Specifications
                                    </h3>
                                    <div className="space-y-6">
                                        {capability.specifications.map((spec, idx) => (
                                            <div key={idx}>
                                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                                                <p className="text-foreground font-medium">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-border">
                                        <button
                                            onClick={handleBookNow}
                                            className="w-full py-4 rounded-xl text-white font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                                            style={{ backgroundColor: '#b38b77' }}
                                        >
                                            Book Now
                                        </button>
                                        <p className="text-center text-xs text-muted-foreground mt-4">
                                            Manage your shipment with ease
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate("/")}
                                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-border hover:bg-muted/50 transition-colors font-medium text-muted-foreground"
                                >
                                    <ArrowLeft className="h-4 w-4" /> Back to All Capabilities
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
