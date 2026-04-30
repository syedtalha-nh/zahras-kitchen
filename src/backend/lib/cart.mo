import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import CartTypes "../types/cart";
import MenuTypes "../types/menu";
import Common "../types/common";

module {
  public func getCart(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    menuItems : List.List<MenuTypes.MenuItem>,
    sessionId : Principal,
  ) : CartTypes.Cart {
    let cartItemList = switch (carts.get(sessionId)) {
      case (?list) list;
      case null List.empty<CartTypes.CartItem>();
    };
    let total = calculateTotal(cartItemList, menuItems);
    {
      items = cartItemList.toArray();
      subtotal = total;
      total = total;
    };
  };

  public func addItem(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    sessionId : Principal,
    itemId : Common.ItemId,
    quantity : Nat,
  ) {
    let cartItemList = switch (carts.get(sessionId)) {
      case (?list) list;
      case null {
        let newList = List.empty<CartTypes.CartItem>();
        carts.add(sessionId, newList);
        newList;
      };
    };
    // If item already in cart, increase quantity
    let existing = cartItemList.find(func(ci) { ci.itemId == itemId });
    switch (existing) {
      case (?ci) {
        cartItemList.mapInPlace(func(ci2) {
          if (ci2.itemId == itemId) { { ci2 with quantity = ci2.quantity + quantity } } else { ci2 }
        });
      };
      case null {
        cartItemList.add({ itemId; quantity });
      };
    };
  };

  public func updateItemQuantity(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    sessionId : Principal,
    itemId : Common.ItemId,
    quantity : Nat,
  ) {
    switch (carts.get(sessionId)) {
      case null {};
      case (?cartItemList) {
        if (quantity == 0) {
          let filtered = cartItemList.filter(func(ci) { ci.itemId != itemId });
          cartItemList.clear();
          cartItemList.append(filtered);
        } else {
          cartItemList.mapInPlace(func(ci) {
            if (ci.itemId == itemId) { { ci with quantity } } else { ci }
          });
        };
      };
    };
  };

  public func removeItem(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    sessionId : Principal,
    itemId : Common.ItemId,
  ) {
    switch (carts.get(sessionId)) {
      case null {};
      case (?cartItemList) {
        let filtered = cartItemList.filter(func(ci) { ci.itemId != itemId });
        cartItemList.clear();
        cartItemList.append(filtered);
      };
    };
  };

  public func clearCart(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    sessionId : Principal,
  ) {
    switch (carts.get(sessionId)) {
      case null {};
      case (?cartItemList) { cartItemList.clear() };
    };
  };

  public func calculateTotal(
    cartItems : List.List<CartTypes.CartItem>,
    menuItems : List.List<MenuTypes.MenuItem>,
  ) : Nat {
    cartItems.foldLeft(0, func(acc : Nat, ci : CartTypes.CartItem) : Nat {
      switch (menuItems.find(func(m) { m.id == ci.itemId })) {
        case (?item) acc + item.price * ci.quantity;
        case null acc;
      }
    })
  };
};
