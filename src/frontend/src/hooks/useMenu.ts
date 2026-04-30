import { useMemo } from "react";
import { type Category, MENU_ITEMS } from "../types";

export function useMenuItems() {
  return MENU_ITEMS;
}

export function useMenuItemsByCategory(category: Category) {
  return useMemo(
    () => MENU_ITEMS.filter((item) => item.category === category),
    [category],
  );
}

export function useMenuItem(id: number) {
  return useMemo(() => MENU_ITEMS.find((item) => item.id === id), [id]);
}
