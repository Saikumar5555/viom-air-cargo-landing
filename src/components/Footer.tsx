import { Plane, Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-foreground/10 rounded-lg p-2">
                <Plane className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">VIOM AIR</span>
                <span className="block text-[10px] font-medium tracking-widest uppercase -mt-1 opacity-60">Cargo</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Connecting businesses worldwide with reliable, innovative air cargo solutions across 120+ destinations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Help Centre", "FAQ", "Find Local Office", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#help" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Stay Connected</h4>
            <div className="flex gap-3 mb-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/30"
              />
              <button type="submit" className="px-4 py-2.5 rounded-lg gradient-gold text-accent-foreground hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/40">© 2026 VIOM AIR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
