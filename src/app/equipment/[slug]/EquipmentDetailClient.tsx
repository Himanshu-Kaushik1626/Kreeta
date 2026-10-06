"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  PackageCheck,
  Wrench,
  HelpCircle,
} from "lucide-react";
import { Equipment } from "@/data/equipment";
import { useCart } from "@/context/CartContext";
import { PHONE, WHATSAPP_MSG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface Props {
  item: Equipment;
  relatedItems: Equipment[];
}

export default function EquipmentDetailClient({ item, relatedItems }: Props) {
  const defaultPlan: "day" | "month" | "buy" = item.rentPerDay ? "day" : item.rentPerMonth ? "month" : "buy";
  const [selectedPlan, setSelectedPlan] = useState<"month" | "day" | "buy">(defaultPlan);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const getPrice = () => {
    switch (selectedPlan) {
      case "day":
        return item.rentPerDay || 2000;
      case "month":
        return item.rentPerMonth || item.buyPrice;
      case "buy":
        return item.buyPrice;
    }
  };

  const handleAddToCart = () => {
    if (selectedPlan === "buy") {
      addItem({
        id: `${item.id}-buy`,
        type: "equipment-buy",
        title: `${item.name} (Purchase)`,
        price: item.buyPrice,
        quantity: quantity,
        slug: item.slug,
      });
    } else {
      addItem({
        id: `${item.id}-rent-${selectedPlan}`,
        type: "equipment-rent",
        title: `${item.name} (Rent - ${selectedPlan.toUpperCase()})`,
        price: getPrice(),
        deposit: item.deposit || 0,
        rentPeriod: selectedPlan,
        quantity: quantity,
        slug: item.slug,
      });
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const whatsappInquiry = `Hi Kreeta, I am interested in ${item.name} (${selectedPlan === "buy" ? "Purchase" : `Rent - ${selectedPlan}`}). Please share delivery schedule.`;

  return (
    <div className="min-h-screen bg-bg-surface py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-text-muted mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/equipment" className="hover:text-primary transition-colors">
            Equipment
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text font-medium truncate max-w-xs">{item.name}</span>
        </nav>

        {/* Product Overview Card */}
        <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 sm:p-10 mb-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visual representation & Badges */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square sm:aspect-[4/3] bg-slate-50 rounded-2xl border border-border-light p-6 flex items-center justify-center overflow-hidden group shadow-inner">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/90 backdrop-blur-sm text-emerald-800 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Immediate Delivery
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-600 border border-slate-200 shadow-xs">
                    ISO / CE Certified
                  </span>
                </div>
              </div>

              {/* Delivery info chips */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-bg-surface rounded-[var(--radius-md)] border border-border-light flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <div className="font-bold text-text">2-4 Hrs Delivery</div>
                    <div className="text-[11px] text-text-muted">All Delhi NCR</div>
                  </div>
                </div>
                <div className="p-3 bg-bg-surface rounded-[var(--radius-md)] border border-border-light flex items-center gap-2.5">
                  <Wrench className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="font-bold text-text">Free Installation</div>
                    <div className="text-[11px] text-text-muted">Biomedical demo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing, Plans & Add to Cart */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-100 text-primary-800">
                  {item.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-text mt-2 font-[family-name:var(--font-heading)]">
                  {item.name}
                </h1>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Rental vs Buy Plan Selector */}
              <div>
                <label className="block text-xs font-bold text-text uppercase tracking-wider mb-2.5">
                  Choose Rental Period or Purchase
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {item.rentPerDay && (
                    <button
                      onClick={() => setSelectedPlan("day")}
                      className={`p-3.5 rounded-[var(--radius-md)] border text-left transition-all ${
                        selectedPlan === "day"
                          ? "border-primary bg-primary-50/50 shadow-xs ring-2 ring-primary/20"
                          : "border-border-light hover:border-border hover:bg-slate-50"
                      }`}
                    >
                      <div className="text-[11px] font-semibold text-text-muted">Daily Rental Rate</div>
                      <div className="text-lg font-bold text-primary">₹{item.rentPerDay.toLocaleString("en-IN")}</div>
                      <div className="text-[10px] text-text-muted">Per day clinical support</div>
                    </button>
                  )}

                  {item.rentPerMonth && (
                    <button
                      onClick={() => setSelectedPlan("month")}
                      className={`p-3.5 rounded-[var(--radius-md)] border text-left transition-all ${
                        selectedPlan === "month"
                          ? "border-primary bg-primary-50/50 shadow-xs ring-2 ring-primary/20"
                          : "border-border-light hover:border-border hover:bg-slate-50"
                      }`}
                    >
                      <div className="text-[11px] font-semibold text-text-muted">Monthly Rental</div>
                      <div className="text-lg font-bold text-primary">₹{item.rentPerMonth.toLocaleString("en-IN")}</div>
                      <div className="text-[10px] text-emerald-600 font-medium">30 Days (Full Maintenance)</div>
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedPlan("buy")}
                    className={`p-3.5 rounded-[var(--radius-md)] border text-left transition-all ${
                      selectedPlan === "buy"
                        ? "border-primary bg-primary-50/50 shadow-xs ring-2 ring-primary/20"
                        : "border-border-light hover:border-border hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-[11px] font-semibold text-text-muted">
                      {item.rentPerMonth || item.rentPerDay ? "Buy Brand New" : "Purchase Pack"}
                    </div>
                    <div className="text-lg font-bold text-primary">₹{item.buyPrice.toLocaleString("en-IN")}</div>
                    <div className="text-[10px] text-emerald-600 font-medium">
                      {item.rentPerMonth || item.rentPerDay ? "1 Yr Warranty + Free Setup" : "Sterile Sealed Unit"}
                    </div>
                  </button>
                </div>
              </div>

              {/* Deposit notice for rentals */}
              {selectedPlan !== "buy" && item.deposit && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-[var(--radius-md)] text-xs text-amber-900 flex items-center justify-between">
                  <span>
                    <strong>Refundable Security Deposit:</strong> ₹{item.deposit.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-amber-700">100% Refunded on device return</span>
                </div>
              )}

              {/* Quantity & CTA Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center border border-border rounded-[var(--radius-md)] bg-bg-surface">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-sm font-bold text-text-secondary hover:text-text"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-semibold text-text">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-sm font-bold text-text-secondary hover:text-text"
                  >
                    +
                  </button>
                </div>

                <Button
                  variant={added ? "accent" : "primary"}
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[200px]"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 mr-2" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart (₹
                      {(getPrice() * quantity).toLocaleString("en-IN")})
                    </>
                  )}
                </Button>

                <a
                  href={WHATSAPP_MSG(whatsappInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <MessageCircle className="w-4 h-4 mr-1 text-emerald-600" /> WhatsApp
                  </Button>
                </a>
              </div>

              {/* Cart link banner if added */}
              {added && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-50 border border-emerald-200 rounded-[var(--radius-md)] flex items-center justify-between text-xs"
                >
                  <span className="text-emerald-900 font-medium">
                    Item successfully added to your shopping cart!
                  </span>
                  <Link href="/cart" className="font-bold text-emerald-700 underline hover:text-emerald-900">
                    Go to Cart &rarr;
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-4">
            Technical Specifications & Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {item.specs.map((spec, i) => {
              const [k, v] = spec.split(":");
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-[var(--radius-md)] bg-bg-surface border border-border-light text-xs"
                >
                  <span className="font-medium text-text-muted">{k?.trim() || spec}</span>
                  <span className="font-semibold text-text">{v?.trim() || "Yes"}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Equipment */}
        {relatedItems.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-4">
              Related Medical Equipment
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedItems.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-[var(--radius-lg)] border border-border-light p-5 hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <Link href={`/equipment/${rel.slug}`} className="block relative aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 mb-2.5">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-contain p-2 hover:scale-105 transition-transform"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </Link>
                    <span className="text-[11px] font-semibold text-primary">{rel.category}</span>
                    <h3 className="text-sm font-bold text-text mt-1 font-[family-name:var(--font-heading)]">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 line-clamp-2">{rel.description}</p>
                  </div>
                  <div className="pt-3 border-t border-border-light mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-text-muted block">Rent from</span>
                      <span className="text-xs font-bold text-primary">₹{rel.rentPerMonth} / mo</span>
                    </div>
                    <Link
                      href={`/equipment/${rel.slug}`}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
