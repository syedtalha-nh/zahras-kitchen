import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import OrderLib "../lib/order";
import OrderTypes "../types/order";
import CartTypes "../types/cart";
import MenuTypes "../types/menu";

mixin (
  carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
  orders : List.List<OrderTypes.OrderSummary>,
  menuItems : List.List<MenuTypes.MenuItem>,
) {
  var nextOrderId : Nat = 1;

  public query ({ caller }) func getOrderSummary() : async ?OrderTypes.OrderSummary {
    OrderLib.getOrderSummary(carts, menuItems, caller)
  };

  public shared ({ caller }) func placeOrder() : async OrderTypes.PlaceOrderResult {
    let result = OrderLib.placeOrder(carts, orders, menuItems, caller, nextOrderId);
    switch (result) {
      case (#ok(_)) { nextOrderId += 1 };
      case (#err(_)) {};
    };
    result
  };
};
