export type Category =
  | "soups"
  | "salads"
  | "vegStarters"
  | "vegTandoori"
  | "nonVegStarterBone"
  | "nonVegStarterBoneless"
  | "rotis"
  | "tandooriWithBone"
  | "softDrinks"
  | "biryaniRice"
  | "specialBiryani"
  | "friedRiceNoodles"
  | "nonVegGravy"
  | "vegGravy"
  | "vegCombo"
  | "rollsVeg"
  | "nonVegCombo"
  | "nonVegRoll"
  | "familyPack";

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
  soups: "Zahra's Special Soup",
  salads: "Zahra's Special Salad",
  vegStarters: "Zahra's Special Veg Starter",
  vegTandoori: "Zahra's Special Veg Tandoori",
  nonVegStarterBone: "Zahra's Non Veg Starter (With Bone)",
  nonVegStarterBoneless: "Zahra's Non Veg Starter (Boneless)",
  rotis: "Roti's",
  tandooriWithBone: "Zahra's Special Tandoori (With Bone)",
  softDrinks: "Soft Drinks",
  biryaniRice: "Zahra's Biryani and Rice",
  specialBiryani: "Zahra's Special Biryani",
  friedRiceNoodles: "Zahra's Fried Rice and Noodles",
  nonVegGravy: "Zahra's Non-Veg Gravy",
  vegGravy: "Zahra's Classic Veg Gravy",
  vegCombo: "Zahra's Veg Combo",
  rollsVeg: "Zahra's Rolls (Veg)",
  nonVegCombo: "Zahra's Non Veg Combo",
  nonVegRoll: "Zahra's Non Veg Roll",
  familyPack: "Zahra's Family Pack",
};

