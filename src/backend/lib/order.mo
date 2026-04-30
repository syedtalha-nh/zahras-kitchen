import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import OrderTypes "../types/order";
import CartTypes "../types/cart";
import MenuTypes "../types/menu";
import CartLib "cart";

module {
  public func getOrderSummary(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    menuItems : List.List<MenuTypes.MenuItem>,
    sessionId : Principal,
  ) : ?OrderTypes.OrderSummary {
    let cartItemList = switch (carts.get(sessionId)) {
      case (?list) list;
      case null return null;
    };
    if (cartItemList.isEmpty()) return null;
    let summaryItems = cartItemList.map<CartTypes.CartItem, OrderTypes.OrderSummaryItem>(func(ci) {
      let item = switch (menuItems.find(func(m) { m.id == ci.itemId })) {
        case (?m) m;
        case null { { id = ci.itemId; name = "Unknown"; description = ""; category = #appetizers; price = 0 } };
      };
      {
        itemId = ci.itemId;
        name = item.name;
        quantity = ci.quantity;
        unitPrice = item.price;
        lineTotal = item.price * ci.quantity;
      };
    });
    let total = CartLib.calculateTotal(cartItemList, menuItems);
    ?{
      orderId = 0;
      items = summaryItems.toArray();
      subtotal = total;
      total = total;
      status = #pending;
      createdAt = Time.now();
    };
  };

  public func placeOrder(
    carts : Map.Map<Principal, List.List<CartTypes.CartItem>>,
    orders : List.List<OrderTypes.OrderSummary>,
    menuItems : List.List<MenuTypes.MenuItem>,
    sessionId : Principal,
    nextOrderId : Nat,
  ) : OrderTypes.PlaceOrderResult {
    let cartItemList = switch (carts.get(sessionId)) {
      case (?list) list;
      case null return #err("Cart is empty");
    };
    if (cartItemList.isEmpty()) return #err("Cart is empty");
    let summaryItems = cartItemList.map<CartTypes.CartItem, OrderTypes.OrderSummaryItem>(func(ci) {
      let item = switch (menuItems.find(func(m) { m.id == ci.itemId })) {
        case (?m) m;
        case null { { id = ci.itemId; name = "Unknown"; description = ""; category = #appetizers; price = 0 } };
      };
      {
        itemId = ci.itemId;
        name = item.name;
        quantity = ci.quantity;
        unitPrice = item.price;
        lineTotal = item.price * ci.quantity;
      };
    });
    let total = CartLib.calculateTotal(cartItemList, menuItems);
    let order : OrderTypes.OrderSummary = {
      orderId = nextOrderId;
      items = summaryItems.toArray();
      subtotal = total;
      total = total;
      status = #confirmed;
      createdAt = Time.now();
    };
    orders.add(order);
    cartItemList.clear();
    #ok(order);
  };
};
