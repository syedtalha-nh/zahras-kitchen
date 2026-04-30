import Common "common";

module {
  public type Category = {
    #appetizers;
    #mainCourses;
    #desserts;
    #drinks;
  };

  public type MenuItem = {
    id : Common.ItemId;
    name : Text;
    description : Text;
    category : Category;
    price : Nat; // in cents
  };
};
