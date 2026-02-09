import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Plane } from "lucide-react";

const products = [
  { name: "Pharma", href: "#products" },
  { name: "Exquisite", href: "#products" },
  { name: "Drive", href: "#products" },
  { name: "Fresh", href: "#products" },
  { name: "Secure Lift", href: "#products" },
  { name: "Courier", href: "#products" },
];

const navLinks = [
  { name: "Services", href: "#products" },
  { name: "Fleet", href: "#fleet" },
  { name: "About Us", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-nav" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 px-4 lg:px-8 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="gradient-primary rounded-lg p-2">
            <Plane className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              VIOM AIR
            </span>
            <span
              className={`block text-[10px] font-medium tracking-widest uppercase -mt-1 transition-colors ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Cargo
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Products <ChevronDown className="h-4 w-4" />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-card rounded-xl shadow-card-hover border border-border p-2 z-50"
                style={{ animation: "slideDown 0.2s ease-out" }}
              >
                {products.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#help"
            className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg gradient-gold text-accent-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-card-hover p-4 space-y-1">
          <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Products
          </p>
          {products.map((p) => (
            <a
              key={p.name}
              href={p.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted"
            >
              {p.name}
            </a>
          ))}
          <div className="border-t border-border my-2" />
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#help"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-3 px-5 py-2.5 text-sm font-semibold rounded-lg gradient-gold text-accent-foreground"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
