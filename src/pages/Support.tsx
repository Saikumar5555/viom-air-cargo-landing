import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FileWarning, Phone, MessageCircle, MapPin, Search, Send,
    Mail, Building2, ChevronRight, ChevronDown, CheckCircle2,
    Clock, ShieldCheck, Globe2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

import faqImg from "@/assets/VIOM AIR LOGO/faq.jpg";
import locationImg from "@/assets/VIOM AIR LOGO/location.jpg";
import supportImg from "@/assets/VIOM AIR LOGO/support.jpg";
import claimsImg from "@/assets/VIOM AIR LOGO/claims.png";

type Section = "claims" | "contact" | "faq" | "locations";

const faqs = [
    {
        category: "Tracking",
        questions: [
            { q: "How do I track my shipment?", a: "Use the 'Track Your Shipment' button on the homepage and enter your Air Waybill (AWB) number to get real-time updates." },
            { q: "My tracking status hasn't updated in 24 hours. What should I do?", a: "Tracking updates can sometimes depend on localized scanning. If there's no update for over 48 hours, please contact your local office." }
        ]
    },
    {
        category: "Claims",
        questions: [
            { q: "How do I file a cargo claim?", a: "Navigate to the Claims section on this page and fill in the required details. Our team will respond within 48 hours." },
            { q: "What documents are required for a claim?", a: "Typically, you'll need the AWB, commercial invoice, packing list, and damage report/photos." }
        ]
    },
    {
        category: "Operations",
        questions: [
            { q: "What are the weight limits for cargo?", a: "Weight limits vary by aircraft type. Our A320 fleet supports up to 20 tonnes per flight. Contact us for oversized shipments." },
            { q: "Do you offer temperature-controlled shipping?", a: "Yes! Our Pharma and Fresh products provide GDP-compliant cold chain solutions with continuous monitoring." }
        ]
    }
];

const offices = [
    {
        city: "Chennai (Headquarters)",
        address: "VIOM Air Cargo Hub, Chennai International Airport",
        phone: "+91 44 2256 0000",
        email: "chennai.cargo@viomair.com",
        manager: "Rajesh Kumar"
    },
    {
        city: "Mumbai",
        address: "VIOM Cargo Centre, Chhatrapati Shivaji Airport",
        phone: "+91 22 6685 0000",
        email: "mumbai.cargo@viomair.com",
        manager: "Anjali Singh"
    },
    {
        city: "Delhi",
        address: "VIOM Logistics Hub, Indira Gandhi Int'l Airport",
        phone: "+91 11 4560 0000",
        email: "delhi.cargo@viomair.com",
        manager: "Vikram Mehta"
    },
    {
        city: "Bangalore",
        address: "VIOM Air Terminal, Kempegowda Int'l Airport",
        phone: "+91 80 6760 0000",
        email: "blr.cargo@viomair.com",
        manager: "Suresh Babu"
    }
];

