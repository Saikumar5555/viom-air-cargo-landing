import { useState } from "react";
import { X, Send, MessageCircle, Search, FileWarning, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

type HelpTab = "claims" | "contact" | "faq";

const faqs = [
  { q: "How do I track my shipment?", a: "Use the 'Track Your Shipment' button on the homepage and enter your Air Waybill (AWB) number to get real-time updates." },
  { q: "What are the weight limits for cargo?", a: "Weight limits vary by aircraft type. Our A320 fleet supports up to 20 tonnes per flight. Contact us for oversized shipments." },
  { q: "How do I file a cargo claim?", a: "Navigate to Help Centre → Claims and fill in the required details. Our team will respond within 48 hours." },
  { q: "Do you offer temperature-controlled shipping?", a: "Yes! Our Pharma and Fresh products provide GDP-compliant cold chain solutions with continuous monitoring." },
  { q: "What destinations do you serve?", a: "VIOM AIR operates across 120+ destinations worldwide. Download our flight schedule for the complete network." },
];

export default function HelpCenter() {
  const [activeTab, setActiveTab] = useState<HelpTab>("contact");
  const [faqSearch, setFaqSearch] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  const tabs: { key: HelpTab; label: string; icon: React.ElementType }[] = [
    { key: "claims", label: "Claims", icon: FileWarning },
    { key: "contact", label: "Contact Us", icon: Phone },
    { key: "faq", label: "FAQ", icon: MessageCircle },
  ];

  return (
    <section id="help" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
            Support
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Help Centre</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-1 bg-muted rounded-xl p-1.5 mb-8">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === key
                    ? "bg-card shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>

          {/* Claims */}
          {activeTab === "claims" && (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-5">
              <h3 className="text-lg font-bold text-foreground">File a Cargo Claim</h3>
              <p className="text-sm text-muted-foreground">Please provide details about your claim and we will investigate promptly.</p>
              <input placeholder="AWB Number" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              <input placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              <input placeholder="Email Address" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50">
                <option value="">Claim Type</option>
                <option>Damage</option>
                <option>Loss</option>
                <option>Delay</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Describe your claim..." rows={4} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none" />
              <button type="submit" className="w-full py-3.5 rounded-lg gradient-gold text-accent-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="h-4 w-4" /> Submit Claim
              </button>
            </form>
          )}

          {/* Contact */}
          {activeTab === "contact" && (
            <div className="grid md:grid-cols-5 gap-6">
              <form onSubmit={handleSubmit} className="md:col-span-3 bg-card rounded-2xl border border-border p-8 shadow-card space-y-5">
                <h3 className="text-lg font-bold text-foreground">Get in Touch</h3>
                <input placeholder="Full Name" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <input placeholder="Email Address" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <input placeholder="Subject" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <textarea placeholder="Your message..." rows={4} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none" />
                <button type="submit" className="w-full py-3.5 rounded-lg gradient-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
              <div className="md:col-span-2 space-y-4">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                  <Mail className="h-5 w-5 text-secondary mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                  <p className="text-sm font-medium text-foreground">cargo@viomair.com</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                  <Phone className="h-5 w-5 text-secondary mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm font-medium text-foreground">+91 44 2256 0000</p>
                </div>
                <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                  <MapPin className="h-5 w-5 text-secondary mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Head Office</p>
                  <p className="text-sm font-medium text-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-5">
              <h3 className="text-lg font-bold text-foreground">Frequently Asked Questions</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>
              <div className="space-y-2">
                {filteredFaqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full text-left px-5 py-4 text-sm font-medium text-foreground flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      {faq.q}
                      <X className={`h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${expandedFaq === i ? "rotate-0" : "rotate-45"}`} />
                    </button>
                    {expandedFaq === i && (
                      <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
                {filteredFaqs.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-6">No matching questions found.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
