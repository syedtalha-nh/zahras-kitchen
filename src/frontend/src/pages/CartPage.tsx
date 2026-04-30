import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    total,
    itemCount,
  } = useCart();
  const navigate = useNavigate();

  const handleRemove = (itemId: number, name: string) => {
    removeItem(itemId);
    toast.success(`${name} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center"
        data-ocid="cart.empty_state"
      >
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-9 h-9 text-muted-foreground" />
        </div>
        <h1 className="font-display font-bold text-3xl text-foreground">
          Your cart is empty
        </h1>
        <p className="text-muted-foreground mt-3 text-base">
          Add some dishes from our menu to get started.
        </p>
        <Button
          className="mt-8"
          size="lg"
          onClick={() => navigate({ to: "/" })}
          data-ocid="cart.browse_menu_button"
        >
          Browse Menu
        </Button>
      </div>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      data-ocid="cart.page"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Your Cart
          </h1>
          <span className="text-sm text-muted-foreground">
            {itemCount} item{itemCount !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.itemId}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-lg border border-border p-4 flex items-start gap-4"
                data-ocid={`cart.item.${index + 1}`}
              >
                <div className="w-20 h-20 rounded-md overflow-hidden bg-muted shrink-0">
                  <img
                    src={item.image ?? "/assets/images/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-base text-foreground truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.itemId, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                        aria-label="Decrease quantity"
                        data-ocid={`cart.decrease_button.${index + 1}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.itemId, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-smooth"
                        aria-label="Increase quantity"
                        data-ocid={`cart.increase_button.${index + 1}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.itemId, item.name)}
                        className="text-muted-foreground hover:text-destructive transition-smooth"
                        aria-label={`Remove ${item.name}`}
                        data-ocid={`cart.delete_button.${index + 1}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                clearCart();
                toast.success("Cart cleared");
              }}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
              data-ocid="cart.clear_button"
            >
              <Trash2 className="w-4 h-4 mr-1.5" /> Clear cart
            </Button>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="font-display font-bold text-lg text-foreground mb-4">
                Order Summary
              </h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service fee</span>
                  <span>$5.00</span>
                </div>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
              <Button
                className="w-full mt-5 gap-2"
                size="lg"
                onClick={() => navigate({ to: "/checkout" })}
                data-ocid="cart.checkout_button"
              >
                Checkout <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="w-full mt-2"
                onClick={() => navigate({ to: "/" })}
                data-ocid="cart.continue_shopping_button"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
