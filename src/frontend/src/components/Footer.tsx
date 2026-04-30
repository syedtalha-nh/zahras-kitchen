import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer id="contact" className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  S
                </span>
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                Salt & Harvest
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seasonal ingredients, elevated dining. A neighborhood restaurant
              dedicated to honest, beautiful food.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>142 Maple Street, Brooklyn, NY 11201</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+17185551234"
                  className="hover:text-foreground transition-smooth"
                >
                  (718) 555-1234
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div id="about">
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
              Hours
            </h3>
            <ul className="space-y-2">
              {[
                { day: "Mon – Thu", hours: "12:00 – 10:00 PM" },
                { day: "Fri – Sat", hours: "12:00 – 11:00 PM" },
                { day: "Sunday", hours: "11:00 AM – 9:00 PM" },
              ].map(({ day, hours }) => (
                <li
                  key={day}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">{day}</span> —{" "}
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {year} Salt & Harvest. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              className="hover:text-primary transition-smooth underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
