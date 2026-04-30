import Common "common";

module {
  public type CartItem = {
    itemId : Common.ItemId;
    quantity : Nat;
  };

  public type Cart = {
    items : [CartItem];
    subtotal : Nat; // in cents
    total : Nat;    // in cents
  };
};
