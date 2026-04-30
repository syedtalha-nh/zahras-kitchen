import List "mo:core/List";
import MenuLib "../lib/menu";
import MenuTypes "../types/menu";
import Common "../types/common";

mixin (menuItems : List.List<MenuTypes.MenuItem>) {
  public query func getMenuItems() : async [MenuTypes.MenuItem] {
    MenuLib.getAll(menuItems)
  };

  public query func getMenuItemsByCategory(category : MenuTypes.Category) : async [MenuTypes.MenuItem] {
    MenuLib.getByCategory(menuItems, category)
  };

  public query func getMenuItem(id : Common.ItemId) : async ?MenuTypes.MenuItem {
    MenuLib.getById(menuItems, id)
  };
};
