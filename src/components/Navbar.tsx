import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, FileText, Package } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import CapabilitiesDrawer from "./CapabilitiesDrawer";
import QuoteModal from "./QuoteModal";
import TrackShipmentModal from "./TrackShipmentModal";

const centerLinks = [
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "/fleet" },
  { name: "About Us", href: "/about" },
];

const rightLinks = [
  { name: "Contact Us", href: "/support" },
];

import logo from "@/assets/images/new.svg";

interface NavbarProps {
  onSignInClick: () => void;
}

const products = [
  { name: "Charter", href: "/capability/charter" },
  { name: "Pharmaceutical", href: "/capability/pharmaceutical" },
  { name: "Air Freight", href: "/capability/airfreight" },
  { name: "Fresh", href: "/capability/fresh" },
];

export default function Navbar({ onSignInClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [capabilitiesDrawerOpen, setCapabilitiesDrawerOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [trackModalOpen, setTrackModalOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  // Navbar is transparent only on homepage, when not scrolled, and mobile menu is closed


  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (!isHomePage) {
        e.preventDefault();
        navigate("/" + href);
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen || capabilitiesDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen, capabilitiesDrawerOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#111a2e] ${scrolled || mobileOpen ? "shadow-nav" : ""
        }`}
    >
      <div className="max-w-[94%] mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8 py-3 relative">
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0 z-50">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              setMobileOpen(false);
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src={logo}
              alt="VIOM AIR Cargo"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav - Center Links */}
        <div className="hidden lg:flex items-center gap-1 mx-auto">
          <a
            href="/about"
            onClick={(e) => handleLinkClick(e, "/about")}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-white hover:text-gold hover:bg-white/5"
          >
            About Us
          </a>

          {/* Services trigger (formerly Capabilities) */}
          <button
            onClick={() => setCapabilitiesDrawerOpen(true)}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors text-white hover:text-gold hover:bg-white/5"
          >
            Services <ChevronDown className="h-4 w-4" />
          </button>

          {/* <a
            href="/fleet"
            onClick={(e) => handleLinkClick(e, "/fleet")}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-muted"
          >
            Fleet
          </a> */}
        </div>

        {/* Desktop Nav - Right Links */}
        <div className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setTrackModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors text-white hover:text-gold hover:bg-white/5"
          >
            <Package className="h-4 w-4" />
            Track Shipment
          </button>
          {rightLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleLinkClick(e, link.href);
              }}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-white hover:text-gold hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}

          {localStorage.getItem("isAuthenticated") === "true" ? (
            <button
              onClick={() => {
                localStorage.removeItem("isAuthenticated");
                window.location.href = "/";
              }}
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg border border-border text-foreground shadow-sm hover:bg-muted transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={onSignInClick}
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg bg-transparent border border-gold text-white shadow-sm hover:bg-white/10 transition-all"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-white z-50 hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <CapabilitiesDrawer
          isOpen={capabilitiesDrawerOpen}
          onClose={() => setCapabilitiesDrawerOpen(false)}
        />
        <QuoteModal
          open={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
        />
        <TrackShipmentModal
          open={trackModalOpen}
          onClose={() => setTrackModalOpen(false)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy/95 backdrop-blur-xl z-40 lg:hidden transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "0", paddingTop: "80px" }}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 pb-20">
          <div className="space-y-6">

            {/* About Us & Services with Nested Capabilities */}
            <div className="space-y-2">
              <a
                href="/about"
                onClick={(e) => {
                  handleLinkClick(e, "/about");
                  setMobileOpen(false);
                }}
                className="block px-4 py-3 text-base font-medium text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                About Us
              </a>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Nested Products */}
                <div
                  className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                  {products.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      onClick={(e) => {
                        handleLinkClick(e, p.href);
                        setMobileOpen(false);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Then Fleet & Remaining */}
            <div className="border-t border-white/10 pt-6">
              <div className="space-y-2">
                {/* <a
                  href="/fleet"
                  onClick={(e) => {
                    handleLinkClick(e, "/fleet");
                    setMobileOpen(false);
                  }}
                  className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  Fleet
                </a> */}
                <button
                  onClick={() => {
                    setTrackModalOpen(true);
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <Package className="h-5 w-5" />
                  Track Shipment
                </button>
                {rightLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleLinkClick(e, link.href);
                      setMobileOpen(false);
                    }}
                    className="block px-4 py-3 text-base font-medium text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 pb-8">
              {localStorage.getItem("isAuthenticated") === "true" ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("isAuthenticated");
                    window.location.href = "/";
                  }}
                  className="w-full px-5 py-3.5 text-base font-semibold rounded-xl border border-border text-foreground shadow-sm hover:bg-muted transition-colors"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onSignInClick();
                  }}
                  className="w-full px-5 py-3.5 text-base font-semibold rounded-xl bg-transparent border border-gold text-white shadow-lg active:scale-95 hover:bg-white/10 transition-all"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