export default function Support() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState<Section>("faq");
    const [faqSearch, setFaqSearch] = useState("");
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

    useEffect(() => {
        const hash = location.pathname.split("/").pop();
        if (hash && ["claims", "contact", "faq", "locations"].includes(hash)) {
            setActiveSection(hash as Section);
        }
        // Scroll to top on navigation/mount
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleSectionChange = (section: Section) => {
        setActiveSection(section);
        navigate(`/support/${section}`);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Your inquiry has been submitted! Our team will contact you within 24-48 hours.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar onSignInClick={() => navigate("/?signin=true")} />

            {/* Hero Header */}
            <div className="pt-32 pb-16 bg-gradient-to-b from-navy/5 to-transparent border-b border-border">
                <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <button onClick={() => navigate("/")} className="hover:text-gold transition-colors">Home</button>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-foreground font-medium">Support Centre</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">
                            How can we <span className="text-gold">help you</span> today?
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Find answers, get in touch with our experts, or track your cargo claims.
                            Our dedicated support team is available 24/7 to assist with your logistics needs.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[94%] px-4 lg:px-8 py-12">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32 space-y-2">
                            <button
                                onClick={() => handleSectionChange("faq")}
                                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${activeSection === "faq" ? "bg-navy text-white shadow-lg" : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <MessageCircle className="h-5 w-5" />
                                    <span className="font-semibold">FAQs</span>
                                </div>
                                <ChevronRight className={`h-4 w-4 ${activeSection === "faq" ? "opacity-100" : "opacity-0"}`} />
                            </button>

                            <button
                                onClick={() => handleSectionChange("claims")}
                                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${activeSection === "claims" ? "bg-navy text-white shadow-lg" : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <FileWarning className="h-5 w-5" />
                                    <span className="font-semibold">Cargo Claims</span>
                                </div>
                                <ChevronRight className={`h-4 w-4 ${activeSection === "claims" ? "opacity-100" : "opacity-0"}`} />
                            </button>

                            <button
                                onClick={() => handleSectionChange("contact")}
                                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${activeSection === "contact" ? "bg-navy text-white shadow-lg" : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5" />
                                    <span className="font-semibold">Contact Us</span>
                                </div>
                                <ChevronRight className={`h-4 w-4 ${activeSection === "contact" ? "opacity-100" : "opacity-0"}`} />
                            </button>

                            <button
                                onClick={() => handleSectionChange("locations")}
                                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${activeSection === "locations" ? "bg-navy text-white shadow-lg" : "hover:bg-muted text-foreground"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5" />
                                    <span className="font-semibold">Global Offices</span>
                                </div>
                                <ChevronRight className={`h-4 w-4 ${activeSection === "locations" ? "opacity-100" : "opacity-0"}`} />
                            </button>

                            {/* Support Info Card */}
                            <div className="mt-8 p-6 rounded-2xl bg-gold/10 border border-gold/20">
                                <ShieldCheck className="h-8 w-8 text-gold mb-4" />
                                <h4 className="font-bold text-navy mb-2">Live Support</h4>
                                <p className="text-sm text-navy/70 mb-4">Urgent shipments? Call our 24/7 hotline for immediate assistance.</p>
                                <p className="text-lg font-bold text-navy">+91 44 2256 0000</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9">

                        {/* FAQ Section */}
                        {activeSection === "faq" && (
                            <div className="animate-fade-up">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                                    <div className="relative max-w-xl">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <input
                                            type="text"
                                            placeholder="Search for articles, help topics..."
                                            value={faqSearch}
                                            onChange={(e) => setFaqSearch(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {faqs.map((cat) => (
                                        <div key={cat.category}>
                                            <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                                                {cat.category}
                                            </h3>
                                            <div className="space-y-4">
                                                {cat.questions.filter(q =>
                                                    q.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
                                                    q.a.toLowerCase().includes(faqSearch.toLowerCase())
                                                ).map((faq, i) => {
                                                    const id = `${cat.category}-${i}`;
                                                    const isExpanded = expandedFaq === id;
                                                    return (
                                                        <div key={i} className="group rounded-2xl border border-border hover:border-gold/30 bg-card overflow-hidden transition-all duration-300">
                                                            <button
                                                                onClick={() => setExpandedFaq(isExpanded ? null : id)}
                                                                className="w-full text-left px-8 py-6 flex items-center justify-between"
                                                            >
                                                                <span className="font-semibold text-navy group-hover:text-gold transition-colors">{faq.q}</span>
                                                                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                                                            </button>
                                                            {isExpanded && (
                                                                <div className="px-8 pb-6 text-muted-foreground leading-relaxed animate-fade-up">
                                                                    {faq.a}
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Claims Section */}
                        {activeSection === "claims" && (
                            <div className="animate-fade-up">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-navy mb-4">Cargo Claims Portal</h2>
                                    <p className="text-muted-foreground max-w-2xl">
                                        If your shipment is damaged, lost, or delayed, please submit a formal claim below.
                                        Ensure you have your Air Waybill and supporting documentation ready.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-navy">AWB Number</label>
                                                <input required placeholder="000-00000000" className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-navy">Date of Incident</label>
                                                <input type="date" required className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-navy">Claim Type</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20">
                                                <option value="">Select Type</option>
                                                <option>Cargo Damage</option>
                                                <option>Total Loss / Shortage</option>
                                                <option>Delivery Delay</option>
                                                <option>Temperature Excursion</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-navy">Claim Description</label>
                                            <textarea rows={5} required placeholder="Please provide detailed information about the incident..." className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none" />
                                        </div>
                                        <button type="submit" className="w-full py-4 rounded-xl gradient-gold text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-gold/20">
                                            <Send className="h-5 w-5" /> Submit Official Claim
                                        </button>
                                    </form>

                                    <div className="space-y-8">
                                        <div className="p-8 rounded-3xl bg-navy text-white relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                                <Clock className="h-24 w-24" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-4">Process Timeline</h3>
                                            <ul className="space-y-4 relative z-10">
                                                <li className="flex gap-4">
                                                    <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                                                    <div>
                                                        <p className="font-bold">Submission</p>
                                                        <p className="text-sm text-white/70">Claim received and acknowledged via email.</p>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="h-6 w-6 rounded-full bg-gold/50 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                                                    <div>
                                                        <p className="font-bold">Investigation (48h)</p>
                                                        <p className="text-sm text-white/70">Our claims adjusters review documents and flight logs.</p>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="h-6 w-6 rounded-full bg-gold/30 flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                                                    <div>
                                                        <p className="font-bold">Resolution</p>
                                                        <p className="text-sm text-white/70">Final outcome and compensation settlement.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-8 rounded-3xl border border-gold/30 bg-gold/5">
                                            <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-gold" />
                                                Required Documents
                                            </h4>
                                            <ul className="text-sm text-navy/70 space-y-2">
                                                <li>• Copy of Master Air Waybill</li>
                                                <li>• Commercial Invoice for cargo value</li>
                                                <li>• Packing List with itemized weights</li>
                                                <li>• Proof of damage (High-res Photos)</li>
                                                <li>• Notice of Intent to Claim</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Section */}
                        {activeSection === "contact" && (
                            <div className="animate-fade-up">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-navy mb-4">Get in Touch</h2>
                                    <p className="text-muted-foreground max-w-2xl">
                                        Our team is here to help with bookings, schedules, and general inquiries.
                                        Complete the form below and the relevant department will contact you.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-navy">Full Name</label>
                                            <input required className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-navy">Business Email</label>
                                            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-navy">Department</label>
                                            <select required className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20">
                                                <option>Sales & Bookings</option>
                                                <option>Operations & Ground Handling</option>
                                                <option>Billing & Accounts</option>
                                                <option>Customer Relations</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-navy">Message</label>
                                            <textarea rows={5} required className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none" />
                                        </div>
                                        <button type="submit" className="w-full py-4 rounded-xl bg-navy text-white font-bold uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy/20">
                                            <Send className="h-5 w-5" /> Send Message
                                        </button>
                                    </form>

                                    <div className="space-y-6">
                                        <div className="group p-8 rounded-3xl border border-border hover:border-gold/30 transition-all duration-300">
                                            <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-navy mb-2">Global Email</h3>
                                            <p className="text-muted-foreground mb-4">For general inquiries and corporate services.</p>
                                            <p className="text-xl font-bold text-navy">cargo@viomair.com</p>
                                        </div>

                                        <div className="group p-8 rounded-3xl border border-border hover:border-gold/30 transition-all duration-300">
                                            <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                                                <Globe2 className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-navy mb-2">Media & Press</h3>
                                            <p className="text-muted-foreground mb-4">Official statements and press releases.</p>
                                            <p className="text-xl font-bold text-navy">media@viomair.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Locations Section */}
                        {activeSection === "locations" && (
                            <div className="animate-fade-up">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-navy mb-4">Our Presence</h2>
                                    <p className="text-muted-foreground max-w-2xl">
                                        Strategic hubs and local offices across India to ensure seamless cargo operations
                                        and expert local support.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {offices.map((office, i) => (
                                        <div key={i} className="group p-8 rounded-3xl border border-border hover:border-gold/30 bg-card transition-all duration-300">
                                            <div className="flex justify-between items-start mb-6">
                                                <h3 className="text-2xl font-bold text-navy">{office.city}</h3>
                                                <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                                                    <Building2 className="h-5 w-5" />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex gap-3">
                                                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                                                    <p className="text-muted-foreground leading-relaxed">{office.address}</p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <Phone className="h-5 w-5 text-gold shrink-0" />
                                                    <p className="font-semibold text-navy">{office.phone}</p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <Mail className="h-5 w-5 text-gold shrink-0" />
                                                    <p className="text-sm font-medium text-navy/70">{office.email}</p>
                                                </div>
                                            </div>
                                            <div className="mt-8 pt-6 border-t border-border">
                                                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Office Manager</p>
                                                <p className="font-bold text-navy">{office.manager}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