export const MENU_ITEMS: MenuItem[] = [
  // Soups
  {
    id: 1,
    name: "Tomato Soup",
    description: "A rich, tangy tomato soup",
    category: "soups",
    price: 80,
  },
  {
    id: 2,
    name: "Lemon Coriander Soup",
    description: "Light soup with fresh lemon and coriander",
    category: "soups",
    price: 80,
  },
  {
    id: 3,
    name: "Veg Mancho Soup",
    description: "Vegetable manchow soup with crispy noodles",
    category: "soups",
    price: 100,
  },
  {
    id: 4,
    name: "Veg Hot & Sour Soup",
    description: "Spicy and tangy vegetable soup",
    category: "soups",
    price: 100,
  },
  {
    id: 5,
    name: "Chicken Clear Soup",
    description: "Light and flavorful chicken broth",
    category: "soups",
    price: 120,
  },
  {
    id: 6,
    name: "Chicken Mancho Soup",
    description: "Chicken manchow soup with crispy noodles",
    category: "soups",
    price: 120,
  },

  // Salads
  {
    id: 7,
    name: "Green Salad",
    description: "Fresh garden greens",
    category: "salads",
    price: 100,
  },
  {
    id: 8,
    name: "Cucumber Salad",
    description: "Chilled cucumber with seasoning",
    category: "salads",
    price: 80,
  },
  {
    id: 9,
    name: "Raitha Special",
    description: "Yogurt with fresh herbs and vegetables",
    category: "salads",
    price: 90,
  },

  // Veg Starters
  {
    id: 10,
    name: "Mushroom Chilly Dry",
    description: "Crispy mushrooms tossed in spicy chilly sauce",
    category: "vegStarters",
    price: 160,
  },
  {
    id: 11,
    name: "Mushroom Manchurian Dry",
    description: "Mushrooms in tangy manchurian sauce",
    category: "vegStarters",
    price: 160,
  },
  {
    id: 12,
    name: "Baby Corn Chilly Dry",
    description: "Tender baby corn in chilly sauce",
    category: "vegStarters",
    price: 160,
  },
  {
    id: 13,
    name: "Baby Corn Pepper Dry",
    description: "Baby corn with black pepper seasoning",
    category: "vegStarters",
    price: 160,
  },
  {
    id: 14,
    name: "Paneer Chilly Dry",
    description: "Cottage cheese tossed in chilly sauce",
    category: "vegStarters",
    price: 220,
  },
  {
    id: 15,
    name: "Paneer Manchurian Dry",
    description: "Paneer in spicy manchurian sauce",
    category: "vegStarters",
    price: 220,
  },
  {
    id: 16,
    name: "Paneer 65",
    description: "Deep fried spiced paneer",
    category: "vegStarters",
    price: 220,
  },
  {
    id: 17,
    name: "Gobi 65",
    description: "Crispy spiced cauliflower",
    category: "vegStarters",
    price: 150,
  },
  {
    id: 18,
    name: "Gobi Manchurian Dry",
    description: "Cauliflower in manchurian sauce",
    category: "vegStarters",
    price: 150,
  },

  // Veg Tandoori
  {
    id: 19,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled in tandoor",
    category: "vegTandoori",
    price: 220,
  },

  // Non Veg Starter With Bone
  {
    id: 20,
    name: "Spcl Grilled Chicken (Half)",
    description: "Special grilled chicken, half portion",
    category: "nonVegStarterBone",
    price: 180,
  },
  {
    id: 21,
    name: "Spcl Grilled Chicken (Full)",
    description: "Special grilled chicken, full portion",
    category: "nonVegStarterBone",
    price: 350,
  },
  {
    id: 22,
    name: "Spcl Kabab (Half)",
    description: "Special kabab, half portion",
    category: "nonVegStarterBone",
    price: 160,
  },
  {
    id: 23,
    name: "Spcl Kabab (Full)",
    description: "Special kabab, full portion",
    category: "nonVegStarterBone",
    price: 300,
  },
  {
    id: 24,
    name: "Chilly Chicken Dry (Bone)",
    description: "Chicken with bone in spicy chilly sauce",
    category: "nonVegStarterBone",
    price: 200,
  },
  {
    id: 25,
    name: "Pepper Chicken Dry",
    description: "Chicken with bone in pepper sauce",
    category: "nonVegStarterBone",
    price: 200,
  },
  {
    id: 26,
    name: "Kabab Manchurian Dry",
    description: "Kabab in manchurian sauce",
    category: "nonVegStarterBone",
    price: 220,
  },
  {
    id: 27,
    name: "Lemon Chicken Dry (Bone)",
    description: "Chicken with bone in lemon sauce",
    category: "nonVegStarterBone",
    price: 200,
  },
  {
    id: 28,
    name: "Mutton Pepper Dry",
    description: "Mutton with pepper seasoning",
    category: "nonVegStarterBone",
    price: 280,
  },
  {
    id: 29,
    name: "Mutton Chilly Dry",
    description: "Mutton in spicy chilly sauce",
    category: "nonVegStarterBone",
    price: 280,
  },

  // Non Veg Starter Boneless
  {
    id: 30,
    name: "Chilly Chicken Dry",
    description: "Boneless chicken in spicy chilly sauce",
    category: "nonVegStarterBoneless",
    price: 220,
  },
  {
    id: 31,
    name: "Chicken Manchurian Dry",
    description: "Boneless chicken in manchurian sauce",
    category: "nonVegStarterBoneless",
    price: 220,
  },
  {
    id: 32,
    name: "Chicken Pepper Dry",
    description: "Boneless chicken with pepper seasoning",
    category: "nonVegStarterBoneless",
    price: 220,
  },
  {
    id: 33,
    name: "Dragon Chicken Dry",
    description: "Crispy chicken in dragon sauce",
    category: "nonVegStarterBoneless",
    price: 250,
  },
  {
    id: 34,
    name: "Garlic Chicken Dry",
    description: "Boneless chicken with garlic seasoning",
    category: "nonVegStarterBoneless",
    price: 220,
  },
  {
    id: 35,
    name: "Chicken 65 Dry",
    description: "Deep fried spiced chicken",
    category: "nonVegStarterBoneless",
    price: 220,
  },
  {
    id: 36,
    name: "Ginger Chicken Dry",
    description: "Boneless chicken with ginger seasoning",
    category: "nonVegStarterBoneless",
    price: 220,
  },
  {
    id: 37,
    name: "Crispy Chicken Dry",
    description: "Extra crispy fried chicken",
    category: "nonVegStarterBoneless",
    price: 250,
  },
  {
    id: 38,
    name: "Lemon Chicken Dry",
    description: "Boneless chicken in lemon sauce",
    category: "nonVegStarterBoneless",
    price: 250,
  },

  // Rotis
  {
    id: 39,
    name: "Tandoori Roti",
    description: "Classic tandoor-baked roti",
    category: "rotis",
    price: 25,
  },
  {
    id: 40,
    name: "Butter Roti",
    description: "Roti with butter",
    category: "rotis",
    price: 35,
  },
  {
    id: 41,
    name: "Plain Kulcha",
    description: "Soft plain kulcha bread",
    category: "rotis",
    price: 30,
  },
  {
    id: 42,
    name: "Butter Kulcha",
    description: "Kulcha with butter",
    category: "rotis",
    price: 35,
  },
  {
    id: 43,
    name: "Plain Naan",
    description: "Soft plain naan",
    category: "rotis",
    price: 25,
  },
  {
    id: 44,
    name: "Butter Naan",
    description: "Naan with butter",
    category: "rotis",
    price: 30,
  },
  {
    id: 45,
    name: "Rumali Roti",
    description: "Thin handkerchief bread",
    category: "rotis",
    price: 15,
  },
  {
    id: 46,
    name: "Butter Garlic Naan",
    description: "Naan with butter and garlic",
    category: "rotis",
    price: 35,
  },
  {
    id: 47,
    name: "Garlic Naan",
    description: "Naan with garlic",
    category: "rotis",
    price: 30,
  },
  {
    id: 48,
    name: "Dry Chapati",
    description: "Plain dry chapati",
    category: "rotis",
    price: 20,
  },
  {
    id: 49,
    name: "Paneer Parotha",
    description: "Stuffed paneer paratha",
    category: "rotis",
    price: 35,
  },

  // Tandoori With Bone
  {
    id: 50,
    name: "Tandoori Chicken Qtr",
    description: "Quarter tandoori chicken",
    category: "tandooriWithBone",
    price: 120,
  },
  {
    id: 51,
    name: "Tandoori Chicken Half",
    description: "Half tandoori chicken",
    category: "tandooriWithBone",
    price: 180,
  },
  {
    id: 52,
    name: "Tandoori Chicken Full",
    description: "Full tandoori chicken",
    category: "tandooriWithBone",
    price: 350,
  },
  {
    id: 53,
    name: "Pepper Alfaham Qtr",
    description: "Quarter pepper alfaham chicken",
    category: "tandooriWithBone",
    price: 120,
  },
  {
    id: 54,
    name: "Pepper Alfaham Half",
    description: "Half pepper alfaham chicken",
    category: "tandooriWithBone",
    price: 180,
  },
  {
    id: 55,
    name: "Pepper Alfaham Full",
    description: "Full pepper alfaham chicken",
    category: "tandooriWithBone",
    price: 350,
  },
  {
    id: 56,
    name: "Tandoori Kabab (Half)",
    description: "Half tandoori kabab",
    category: "tandooriWithBone",
    price: 200,
  },
  {
    id: 57,
    name: "Tandoori Kabab (Full)",
    description: "Full tandoori kabab",
    category: "tandooriWithBone",
    price: 400,
  },
  {
    id: 58,
    name: "Chicken Tikka Boneless (Half)",
    description: "Half chicken tikka boneless",
    category: "tandooriWithBone",
    price: 220,
  },
  {
    id: 59,
    name: "Chicken Tikka Boneless (Full)",
    description: "Full chicken tikka boneless",
    category: "tandooriWithBone",
    price: 400,
  },
  {
    id: 60,
    name: "Malai Tikka (Half)",
    description: "Half malai tikka",
    category: "tandooriWithBone",
    price: 230,
  },
  {
    id: 61,
    name: "Malai Tikka (Full)",
    description: "Full malai tikka",
    category: "tandooriWithBone",
    price: 420,
  },
  {
    id: 62,
    name: "Haryali Tikka (Half)",
    description: "Half haryali tikka",
    category: "tandooriWithBone",
    price: 230,
  },
  {
    id: 63,
    name: "Haryali Tikka (Full)",
    description: "Full haryali tikka",
    category: "tandooriWithBone",
    price: 400,
  },
  {
    id: 64,
    name: "Kalmi Kabab (Half)",
    description: "Half kalmi kabab",
    category: "tandooriWithBone",
    price: 150,
  },
  {
    id: 65,
    name: "Kalmi Kabab (Full)",
    description: "Full kalmi kabab",
    category: "tandooriWithBone",
    price: 300,
  },

  // Soft Drinks
  {
    id: 66,
    name: "Coco Cola",
    description: "Refreshing Coca-Cola",
    category: "softDrinks",
    price: 45,
  },
  {
    id: 67,
    name: "Mountain Dew",
    description: "Citrusy Mountain Dew",
    category: "softDrinks",
    price: 45,
  },
  {
    id: 68,
    name: "Sprite",
    description: "Refreshing Sprite",
    category: "softDrinks",
    price: 45,
  },

  // Biryani and Rice
  {
    id: 69,
    name: "Mutton Biryani",
    description: "Aromatic mutton biryani",
    category: "biryaniRice",
    price: 280,
  },
  {
    id: 70,
    name: "Chicken Biryani",
    description: "Flavorful chicken biryani",
    category: "biryaniRice",
    price: 150,
  },
  {
    id: 71,
    name: "Egg Biryani",
    description: "Spiced egg biryani",
    category: "biryaniRice",
    price: 120,
  },
  {
    id: 72,
    name: "Veg Biryani",
    description: "Fragrant vegetable biryani",
    category: "biryaniRice",
    price: 120,
  },
  {
    id: 73,
    name: "Jeera Rice",
    description: "Cumin flavored basmati rice",
    category: "biryaniRice",
    price: 100,
  },
  {
    id: 74,
    name: "Ghee Rice",
    description: "Rice cooked with ghee",
    category: "biryaniRice",
    price: 90,
  },
  {
    id: 75,
    name: "Chicken Mughlai Biryani",
    description: "Rich Mughlai style chicken biryani",
    category: "biryaniRice",
    price: 200,
  },
  {
    id: 76,
    name: "Biryani Rice",
    description: "Plain biryani rice",
    category: "biryaniRice",
    price: 100,
  },
  {
    id: 77,
    name: "Prawns Biryani",
    description:
      "Seasonal prawns biryani — Price is seasonal, please ask at the counter",
    category: "biryaniRice",
    price: 0,
  },

  // Special Biryani
  {
    id: 78,
    name: "Grilled Chicken Biryani",
    description: "Half grilled chicken (4pcs), 1.5 rice, brinjal & raita",
    category: "specialBiryani",
    price: 380,
  },
  {
    id: 79,
    name: "Al Faham Chicken Biryani",
    description: "Half Al Faham chicken (4pcs), 1.5 rice, brinjal & raita",
    category: "specialBiryani",
    price: 380,
  },
  {
    id: 80,
    name: "Tandoori Chicken Biryani",
    description: "Half tandoori chicken (4pcs), 1.5 rice, brinjal & raita",
    category: "specialBiryani",
    price: 380,
  },

  // Fried Rice and Noodles
  {
    id: 81,
    name: "Veg Fried Rice",
    description: "Wok-tossed vegetable fried rice",
    category: "friedRiceNoodles",
    price: 110,
  },
  {
    id: 82,
    name: "Egg Fried Rice",
    description: "Fried rice with egg",
    category: "friedRiceNoodles",
    price: 130,
  },
  {
    id: 83,
    name: "Paneer Fried Rice",
    description: "Fried rice with paneer",
    category: "friedRiceNoodles",
    price: 130,
  },
  {
    id: 84,
    name: "Chicken Noodles",
    description: "Stir-fried chicken noodles",
    category: "friedRiceNoodles",
    price: 160,
  },
  {
    id: 85,
    name: "Singapori Chicken Noodles",
    description: "Singapore-style chicken noodles",
    category: "friedRiceNoodles",
    price: 180,
  },
  {
    id: 86,
    name: "Chicken Fried Rice",
    description: "Wok-tossed chicken fried rice",
    category: "friedRiceNoodles",
    price: 160,
  },
  {
    id: 87,
    name: "Prawns Fried Rice",
    description: "Stir-fried rice with prawns",
    category: "friedRiceNoodles",
    price: 190,
  },
  {
    id: 88,
    name: "Chicken Schewan Fried Rice",
    description: "Spicy Schezwan chicken fried rice",
    category: "friedRiceNoodles",
    price: 185,
  },
  {
    id: 89,
    name: "Mix Fried Rice",
    description: "Mixed fried rice with assorted ingredients",
    category: "friedRiceNoodles",
    price: 220,
  },

  // Non Veg Gravy
  {
    id: 90,
    name: "Kadai Chicken (Half)",
    description: "Chicken in kadai masala, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 91,
    name: "Kadai Chicken (Full)",
    description: "Chicken in kadai masala, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 92,
    name: "Chicken Hydrebadi (Half)",
    description: "Hyderabadi style chicken, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 93,
    name: "Chicken Hydrebadi (Full)",
    description: "Hyderabadi style chicken, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 94,
    name: "Chicken Kolapuri (Half)",
    description: "Spicy Kolhapuri chicken, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 95,
    name: "Chicken Kolapuri (Full)",
    description: "Spicy Kolhapuri chicken, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 96,
    name: "Chicken Chettinad (Half)",
    description: "Chettinad spiced chicken, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 97,
    name: "Chicken Chettinad (Full)",
    description: "Chettinad spiced chicken, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 98,
    name: "Chicken Kalimirch (Half)",
    description: "Chicken in black pepper gravy, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 99,
    name: "Chicken Kalimirch (Full)",
    description: "Chicken in black pepper gravy, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 100,
    name: "Chicken Masala (Half)",
    description: "Classic chicken masala, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 101,
    name: "Chicken Masala (Full)",
    description: "Classic chicken masala, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 102,
    name: "Chicken Curry (Half)",
    description: "Traditional chicken curry, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 103,
    name: "Chicken Curry (Full)",
    description: "Traditional chicken curry, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 104,
    name: "Chicken Mughlai (Half)",
    description: "Mughlai style chicken, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 105,
    name: "Chicken Mughlai (Full)",
    description: "Mughlai style chicken, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 106,
    name: "Butter Chicken (Half)",
    description: "Creamy butter chicken, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 107,
    name: "Butter Chicken (Full)",
    description: "Creamy butter chicken, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 108,
    name: "Tandoori Chicken Masala (Half)",
    description: "Tandoori chicken masala, half",
    category: "nonVegGravy",
    price: 265,
  },
  {
    id: 109,
    name: "Tandoori Chicken Masala (Full)",
    description: "Tandoori chicken masala, full",
    category: "nonVegGravy",
    price: 500,
  },
  {
    id: 110,
    name: "Chicken Tikka Masala (Half)",
    description: "Chicken tikka masala, half",
    category: "nonVegGravy",
    price: 220,
  },
  {
    id: 111,
    name: "Chicken Tikka Masala (Full)",
    description: "Chicken tikka masala, full",
    category: "nonVegGravy",
    price: 440,
  },
  {
    id: 112,
    name: "Egg Masala (Half)",
    description: "Egg masala, half",
    category: "nonVegGravy",
    price: 120,
  },
  {
    id: 113,
    name: "Egg Masala (Full)",
    description: "Egg masala, full",
    category: "nonVegGravy",
    price: 440,
  },
  {
    id: 114,
    name: "Spcl Chicken Gravy (Half)",
    description: "Special chicken gravy, half",
    category: "nonVegGravy",
    price: 220,
  },
  {
    id: 115,
    name: "Spcl Chicken Gravy (Full)",
    description: "Special chicken gravy, full",
    category: "nonVegGravy",
    price: 440,
  },
  {
    id: 116,
    name: "Afghani Chicken Masala (Half)",
    description: "Afghani style chicken masala, half",
    category: "nonVegGravy",
    price: 220,
  },
  {
    id: 117,
    name: "Afghani Chicken Masala (Full)",
    description: "Afghani style chicken masala, full",
    category: "nonVegGravy",
    price: 440,
  },
  {
    id: 118,
    name: "Darbar Chicken Masala (Half)",
    description: "Darbar style chicken masala, half",
    category: "nonVegGravy",
    price: 200,
  },
  {
    id: 119,
    name: "Darbar Chicken Masala (Full)",
    description: "Darbar style chicken masala, full",
    category: "nonVegGravy",
    price: 380,
  },
  {
    id: 120,
    name: "Murgh Masala (Half)",
    description: "Murgh masala, half",
    category: "nonVegGravy",
    price: 230,
  },
  {
    id: 121,
    name: "Murgh Masala (Full)",
    description: "Murgh masala, full",
    category: "nonVegGravy",
    price: 380,
  },

  // Veg Gravy
  {
    id: 122,
    name: "Veg Kadai",
    description: "Mixed vegetables in kadai sauce",
    category: "vegGravy",
    price: 150,
  },
  {
    id: 123,
    name: "Paneer Kadai",
    description: "Paneer in kadai sauce",
    category: "vegGravy",
    price: 200,
  },
  {
    id: 124,
    name: "Paneer Butter Masala",
    description: "Creamy paneer butter masala",
    category: "vegGravy",
    price: 200,
  },
  {
    id: 125,
    name: "Mushroom Kadai",
    description: "Mushrooms in kadai sauce",
    category: "vegGravy",
    price: 160,
  },
  {
    id: 126,
    name: "Mushroom Masala",
    description: "Mushrooms in spiced masala",
    category: "vegGravy",
    price: 150,
  },
  {
    id: 127,
    name: "Mix Veg Curry",
    description: "Mixed vegetable curry",
    category: "vegGravy",
    price: 160,
  },
  {
    id: 128,
    name: "Veg Khurma",
    description: "Mild vegetable korma",
    category: "vegGravy",
    price: 160,
  },
  {
    id: 129,
    name: "Dal Fry",
    description: "Tempered lentils",
    category: "vegGravy",
    price: 110,
  },
  {
    id: 130,
    name: "Daal Tadka",
    description: "Tadka lentils with spices",
    category: "vegGravy",
    price: 130,
  },
  {
    id: 131,
    name: "Baby Corn Masala",
    description: "Baby corn in spiced masala",
    category: "vegGravy",
    price: 150,
  },
  {
    id: 132,
    name: "Paneer Tikka Masala",
    description: "Paneer tikka in rich masala",
    category: "vegGravy",
    price: 220,
  },
  {
    id: 133,
    name: "Daal Palak",
    description: "Spinach and lentil curry",
    category: "vegGravy",
    price: 170,
  },
  {
    id: 134,
    name: "Palak Paneer",
    description: "Paneer in creamy spinach gravy",
    category: "vegGravy",
    price: 250,
  },
  {
    id: 135,
    name: "Sai Paneer",
    description: "Paneer in special sauce",
    category: "vegGravy",
    price: 220,
  },

  // Veg Combo
  {
    id: 136,
    name: "Veg Combo 1",
    description: "Tandoori Roti 2pcs, Paneer Butter Masala, Aloo Jeera",
    category: "vegCombo",
    price: 150,
  },
  {
    id: 137,
    name: "Veg Combo 2",
    description: "Ghee Rice, Dal Fry, Aloo Gobi Dry",
    category: "vegCombo",
    price: 150,
  },
  {
    id: 138,
    name: "Veg Combo 3",
    description: "Chapati 2pcs, Paneer Butter Masala",
    category: "vegCombo",
    price: 150,
  },
  {
    id: 139,
    name: "Veg Combo 4",
    description: "Veg Fried Rice, Gobi Manchurian and Dry Sauce",
    category: "vegCombo",
    price: 150,
  },
  {
    id: 140,
    name: "Veg Combo 5",
    description: "Jeera Rice, Dal Fry, Mushroom Pepper Dry",
    category: "vegCombo",
    price: 150,
  },
  {
    id: 141,
    name: "Veg Combo 6",
    description: "Biryani Rice, Brinjal Gravy, Baby Corn Pepper Dry",
    category: "vegCombo",
    price: 150,
  },

  // Rolls Veg
  {
    id: 142,
    name: "Paneer Roll",
    description: "Fresh paneer roll",
    category: "rollsVeg",
    price: 100,
  },
  {
    id: 143,
    name: "Mix Veg Roll",
    description: "Mixed vegetable roll",
    category: "rollsVeg",
    price: 100,
  },
  {
    id: 144,
    name: "Mushroom Roll",
    description: "Mushroom filled roll",
    category: "rollsVeg",
    price: 80,
  },

  // Non Veg Combo
  {
    id: 145,
    name: "Non Veg Combo 1",
    description: "Tandoori Roti 2pcs, Kadai Chicken, Pepper Chicken Dry",
    category: "nonVegCombo",
    price: 180,
  },
  {
    id: 146,
    name: "Non Veg Combo 2",
    description: "Ghee Rice, Dal Fry, Chilly Chicken",
    category: "nonVegCombo",
    price: 180,
  },
  {
    id: 147,
    name: "Non Veg Combo 3",
    description: "Chapati 2pcs, Chicken Varval Kabab",
    category: "nonVegCombo",
    price: 180,
  },
  {
    id: 148,
    name: "Non Veg Combo 4",
    description: "Jeera Rice, Dal Fry, Kabab",
    category: "nonVegCombo",
    price: 180,
  },
  {
    id: 149,
    name: "Non Veg Combo 5",
    description: "Biryani Rice, Brinjal Gravy, Pepper Chicken Dry",
    category: "nonVegCombo",
    price: 180,
  },
  {
    id: 150,
    name: "Non Veg Combo 6",
    description: "Plain Naan 2pcs, Butter Chicken, Chilly Chicken",
    category: "nonVegCombo",
    price: 180,
  },

  // Non Veg Roll
  {
    id: 151,
    name: "Shavarma Roll",
    description: "Classic shawarma roll",
    category: "nonVegRoll",
    price: 70,
  },
  {
    id: 152,
    name: "Egg Roll",
    description: "Egg filled roll",
    category: "nonVegRoll",
    price: 80,
  },
  {
    id: 153,
    name: "Egg Burji Roll",
    description: "Egg bhurji roll",
    category: "nonVegRoll",
    price: 80,
  },
  {
    id: 154,
    name: "Shavarma Jumbo Roll",
    description: "Jumbo shawarma roll",
    category: "nonVegRoll",
    price: 100,
  },
  {
    id: 155,
    name: "Plate Shavarma",
    description: "Shawarma on a plate",
    category: "nonVegRoll",
    price: 150,
  },
  {
    id: 156,
    name: "Chicken Roll",
    description: "Chicken filled roll",
    category: "nonVegRoll",
    price: 110,
  },
  {
    id: 157,
    name: "Chicken Kati Roll",
    description: "Chicken kati roll",
    category: "nonVegRoll",
    price: 110,
  },
  {
    id: 158,
    name: "Chicken Tikka Roll",
    description: "Chicken tikka roll",
    category: "nonVegRoll",
    price: 120,
  },
  {
    id: 159,
    name: "Chilly Chicken Roll",
    description: "Spicy chilly chicken roll",
    category: "nonVegRoll",
    price: 120,
  },

  // Family Pack
  {
    id: 160,
    name: "Family Pack 1",
    description: "Full Grilled Chicken Biryani, 750ml Sprite",
    category: "familyPack",
    price: 900,
  },
  {
    id: 161,
    name: "Family Pack 2",
    description:
      "1kg Biryani Rice, 750ml Sprite, Full Grilled Chicken, 5pcs Boiled Egg",
    category: "familyPack",
    price: 1300,
  },
  {
    id: 162,
    name: "Family Pack 3",
    description: "1kg Biryani, 750ml Sprite, Full Alfaham, 5pcs Boiled Egg",
    category: "familyPack",
    price: 1250,
  },
  {
    id: 163,
    name: "Family Pack 4",
    description:
      "1kg Ghee Rice, 750ml Sprite, Half Kg Butter Chicken, Gravy Full, Kabab",
    category: "familyPack",
    price: 1350,
  },
];
