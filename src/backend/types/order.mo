import Common "common";

module {
  public type OrderStatus = {
    #pending;
    #confirmed;
  };

  public type OrderSummaryItem = {
    itemId : Common.ItemId;
    name : Text;
    quantity : Nat;
    unitPrice : Nat; // in cents
    lineTotal : Nat; // in cents
  };

  public type OrderSummary = {
    orderId : Common.OrderId;
    items : [OrderSummaryItem];
    subtotal : Nat;
    total : Nat;
    status : OrderStatus;
    createdAt : Common.Timestamp;
  };

  public type PlaceOrderResult = {
    #ok : OrderSummary;
    #err : Text;
  };
};
