import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";
import {
  CATEGORY_LABELS,
  type Category,
  MENU_ITEMS,
  type MenuItem,
} from "../types";

const CATEGORIES: Category[] = [
  "appetizers",
  "mainCourses",
  "desserts",
  "drinks",
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      itemId: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
    });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-card rounded-lg overflow-hidden border border-border shadow-card hover:shadow-warm transition-smooth group"
      data-ocid={`menu.item.${index + 1}`}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={item.image ?? "/assets/images/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-base text-foreground leading-snug">
          {item.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-display font-bold text-primary text-lg">
            ${item.price}
          </span>
          <Button
            size="sm"
            onClick={handleAdd}
            className="h-8 px-3 gap-1"
            data-ocid={`menu.add_button.${index + 1}`}
          >
            <Plus className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <div data-ocid="menu.page">
      {/* Hero */}
      <section className="relative overflow-hidden bg-card">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/restaurant-hero.dim_1400x700.jpg"
            alt="Salt & Harvest restaurant dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3"
          >
            Seasonal Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl text-primary-foreground leading-none tracking-tight text-balance"
          >
            Salt & Harvest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-primary-foreground/80 mt-4 max-w-md mx-auto"
          >
            Honest ingredients. Beautiful food. Served with intention.
          </motion.p>
          <motion.a
            href="#menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 mt-8 hover:text-primary-foreground transition-smooth"
          >
            See the menu <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* Menu */}
      <section
        id="menu"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Category filters */}
        <div
          className="flex flex-wrap items-center gap-2 mb-10"
          role="tablist"
          aria-label="Menu categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-smooth border ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
            data-ocid="menu.filter.all"
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
              data-ocid={`menu.filter.${cat}`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Category sections */}
        {activeCategory === "all" ? (
          CATEGORIES.map((cat) => {
            const items = MENU_ITEMS.filter((i) => i.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <Badge
                    variant="outline"
                    className="text-xs font-semibold tracking-widest uppercase text-primary border-primary/30 bg-primary/5"
                  >
                    {CATEGORY_LABELS[cat]}
                  </Badge>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Badge
                variant="outline"
                className="text-xs font-semibold tracking-widest uppercase text-primary border-primary/30 bg-primary/5"
              >
                {CATEGORY_LABELS[activeCategory]}
              </Badge>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
