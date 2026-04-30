import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Header() {
  const { itemCount, setDrawerOpen } = useCart();

  return (
    <header className="sticky top-0 z-30 bg-card border-b border-border shadow-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="header.logo_link"
        >
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">
              S
            </span>
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight group-hover:text-primary transition-smooth">
            Salt & Harvest
          </span>
        </Link>

        {/* Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="header.menu_link"
          >
            Menu
          </Link>
          <a
            href="#about"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="header.about_link"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="header.contact_link"
          >
            Contact
          </a>
        </nav>

        {/* Cart */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="relative flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-smooth"
          aria-label={`Open cart, ${itemCount} items`}
          data-ocid="header.cart_button"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">Cart</span>
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
