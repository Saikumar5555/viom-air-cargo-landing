import { Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import logo from "@/assets/images/new.svg";

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
    <footer className="bg-[#111a2e] text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="VIOM AIR Cargo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Delivering ultra-secure, white-glove air cargo solutions across global destinations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 logo-gradient-text">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Help Centre", path: "/support" },
                { name: "FAQ", path: "/support/faq" },
                { name: "Track Shipment", path: "#track" },
                { name: "Find Local Office", path: "/support/locations" },
                { name: "Contact Us", path: "/support/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 logo-gradient-text">Stay Connected</h4>
            <div className="flex gap-3 mb-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-colors"
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
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/30 text-white"
              />
              <button type="submit" className="px-4 py-2.5 rounded-lg logo-gradient-bg text-navy font-semibold hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 VIOM AIR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
