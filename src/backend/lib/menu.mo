import List "mo:core/List";
import Types "../types/menu";
import Common "../types/common";

module {
  public func seedMenuItems(items : List.List<Types.MenuItem>) {
    // Appetizers
    items.add({ id = 1; name = "Spring Rolls"; description = "Crispy vegetable spring rolls served with sweet chilli sauce"; category = #appetizers; price = 699 });
    items.add({ id = 2; name = "Soup of the Day"; description = "Chef's daily soup with crusty bread"; category = #appetizers; price = 549 });
    items.add({ id = 3; name = "Garlic Bread"; description = "Toasted baguette with herb-infused garlic butter"; category = #appetizers; price = 399 });
    items.add({ id = 4; name = "Caesar Salad"; description = "Romaine lettuce, croutons, parmesan and classic Caesar dressing"; category = #appetizers; price = 749 });
    // Main Courses
    items.add({ id = 5; name = "Grilled Salmon"; description = "Atlantic salmon fillet with lemon butter sauce and seasonal vegetables"; category = #mainCourses; price = 1899 });
    items.add({ id = 6; name = "Beef Burger"; description = "Juicy 200g beef patty with lettuce, tomato, pickles and fries"; category = #mainCourses; price = 1499 });
    items.add({ id = 7; name = "Margherita Pizza"; description = "Wood-fired pizza with tomato sauce, fresh mozzarella and basil"; category = #mainCourses; price = 1299 });
    items.add({ id = 8; name = "Chicken Alfredo"; description = "Penne pasta with grilled chicken in a creamy parmesan Alfredo sauce"; category = #mainCourses; price = 1399 });
    // Desserts
    items.add({ id = 9; name = "Chocolate Lava Cake"; description = "Warm chocolate cake with a molten centre, served with vanilla ice cream"; category = #desserts; price = 799 });
    items.add({ id = 10; name = "Cheesecake"; description = "New York style cheesecake with a berry coulis"; category = #desserts; price = 699 });
    items.add({ id = 11; name = "Tiramisu"; description = "Classic Italian dessert with mascarpone, espresso and cocoa"; category = #desserts; price = 749 });
    items.add({ id = 12; name = "Ice Cream Sundae"; description = "Three scoops of ice cream with chocolate sauce, whipped cream and a cherry"; category = #desserts; price = 599 });
    // Drinks
    items.add({ id = 13; name = "Fresh Lemonade"; description = "Hand-squeezed lemonade with mint and ice"; category = #drinks; price = 349 });
    items.add({ id = 14; name = "Iced Coffee"; description = "Cold brew coffee served over ice with a splash of cream"; category = #drinks; price = 399 });
    items.add({ id = 15; name = "Mango Smoothie"; description = "Blended fresh mango with yoghurt and honey"; category = #drinks; price = 449 });
    items.add({ id = 16; name = "Sparkling Water"; description = "Chilled sparkling mineral water (500 ml)"; category = #drinks; price = 249 });
  };

  public func getAll(items : List.List<Types.MenuItem>) : [Types.MenuItem] {
    items.toArray()
  };

  public func getById(items : List.List<Types.MenuItem>, id : Common.ItemId) : ?Types.MenuItem {
    items.find(func(item) { item.id == id })
  };

  public func getByCategory(items : List.List<Types.MenuItem>, category : Types.Category) : [Types.MenuItem] {
    items.filter(func(item) { item.category == category }).toArray()
  };
};
