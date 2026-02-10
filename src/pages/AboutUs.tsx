import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignInModal from "@/components/SignInModal";
import RegisterModal from "@/components/RegisterModal";
import { toast } from "sonner";
import { Plane, Globe, Shield, Clock, Users, Award, MapPin, CheckCircle2 } from "lucide-react";
import viomHero from "../assets/VIOM AIR LOGO/ViomHero.png";

export default function AboutUs() {
    const [signInOpen, setSignInOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAuthenticated") === "true";
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSignInSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        setSignInOpen(false);
        toast.success("Successfully signed in!");
    };

    const handleRegisterSuccess = () => {
        setRegisterOpen(false);
        toast.success("Registration successful! Please sign in.");
        setSignInOpen(true);
    };

    const values = [
        {
            icon: Shield,
            title: "Reliability",
            description: "Unwavering commitment to the safety and security of every shipment, ensuring peace of mind for our global partners."
        },
        {
            icon: Globe,
            title: "Global Connectivity",
            description: "Spanning 120+ destinations across 5 continents, bridging gaps and enabling seamless international trade."
        },
        {
            icon: Clock,
            title: "Efficiency",
            description: "Precision-driven operations and cutting-edge logistics technology for swift, timely deliveries."
        },
        {
            icon: Users,
            title: "Customer Centric",
            description: "Dedicated to understanding and exceeding the unique logistical needs of every client we serve."
        }
    ];


    return (
        <div className="min-h-screen bg-white">
            <Navbar onSignInClick={() => setSignInOpen(true)} />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-primary-foreground">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight animate-fade-up">
                            Elevating Global <span className="text-gradient-gold font-medium italic">Logistics</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-1">
                            VIOM AIR Cargo is a premier global logistics provider, dedicated to connecting businesses worldwide with reliable, efficient, and innovative air freight solutions.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6 animate-fade-up">
                                <span className="text-sm font-bold uppercase tracking-widest text-accent">Our Story</span>
                                <h2 className="text-3xl md:text-4xl font-light text-primary leading-tight">
                                    A Journey Rooted in Excellence and Innovation
                                </h2>
                                <p className="text-primary/70 leading-relaxed">
                                    Founded with the ambition to simplify the complexities of international trade, VIOM AIR Cargo has grown from a regional specialist into a global powerhouse. Our journey has been defined by a relentless pursuit of excellence and a commitment to staying ahead of the technological curve.
                                </p>
                                <p className="text-primary/70 leading-relaxed">
                                    Today, we operate a diverse fleet and a vast network that reaches over 120 destinations. But beyond the numbers, our focus remains on the people—our clients and employees—who drive our success every day.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                                        <CheckCircle2 className="h-5 w-5 text-accent" />
                                        <span className="text-sm font-semibold text-primary">120+ Destinations</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                                        <CheckCircle2 className="h-5 w-5 text-accent" />
                                        <span className="text-sm font-semibold text-primary">5 Continents</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                                        <CheckCircle2 className="h-5 w-5 text-accent" />
                                        <span className="text-sm font-semibold text-primary">24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative animate-fade-up-delay-1">
                                <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border bg-muted/20">
                                    <img
                                        src={viomHero}
                                        alt="Cargo Aircraft"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -left-10 bg-accent p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
                                    <p className="text-4xl font-bold text-white mb-1">10+</p>
                                    <p className="text-white/80 text-sm font-medium">Years of Operational Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-20 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <span className="text-sm font-bold uppercase tracking-widest text-accent">Core Values</span>
                            <h2 className="text-3xl md:text-5xl font-light text-primary tracking-tight">What We Stand For</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((v, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-card border border-border group hover:shadow-card-hover transition-all duration-300">
                                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <v.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                                    <p className="text-primary/60 text-sm leading-relaxed">{v.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Global Network Visual Section */}
                <section className="py-20 md:py-32 bg-primary overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-8 text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/20 rounded-full text-accent mb-4">
                            <Globe className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Global Network</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight italic">
                            Connecting <span className="text-accent underline decoration-white/20 underline-offset-8">Every Corner</span> of the World
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg">
                            Our strategic hubs and partnerships ensure that your cargo reaches even the most remote locations with efficiency and care.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                            {[
                                { city: "Nairobi", code: "NBO", region: "Africa" },
                                { city: "Dubai", code: "DXB", region: "Middle East" },
                                { city: "Singapore", code: "SIN", region: "Asia" },
                                { city: "New York", code: "JFK", region: "Americas" }
                            ].map((hub, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
                                    <MapPin className="h-5 w-5 text-accent mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-1">{hub.city}</h4>
                                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{hub.region} • {hub.code}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <SignInModal
                isOpen={signInOpen}
                onClose={() => setSignInOpen(false)}
                onRegisterClick={() => {
                    setSignInOpen(false);
                    setRegisterOpen(true);
                }}
                onSignInSuccess={handleSignInSuccess}
            />
            <RegisterModal
                isOpen={registerOpen}
                onClose={() => setRegisterOpen(false)}
                onBackToSignIn={() => {
                    setRegisterOpen(false);
                    setSignInOpen(true);
                }}
                onRegisterSuccess={handleRegisterSuccess}
            />
        </div>
    );
}
