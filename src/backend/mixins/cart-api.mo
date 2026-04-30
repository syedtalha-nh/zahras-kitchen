import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import CartLib "../lib/cart";
import CartTypes "../types/cart";
import MenuTypes "../types/menu";
import Common "../types/common";

mixin (
  carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
  menuItems : List.List<MenuTypes.MenuItem>,
) {
  public shared ({ caller }) func addToCart(itemId : Common.ItemId, quantity : Nat) : async () {
    CartLib.addItem(carts, caller, itemId, quantity)
  };

  public shared ({ caller }) func updateCartItem(itemId : Common.ItemId, quantity : Nat) : async () {
    CartLib.updateItemQuantity(carts, caller, itemId, quantity)
  };

  public shared ({ caller }) func removeFromCart(itemId : Common.ItemId) : async () {
    CartLib.removeItem(carts, caller, itemId)
  };

  public shared ({ caller }) func clearCart() : async () {
    CartLib.clearCart(carts, caller)
  };

  public query ({ caller }) func getCart() : async CartTypes.Cart {
    CartLib.getCart(carts, menuItems, caller)
  };
};
