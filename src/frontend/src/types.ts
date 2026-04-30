export type Category = "appetizers" | "mainCourses" | "desserts" | "drinks";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  image?: string;
}

export interface CartItem {
  itemId: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  total: number;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  appetizers: "Starters",
  mainCourses: "Main Courses",
  desserts: "Desserts",
  drinks: "Drinks",
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Heirloom Bruschetta",
    description:
      "Toasted sourdough with heirloom tomatoes, fresh basil, aged balsamic, and sea salt",
    category: "appetizers",
    price: 14,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 2,
    name: "Burrata & Prosciutto",
    description:
      "Fresh burrata, thinly sliced prosciutto di Parma, fig compote, wild arugula",
    category: "appetizers",
    price: 18,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 3,
    name: "Roasted Beet Salad",
    description:
      "Golden and crimson beets, goat cheese, candied walnuts, honey-lemon vinaigrette",
    category: "appetizers",
    price: 16,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  // Main Courses
  {
    id: 4,
    name: "Herb Roasted Chicken",
    description:
      "Free-range chicken breast, thyme jus, seasonal vegetables, roasted fingerling potatoes",
    category: "mainCourses",
    price: 32,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 5,
    name: "Pan-Seared Salmon",
    description:
      "Wild-caught salmon, lemon herb butter, charred asparagus, cauliflower purée",
    category: "mainCourses",
    price: 36,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 6,
    name: "Braised Short Rib",
    description:
      "72-hour braised beef short rib, truffle mashed potato, red wine reduction, gremolata",
    category: "mainCourses",
    price: 44,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 7,
    name: "Wild Mushroom Risotto",
    description:
      "Arborio rice, porcini, shiitake, truffle oil, aged Parmesan, fresh herbs",
    category: "mainCourses",
    price: 28,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  // Desserts
  {
    id: 8,
    name: "Dark Chocolate Fondant",
    description:
      "Warm valrhona chocolate cake, vanilla bean ice cream, hazelnut praline",
    category: "desserts",
    price: 14,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 9,
    name: "Lemon Tart",
    description:
      "Sicilian lemon curd, almond pastry shell, Italian meringue, candied zest",
    category: "desserts",
    price: 12,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 10,
    name: "Seasonal Fruit Panna Cotta",
    description:
      "Vanilla bean cream, compressed stone fruit, elderflower syrup, micro herbs",
    category: "desserts",
    price: 13,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  // Drinks
  {
    id: 11,
    name: "Sparkling Citrus",
    description:
      "House-made grapefruit shrub, elderflower tonic, fresh mint, crushed ice",
    category: "drinks",
    price: 9,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 12,
    name: "Pinot Noir — Glass",
    description:
      "Willamette Valley, Oregon. Cherry, earth, subtle oak. 2021 vintage",
    category: "drinks",
    price: 16,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
  {
    id: 13,
    name: "Cold Brew Espresso",
    description:
      "Single-origin cold brew, oat milk foam, honey drizzle. Served chilled",
    category: "drinks",
    price: 7,
    image: "/assets/generated/restaurant-hero.dim_1400x700.jpg",
  },
];
