import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle, Printer, ScanLine } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

// Restaurant static QR code — embedded as inline SVG modules representing
// a stylized QR visual. For production, replace with actual QR image.
const RESTAURANT_QR_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://saltandharvest.com/verify&bgcolor=fdf7f0&color=2d1a0e&qzone=1";

function QRDisplay({ orderId }: { orderId: string }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://saltandharvest.com/verify?order=${orderId}&bgcolor=fdf7f0&color=2d1a0e&qzone=1`;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-muted/30 rounded-xl p-5 border border-border">
        <img
          src={qrUrl}
          alt={`Order verification QR code for order ${orderId}`}
          className="rounded-lg w-[180px] h-[180px]"
          onError={(e) => {
            // Fallback to static restaurant QR
            (e.target as HTMLImageElement).src = RESTAURANT_QR_URL;
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground text-center max-w-[200px]">
        Show this QR code to staff at the counter for order verification
      </p>
      <p className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">
        Order #{orderId}
      </p>
    </div>
  );
}

export function CheckoutPage() {
  const { items, subtotal, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderName, setOrderName] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const id = Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setOrderTotal(total);
    setOrderName(form.name);
    setPlaced(true);
    clearCart();
    toast.success("Order placed! Show QR code to staff.");
  };

  const handlePrint = () => window.print();

  if (items.length === 0 && !placed) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-24 text-center"
        data-ocid="checkout.empty_state"
      >
        <h1 className="font-display font-bold text-3xl text-foreground">
          Nothing to checkout
        </h1>
        <p className="text-muted-foreground mt-3">
          Your cart is empty. Add some dishes first.
        </p>
        <Button
          className="mt-8"
          onClick={() => navigate({ to: "/" })}
          data-ocid="checkout.browse_menu_button"
        >
          Browse Menu
        </Button>
      </div>
    );
  }

  if (placed) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 sm:px-6 py-16"
        data-ocid="checkout.success_state"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mt-2 text-base">
            Thank you, <strong className="text-foreground">{orderName}</strong>.
            Your order is being prepared.
          </p>
        </motion.div>

        {/* QR Code section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-10 bg-card border border-border rounded-xl p-8"
          data-ocid="checkout.qr_card"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <ScanLine className="w-5 h-5 text-primary" />
            <h2 className="font-display font-bold text-xl text-foreground text-center">
              Order Verification
            </h2>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Show this at the counter when collecting your order
          </p>

          <div className="flex justify-center">
            <QRDisplay orderId={orderId} />
          </div>

          <Separator className="my-6" />

          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-foreground mb-3">
              Order Summary
            </h3>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-mono font-semibold text-primary">
                #{orderId}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Paid</span>
              <span className="font-bold text-foreground">
                ${orderTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Restaurant</span>
              <span className="text-foreground">Salt & Harvest, Brooklyn</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-6 gap-2"
            onClick={handlePrint}
            data-ocid="checkout.print_button"
          >
            <Printer className="w-4 h-4" /> Print Receipt
          </Button>
        </motion.div>

        <Button
          variant="ghost"
          className="w-full mt-4"
          onClick={() => navigate({ to: "/" })}
          data-ocid="checkout.back_to_menu_button"
        >
          Back to Menu
        </Button>
      </div>
    );
  }

  return (
    <div
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      data-ocid="checkout.page"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate({ to: "/cart" })}
        className="mb-6 -ml-2 gap-1.5"
        data-ocid="checkout.back_button"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-10"
      >
        {/* Left: Form */}
        <div className="lg:col-span-3">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-8">
            Checkout
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="bg-card border border-border rounded-xl p-6 space-y-5">
              <h2 className="font-display font-semibold text-lg text-foreground">
                Contact Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, name: e.target.value }));
                      setErrors((er) => ({ ...er, name: "" }));
                    }}
                    placeholder="Jane Smith"
                    className={errors.name ? "border-destructive" : ""}
                    data-ocid="checkout.name_input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="checkout.name_field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, phone: e.target.value }));
                      setErrors((er) => ({ ...er, phone: "" }));
                    }}
                    placeholder="(555) 000-0000"
                    className={errors.phone ? "border-destructive" : ""}
                    data-ocid="checkout.phone_input"
                  />
                  {errors.phone && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="checkout.phone_field_error"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="address" className="text-sm font-medium">
                  Address (optional)
                </Label>
                <textarea
                  id="address"
                  value={form.address}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, address: e.target.value }))
                  }
                  placeholder="123 Main St, Apt 4B, Brooklyn, NY 11201"
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  data-ocid="checkout.address_textarea"
                />
              </div>
            </div>

            {/* QR preview section */}
            <div className="bg-muted/30 border border-border rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <ScanLine className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">
                  In-store QR Verification
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                A unique QR code will be generated after placing your order.
                Show it to staff at the counter.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              data-ocid="checkout.submit_button"
            >
              Place Order — ${total.toFixed(2)}
            </Button>
          </form>
        </div>

        {/* Right: Order summary */}
        <div className="lg:col-span-2">
          <div
            className="bg-card border border-border rounded-xl p-6 sticky top-24"
            data-ocid="checkout.order_summary"
          >
            <h2 className="font-display font-bold text-lg text-foreground mb-4">
              Your Order
            </h2>
            <div className="space-y-3">
              {items.map((item, i) => (
                <div
                  key={item.itemId}
                  className="flex justify-between items-start gap-2 text-sm"
                  data-ocid={`checkout.order_item.${i + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ×{item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service fee</span>
                <span>$5.00</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
