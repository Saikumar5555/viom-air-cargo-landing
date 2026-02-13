import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import ProductsDrawer from "./ProductsDrawer";

const centerLinks = [
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "/fleet" },
  { name: "About Us", href: "/about" },
];

const rightLinks = [
  { name: "Support", href: "/support" },
];

import logo from "../assets/images/VIOM AIR.png";

interface NavbarProps {
  onSignInClick: () => void;
}

const products = [
  { name: "CHARTER", href: "#products" },
  { name: "Health Care", href: "#products" },
  { name: "Air Freight", href: "#products" },
  { name: "Fresh", href: "#products" },
];

export default function Navbar({ onSignInClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDrawerOpen, setProductsDrawerOpen] = useState(false);
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
    if (mobileOpen || productsDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen, productsDrawerOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled || mobileOpen ? "shadow-nav" : ""
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
          {/* Products trigger */}
          <button
            onClick={() => setProductsDrawerOpen(true)}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-muted"
          >
            Products <ChevronDown className="h-4 w-4" />
          </button>


          {centerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleLinkClick(e, link.href);
              }}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-muted"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Nav - Right Links */}
        <div className="hidden lg:flex items-center gap-1">
          {rightLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleLinkClick(e, link.href);
              }}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-foreground hover:bg-muted"
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
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg gradient-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-foreground z-50 hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <ProductsDrawer
          isOpen={productsDrawerOpen}
          onClose={() => setProductsDrawerOpen(false)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "0", paddingTop: "80px" }}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 pb-20">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Products
              </p>
              <div className="grid grid-cols-2 gap-2">
                {products.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    onClick={(e) => {
                      handleLinkClick(e, p.href);
                      setMobileOpen(false);
                    }}
                    className="flex items-center px-4 py-3 text-sm font-medium text-foreground bg-muted/30 rounded-lg hover:bg-muted active:scale-95 transition-all"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Services & Company
              </p>
              <div className="space-y-2">
                {centerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleLinkClick(e, link.href);
                      setMobileOpen(false);
                    }}
                    className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <div className="space-y-2">
                {rightLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleLinkClick(e, link.href);
                      setMobileOpen(false);
                    }}
                    className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
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
                  className="w-full px-5 py-3.5 text-base font-semibold rounded-xl gradient-primary text-primary-foreground shadow-lg active:scale-95 transition-all"
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
