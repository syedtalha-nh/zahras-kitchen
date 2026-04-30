import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import MenuTypes "types/menu";
import CartTypes "types/cart";
import OrderTypes "types/order";
import MenuLib "lib/menu";
import MenuApi "mixins/menu-api";
import CartApi "mixins/cart-api";
import OrderApi "mixins/order-api";

actor {
  let menuItems = List.empty<MenuTypes.MenuItem>();
  let carts = Map.empty<Principal, List.List<CartTypes.CartItem>>();
  let orders = List.empty<OrderTypes.OrderSummary>();

  MenuLib.seedMenuItems(menuItems);

  include MenuApi(menuItems);
  include CartApi(carts, menuItems);
  include OrderApi(carts, orders, menuItems);
};
