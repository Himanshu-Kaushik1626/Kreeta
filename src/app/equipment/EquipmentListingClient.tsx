"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  Phone,
  MessageCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";
import { equipment, equipmentCategories, Equipment } from "@/data/equipment";
import { useCart } from "@/context/CartContext";
import { PHONE, WHATSAPP_MSG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function EquipmentListingClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pricingMode, setPricingMode] = useState<"rent" | "buy">("rent");
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const { addItem } = useCart();

  const filteredEquipment = equipment.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: Equipment) => {
    if (pricingMode === "buy" || !item.rentPerMonth && !item.rentPerDay) {
      addItem({
        id: `${item.id}-buy`,
        type: "equipment-buy",
        title: `${item.name} (Purchase)`,
        price: item.buyPrice,
        quantity: 1,
        slug: item.slug,
      });
    } else {
      const isDailyVentilator = Boolean(item.rentPerDay);
      const price = isDailyVentilator ? (item.rentPerDay || 2000) : (item.rentPerMonth || item.buyPrice);
      const periodLabel = isDailyVentilator ? "DAY" : "MONTH";

      addItem({
        id: `${item.id}-rent-${periodLabel.toLowerCase()}`,
        type: "equipment-rent",
        title: `${item.name} (Rent - ${periodLabel})`,
        price: price,
        deposit: item.deposit || 0,
        rentPeriod: isDailyVentilator ? "day" : "month",
        quantity: 1,
        slug: item.slug,
      });
    }

    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50/60 via-white to-sky-50/30 border-b border-border-light">
        <div className="container-custom text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold mb-3">
            <Truck className="w-3.5 h-3.5 text-primary" />
            Same-Day Doorstep Delivery & Installation Across Delhi NCR
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight font-[family-name:var(--font-heading)]">
            Medical Equipment Rental & Purchase
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-2xl mx-auto">
            Hospital-grade, sanitized, and calibrated medical devices delivered to your home within 2 to 4 hours. Backed by free biomedical demo, maintenance, and 24x7 helpline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-primary" /> 100% Hospital Grade
            </span>
            <span className="flex items-center gap-1">
              <RotateCcw className="w-4 h-4 text-emerald-600" /> Easy Return & Deposit Refund
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-accent" /> 2-4 Hours Emergency Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom">
          {/* Controls: Search, Mode, Filters */}
          <div className="bg-white rounded-[var(--radius-xl)] p-5 border border-border-light shadow-card mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search equipment (e.g. oxygen, bed, bipap)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* Rent vs Buy Toggle & Rent Duration */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
                <div className="inline-flex rounded-[var(--radius-md)] p-1 bg-bg-surface border border-border">
                  <button
                    onClick={() => setPricingMode("rent")}
                    className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all ${
                      pricingMode === "rent"
                        ? "bg-primary text-white shadow-xs"
                        : "text-text-secondary hover:text-text"
                    }`}
                  >
                    Rent Equipment
                  </button>
                  <button
                    onClick={() => setPricingMode("buy")}
                    className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all ${
                      pricingMode === "buy"
                        ? "bg-primary text-white shadow-xs"
                        : "text-text-secondary hover:text-text"
                    }`}
                  >
                    Buy New
                  </button>
                </div>

              </div>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border-light">
              <span className="text-xs font-semibold text-text mr-1">Category:</span>
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === "All"
                    ? "bg-primary-50 text-primary-800 border border-primary-200 font-semibold"
                    : "bg-white text-text-secondary border border-border hover:border-primary-200"
                }`}
              >
                All Equipment ({equipment.length})
              </button>
              {equipmentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary-50 text-primary-800 border border-primary-200 font-semibold"
                      : "bg-white text-text-secondary border border-border hover:border-primary-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[var(--radius-lg)] border border-border-light p-6 hover:shadow-card-hover hover:border-primary-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Tag & Availability */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary-50 text-primary border border-primary-100">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        In Stock (Delhi NCR)
                      </span>
                    </div>

                    {/* Equipment Photo */}
                    <Link
                      href={`/equipment/${item.slug}`}
                      className="block relative aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 mb-3 group/img"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>

                    <Link href={`/equipment/${item.slug}`} className="group">
                      <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors font-[family-name:var(--font-heading)] mb-2">
                        {item.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-text-secondary line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {/* Specs preview */}
                    <div className="space-y-1 mb-5 p-3 rounded-[var(--radius-md)] bg-bg-surface border border-border-light text-[11px] text-text-muted">
                      {item.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-primary shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-border-light">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        {pricingMode === "rent" ? (
                          item.rentPerDay ? (
                            <>
                              <div className="text-[11px] text-text-muted">Daily Rental Rate</div>
                              <div className="text-xl font-black text-primary">
                                ₹{item.rentPerDay.toLocaleString("en-IN")}{" "}
                                <span className="text-xs font-normal text-text-muted">/ day</span>
                              </div>
                              <div className="text-[10px] text-emerald-600 font-semibold">
                                Monthly: ₹{item.rentPerMonth?.toLocaleString("en-IN")} • Deposit: ₹{item.deposit?.toLocaleString("en-IN")}
                              </div>
                            </>
                          ) : item.rentPerMonth ? (
                            <>
                              <div className="text-[11px] text-text-muted">Monthly Rent</div>
                              <div className="text-xl font-black text-primary">
                                ₹{item.rentPerMonth.toLocaleString("en-IN")}{" "}
                                <span className="text-xs font-normal text-text-muted">/ month</span>
                              </div>
                              <div className="text-[10px] text-text-muted">
                                Refundable Deposit: ₹{item.deposit?.toLocaleString("en-IN")}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-[11px] text-text-muted">Medical Supply</div>
                              <div className="text-xl font-black text-primary">
                                ₹{item.buyPrice.toLocaleString("en-IN")}
                              </div>
                              <div className="text-[10px] text-primary-700 font-medium">
                                Purchase Only (Sterile Pack)
                              </div>
                            </>
                          )
                        ) : (
                          <>
                            <div className="text-[11px] text-text-muted">Brand New Purchase</div>
                            <div className="text-xl font-black text-primary">
                              ₹{item.buyPrice.toLocaleString("en-IN")}
                            </div>
                            <div className="text-[10px] text-emerald-600 font-medium">
                              Includes 1-Yr Warranty + Free Setup
                            </div>
                          </>
                        )}
                      </div>

                      <Link
                        href={`/equipment/${item.slug}`}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        Full Specs &rarr;
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={addedItem === item.id ? "accent" : "primary"}
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                        className="w-full text-xs"
                      >
                        {addedItem === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-1" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5 mr-1" /> Add to Cart
                          </>
                        )}
                      </Button>

                      <a
                        href={WHATSAPP_MSG(`Hi Kreeta, I want to inquire about renting/buying: ${item.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="w-full text-xs">
                          <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Inquire
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-16 bg-white rounded-[var(--radius-xl)] border border-border-light">
              <p className="text-sm font-semibold text-text">No equipment matches your search criteria.</p>
              <p className="text-xs text-text-muted mt-1">
                Looking for a specialized hospital ventilator, monitor, or surgical bed not listed here?
              </p>
              <a href={`tel:${PHONE}`} className="inline-block mt-4">
                <Button variant="primary" size="sm">
                  <Phone className="w-3.5 h-3.5 mr-1.5" /> Call {PHONE} to Request Special Device
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
