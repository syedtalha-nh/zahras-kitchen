import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const {
    items,
    updateQuantity,
    removeItem,
    subtotal,
    total,
    itemCount,
    isDrawerOpen,
    setDrawerOpen,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setDrawerOpen(false);
    navigate({ to: "/checkout" });
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-foreground/30 z-40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            data-ocid="cart.backdrop"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-card border-l border-border z-50 flex flex-col shadow-elevated"
            data-ocid="cart.sheet"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-display text-xl font-bold text-foreground">
                  Your Order
                </h2>
                {itemCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-smooth p-1 rounded-md hover:bg-muted"
                aria-label="Close cart"
                data-ocid="cart.close_button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div
                className="flex-1 flex flex-col items-center justify-center gap-4 px-6"
                data-ocid="cart.empty_state"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <ShoppingBag className="w-7 h-7 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Add items from the menu to get started
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setDrawerOpen(false)}
                  data-ocid="cart.browse_menu_button"
                >
                  Browse Menu
                </Button>
              </div>
            ) : (
              <ScrollArea className="flex-1 px-6">
                <div className="py-4 space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.itemId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                      data-ocid={`cart.item.${index + 1}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
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
                        <span className="text-sm font-bold w-4 text-center">
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
                        <button
                          type="button"
                          onClick={() => removeItem(item.itemId)}
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-destructive/10 hover:text-destructive transition-smooth text-muted-foreground"
                          aria-label="Remove item"
                          data-ocid={`cart.delete_button.${index + 1}`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            )}

            {/* Footer with totals */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="font-semibold">$5.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="font-bold text-primary text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleCheckout}
                  data-ocid="cart.checkout_button"
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
