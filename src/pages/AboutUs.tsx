import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignInModal from "@/components/SignInModal";
import RegisterModal from "@/components/RegisterModal";
import { toast } from "sonner";
import { Plane, Globe, Shield, Clock, Thermometer, ShieldCheck, Zap, Activity, CheckCircle2, Award, Briefcase, BarChart3 } from "lucide-react";
import viomHero from "../assets/VIOM AIR LOGO/image.jpg";
import viomAboutHero from "../assets/VIOM AIR LOGO/viomHero.jpeg";

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

    return (
        <div className="min-h-screen bg-white">
            <Navbar onSignInClick={() => setSignInOpen(true)} />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-32 md:py-48 overflow-hidden text-white">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={viomAboutHero}
                            alt="About VIOM"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-5xl">
                            <h1 className="text-5xl md:text-8xl font-light mb-8 tracking-tight animate-fade-up">
                                When Cargo <span className="italic text-accent font-medium">Matters</span>,<br />
                                Nothing Can Be Left to <span className="font-medium">Chance</span>.
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/70 max-w-3xl leading-relaxed animate-fade-up-delay-1">
                                VIOM Air Cargo is a premium air freight enterprise built for precision, resilience, and global reach.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Foundation */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 animate-fade-up">
                                <div className="space-y-4">
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">About VIOM Air Cargo</span>
                                    <h2 className="text-3xl md:text-5xl font-light text-primary leading-tight">
                                        Precision. Resilience. <br /><span className="italic">Global Reach.</span>
                                    </h2>
                                </div>

                                <div className="space-y-6 text-lg text-primary/70 leading-relaxed">
                                    <p>
                                        Operating across key international and domestic air corridors, we deliver time-critical logistics solutions with disciplined execution and strategic intelligence.
                                    </p>
                                    <p>
                                        Every shipment we handle — whether commercial, industrial, or life-saving — is treated as a mission with measurable responsibility. At VIOM, logistics is not transactional. It is <span className="text-primary font-semibold italic">structural</span>.
                                    </p>
                                    <div className="pt-4 border-l-2 border-accent pl-6">
                                        <p className="text-primary font-medium italic">
                                            "We do not merely transport cargo. We safeguard value, time, and trust."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative animate-fade-up-delay-1">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white group">
                                    <img
                                        src={viomHero}
                                        alt="VIOM Air Cargo Operation"
                                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-2xl shadow-2xl hidden md:block max-w-[280px]">
                                    <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-2">Operational Philosophy</p>
                                    <p className="text-xl font-light text-white leading-snug">
                                        Engineered for reliability <span className="text-accent italic">at scale</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pharmaceutical Logistics - Specialized Section */}
                <section className="py-24 md:py-32 bg-[#F8F9FA] border-y border-border">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-5 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-bold uppercase tracking-wider">
                                    <Activity className="h-4 w-4" />
                                    Specialized Sector
                                </div>
                                <h2 className="text-3xl md:text-4xl font-light text-primary leading-tight">
                                    Pharmaceutical Logistics — <br />
                                    <span className="font-medium">Our Core Expertise</span>
                                </h2>
                                <p className="text-primary/70 text-lg leading-relaxed">
                                    Pharmaceutical logistics demands far more than speed. It demands precision without compromise. VIOM Air Cargo has built a specialized ecosystem designed to protect product integrity at every stage.
                                </p>

                                <div className="space-y-4 pt-6">
                                    {[
                                        "Temperature-controlled (2–8°C, 15–25°C, deep-freeze)",
                                        "Vaccines and Biologics",
                                        "Clinical Trial Materials",
                                        "Active Pharmaceutical Ingredients (APIs)",
                                        "Emergency critical-response airlift"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-accent" />
                                            </div>
                                            <span className="text-primary/80 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                                        <Thermometer className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">Cold-Chain Mastery</h3>
                                    <p className="text-primary/60 text-sm leading-relaxed">
                                        Validated handling procedures and real-time monitoring ensure uninterrupted temperature compliance and full traceability.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                                        <ShieldCheck className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">Regulatory Rigor</h3>
                                    <p className="text-primary/60 text-sm leading-relaxed">
                                        Built on strict compliance protocols and quality assurance systems with zero-tolerance operational discipline.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                                        <Zap className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">Life-Saving Speed</h3>
                                    <p className="text-primary/60 text-sm leading-relaxed">
                                        When healthcare systems depend on reliability, we deliver with certainty, protecting vaccines and critical medical cargo.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border space-y-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                                        <Globe className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">Global Health Reach</h3>
                                    <p className="text-primary/60 text-sm leading-relaxed">
                                        Supporting global trade and economic continuity through a robust operational architecture engineered for scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commitment to Excellence */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mb-16 space-y-4">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Commitment</span>
                            <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight">Standards Without <span className="italic">Compromise</span></h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                            {[
                                {
                                    icon: Shield,
                                    title: "Institutional Controls",
                                    desc: "Grade-A operational controls ensuring maximum safety for high-value consignments."
                                },
                                {
                                    icon: Zap,
                                    title: "Strategic Connectivity",
                                    desc: "Global network connectivity designed for foresight and rapid response."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Digital Transparency",
                                    desc: "End-to-end digital visibility and shipment transparency at every touchpoint."
                                },
                                {
                                    icon: Award,
                                    title: "Full Compliance",
                                    desc: "Alignment with international aviation and healthcare compliance standards."
                                },
                                {
                                    icon: Briefcase,
                                    title: "Strategic Partnership",
                                    desc: "Positioned not simply as a carrier, but as your strategic movement partner."
                                },
                                {
                                    icon: Activity,
                                    title: "Mission Driven",
                                    desc: "Treating every delivery as a mission with measurable responsibility."
                                }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                                            <p className="text-primary/60 leading-relaxed text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA/Statement */}
                <section className="py-24 bg-[#F8F9FA] text-primary text-center border-t border-border">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-light italic">
                                Moving more than cargo — <br />
                                <span className="text-[#b38b77] font-medium not-italic">moving certainty, continuity, and progress.</span>
                            </h2>
                            <div className="h-px w-24 bg-accent mx-auto opacity-50"></div>
                            <p className="text-xl font-light tracking-widest uppercase opacity-80">VIOM Air Cargo</p>
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

