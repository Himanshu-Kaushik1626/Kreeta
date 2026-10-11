"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  CreditCard,
  Building,
  Smartphone,
  Phone,
  MessageCircle,
  ShoppingBag,
  Clock,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CITIES, PHONE, PHONE_RAW, WHATSAPP_MSG } from "@/lib/constants";
import { isValidPhone, isValidEmail } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function CartClient() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    totalDeposit,
    grandTotal,
    cartCount,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "details" | "success">("cart");
  const [orderId, setOrderId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pod" | "upi" | "card">("pod");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Noida",
    address: "",
    pincode: "",
    preferredDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    preferredTime: "Morning (09:00 AM - 12:00 PM)",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateDetails = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!isValidPhone(formData.phone)) errs.phone = "Valid 10-digit phone number is required";
    if (!formData.address.trim()) errs.address = "Complete address is required";
    if (!formData.pincode.trim() || formData.pincode.length < 6)
      errs.pincode = "Valid 6-digit pincode is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDetails()) return;

    const id = `KRT-ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(id);

    const itemsSummary = items
      .map((it) => `• ${it.title} x${it.quantity} (₹${(it.price * it.quantity).toLocaleString("en-IN")})`)
      .join("\n");

    const waMsg = `*📦 NEW EQUIPMENT ORDER (${id})*\n\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.city} - ${formData.pincode}\n` +
      `🏠 *Address:* ${formData.address}\n` +
      `⏰ *Delivery Slot:* ${formData.preferredDate} (${formData.preferredTime})\n` +
      `💵 *Payment Mode:* ${paymentMethod === "pod" ? "Cash on Delivery / Installation" : "Cash on Delivery"}\n\n` +
      `🛒 *Ordered Items:*\n${itemsSummary}\n\n` +
      `💰 *Total Amount:* ₹${grandTotal.toLocaleString("en-IN")}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : "");

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank");

    setCheckoutStep("success");
    clearCart();
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const orderSummaryText = `*ORDER PLACED: ${orderId}*
- Name: ${formData.name}
- Phone: ${formData.phone}
- City: ${formData.city} - ${formData.pincode}
- Address: ${formData.address}
- Preferred Slot: ${formData.preferredDate} (${formData.preferredTime})
- Payment: ${paymentMethod === "pod" ? "Pay on Delivery / Installation" : "Online UPI / Card"}
- Amount: ₹${grandTotal.toLocaleString("en-IN")}`;

  if (checkoutStep === "success") {
    return (
      <div className="min-h-[70vh] bg-bg-surface py-12 md:py-20 flex items-center justify-center">
        <div className="container-custom max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[var(--radius-xl)] border border-emerald-200 p-8 sm:p-10 shadow-elevated text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-3">
              Order Confirmed
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] mb-2">
              Thank You for Your Order!
            </h1>

            <p className="text-xs text-text-secondary max-w-md mx-auto mb-6">
              Your equipment / lab test request has been confirmed. Our operations team is preparing your delivery slot.
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-[var(--radius-lg)] p-4 max-w-xs mx-auto mb-6">
              <div className="text-[11px] text-text-muted font-medium">Order Number</div>
              <div className="text-xl font-black text-primary tracking-wider">{orderId}</div>
            </div>

            <div className="p-4 bg-bg-surface rounded-[var(--radius-md)] text-xs text-left space-y-2 mb-6 border border-border-light">
              <div className="flex justify-between">
                <span className="text-text-muted">Recipient:</span>
                <span className="font-semibold text-text">{formData.name} ({formData.phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Delivery Address:</span>
                <span className="font-semibold text-text truncate max-w-[250px]">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Scheduled Slot:</span>
                <span className="font-semibold text-text">{formData.preferredDate} ({formData.preferredTime})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_MSG(orderSummaryText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="md" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" /> Share Details on WhatsApp
                </Button>
              </a>
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full">
                  Back to Homepage
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] bg-bg-surface py-16 flex items-center justify-center">
        <div className="container-custom max-w-md text-center bg-white rounded-[var(--radius-xl)] p-8 border border-border-light shadow-card">
          <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary mx-auto mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
            Your Healthcare Cart is Empty
          </h2>
          <p className="text-xs text-text-secondary mb-6 leading-relaxed">
            You haven't added any medical equipment rentals or home lab test checkups yet.
          </p>
          <div className="flex flex-col gap-2.5">
            <Link href="/equipment">
              <Button variant="primary" size="md" className="w-full">
                Browse Medical Equipment &rarr;
              </Button>
            </Link>
            <Link href="/lab-tests">
              <Button variant="outline" size="md" className="w-full">
                Browse Lab Tests at Home &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-surface py-10 md:py-16">
      <div className="container-custom max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text font-[family-name:var(--font-heading)]">
            {checkoutStep === "cart" ? "Shopping Cart & Rental Summary" : "Delivery & Patient Details"}
          </h1>
          <p className="text-xs text-text-muted mt-1">
            {checkoutStep === "cart"
              ? "Review your items and proceed to schedule doorstep delivery or collection."
              : "Provide recipient address and preferred timing in Delhi NCR."}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items List or Checkout Form */}
          <div className="lg:col-span-8">
            {checkoutStep === "cart" ? (
              <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-light text-xs font-semibold text-text-muted">
                  <span>Selected Items ({cartCount})</span>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:underline hover:text-red-700"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="divide-y divide-border-light">
                  {items.map((item) => (
                    <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-semibold text-primary uppercase">
                          {item.type === "lab-test"
                            ? "Home Lab Test"
                            : item.type === "equipment-rent"
                            ? `Equipment Rental (${item.rentPeriod})`
                            : "Equipment Purchase"}
                        </span>
                        <h4 className="text-sm font-bold text-text mt-0.5">{item.title}</h4>
                        <div className="text-xs text-text-muted mt-1">
                          ₹{item.price.toLocaleString("en-IN")}{" "}
                          {item.deposit ? `(+ ₹${item.deposit} Refundable Deposit)` : ""}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Quantity */}
                        <div className="inline-flex items-center border border-border rounded-[var(--radius-md)] bg-bg-surface">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-xs text-text-secondary hover:text-text"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 py-1 text-xs font-semibold text-text">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-xs text-text-secondary hover:text-text"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line total */}
                        <div className="text-sm font-bold text-primary w-24 text-right">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-text-muted hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border-light flex justify-between items-center">
                  <Link href="/equipment" className="text-xs font-semibold text-primary hover:underline">
                    &larr; Add More Items
                  </Link>
                  <Button variant="primary" size="md" onClick={() => setCheckoutStep("details")}>
                    Proceed to Delivery <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Checkout Form */
              <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 sm:p-8">
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border-light">
                    <h3 className="text-sm font-bold text-text">Patient / Recipient Contact</h3>
                    <button
                      type="button"
                      onClick={() => setCheckoutStep("cart")}
                      className="text-xs text-primary font-semibold hover:underline"
                    >
                      &larr; Back to Cart
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Recipient or family member"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">City *</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        {CITIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Pincode (Delhi NCR) *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="e.g. 201301"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      {errors.pincode && <p className="text-red-500 text-[11px] mt-1">{errors.pincode}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Complete Delivery Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Flat / Floor / Tower, Society Name, Sector"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    {errors.address && <p className="text-red-500 text-[11px] mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="Urgent (Within 2-4 Hours)">Urgent (Within 2-4 Hours)</option>
                        <option value="Morning (07:00 AM - 10:00 AM)">Morning Fasting (07 AM - 10 AM)</option>
                        <option value="Mid-day (11:00 AM - 02:00 PM)">Mid-day (11 AM - 02 PM)</option>
                        <option value="Evening (04:00 PM - 07:00 PM)">Evening (04 PM - 07 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Payment method */}
                  <div className="pt-2 border-t border-border-light">
                    <label className="block text-xs font-bold text-text mb-2">
                      Payment Method
                    </label>
                    <div className="p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/50 text-emerald-950 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold flex items-center gap-2">
                          <span>Cash on Delivery (COD) / Pay on Delivery</span>
                          <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">Only Option</span>
                        </div>
                        <p className="text-xs text-emerald-800 mt-0.5">
                          Pay cash or UPI directly to our clinical executive upon doorstep delivery, demo & satisfaction. Zero advance payment required.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full mt-4 font-bold">
                    Confirm Order & Schedule Delivery (₹{grandTotal.toLocaleString("en-IN")})
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 space-y-4 sticky top-24">
              <h3 className="text-base font-bold text-text font-[family-name:var(--font-heading)] pb-3 border-b border-border-light">
                Price Breakdown
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-text-muted">Item Subtotal:</span>
                  <span className="font-semibold text-text">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                {totalDeposit > 0 && (
                  <div className="flex justify-between">
                    <span className="text-text-muted">Refundable Security Deposit:</span>
                    <span className="font-semibold text-amber-700">₹{totalDeposit.toLocaleString("en-IN")}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-text-muted">Delhi NCR Delivery & Setup:</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>

                <div className="pt-3 border-t border-border-light flex justify-between items-baseline text-sm">
                  <span className="font-bold text-text">Total Payable:</span>
                  <span className="text-2xl font-black text-primary">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="p-3 bg-bg-surface rounded-[var(--radius-md)] border border-border-light text-[11px] text-text-muted space-y-1.5">
                <div className="flex items-center gap-1.5 text-text font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Kreeta Quality Assurance
                </div>
                <div>• Free biomedical sanitization & demo</div>
                <div>• Return pickup arranged upon call</div>
                <div>• Deposits refunded within 24-48h</div>
              </div>

              <div className="text-center text-xs text-text-muted">
                Need phone assistance?{" "}
                <a href={`tel:${PHONE}`} className="text-primary font-bold hover:underline">
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
