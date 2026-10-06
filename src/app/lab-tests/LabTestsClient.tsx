"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ShoppingCart,
  Phone,
  MessageCircle,
  Search,
  Filter,
  AlertCircle,
  FileText,
  UserCheck,
  ChevronDown,
  Check,
  Sparkles,
} from "lucide-react";
import { labPackages, LabPackage } from "@/data/labTests";
import { useCart } from "@/context/CartContext";
import { PHONE, WHATSAPP_MSG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function LabTestsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const { addItem } = useCart();

  const categories = ["All", "Full Body", "Senior Citizen", "Essential", "Organ Specific", "Specialized"];

  const filteredPackages = labPackages.filter((pkg) => {
    const matchesCategory =
      selectedCategory === "All" || pkg.category === selectedCategory;
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.testsIncluded.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (pkg: LabPackage) => {
    addItem({
      id: pkg.id,
      type: "lab-test",
      title: pkg.name,
      price: pkg.price,
      quantity: 1,
      slug: pkg.slug,
    });

    setAddedItem(pkg.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50/60 via-white to-sky-50/30 border-b border-border-light">
        <div className="container-custom text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% NABL & ICMR Accredited Partner Laboratories
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight font-[family-name:var(--font-heading)]">
            Lab Tests & Health Checkups at Home
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-2xl mx-auto">
            Book professional home sample collection across Delhi NCR. Certified phlebotomists, sterile sealed vacutainer needles, and smart digital reports delivered right to your WhatsApp within 12 to 24 hours.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl mx-auto text-left">
            <div className="p-3 bg-white/90 rounded-[var(--radius-md)] border border-border-light shadow-soft flex items-center gap-2.5">
              <UserCheck className="w-4 h-4 text-primary shrink-0" />
              <div>
                <div className="text-xs font-bold text-text">Trained Phlebotomist</div>
                <div className="text-[10px] text-text-muted">Safe, gentle collection</div>
              </div>
            </div>
            <div className="p-3 bg-white/90 rounded-[var(--radius-md)] border border-border-light shadow-soft flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <div>
                <div className="text-xs font-bold text-text">Reports in 12-24h</div>
                <div className="text-[10px] text-text-muted">On WhatsApp & Email</div>
              </div>
            </div>
            <div className="p-3 bg-white/90 rounded-[var(--radius-md)] border border-border-light shadow-soft flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-text">NABL Certified</div>
                <div className="text-[10px] text-text-muted">100% accurate results</div>
              </div>
            </div>
            <div className="p-3 bg-white/90 rounded-[var(--radius-md)] border border-border-light shadow-soft flex items-center gap-2.5">
              <FlaskConical className="w-4 h-4 text-purple-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-text">Barcoded Tubes</div>
                <div className="text-[10px] text-text-muted">Zero mix-up guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter and Listing */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom">
          {/* Search & Category Filter Bar */}
          <div className="bg-white rounded-[var(--radius-xl)] p-5 border border-border-light shadow-card mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search test name, organ or parameter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
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
          </div>

          {/* Test Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPackages.map((pkg) => {
              const isExpanded = expandedPackage === pkg.id;
              const discountPercent = Math.round(
                ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
              );

              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-[var(--radius-xl)] border transition-all p-6 flex flex-col justify-between ${
                    pkg.popular
                      ? "border-primary-200 shadow-md ring-1 ring-primary/20"
                      : "border-border-light shadow-card hover:shadow-card-hover"
                  }`}
                >
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary-50 text-primary">
                          {pkg.category}
                        </span>
                        {pkg.popular && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent-50 text-accent border border-accent-100 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Most Popular
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-text-muted">
                        {pkg.parametersCount} Parameters Included
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-text-muted mb-4 py-2 px-3 rounded-[var(--radius-md)] bg-bg-surface border border-border-light">
                      <span>
                        <strong>Sample:</strong> {pkg.sampleType}
                      </span>
                      <span>•</span>
                      <span>
                        <strong>Fasting:</strong>{" "}
                        {pkg.fastingRequired
                          ? `Yes (${pkg.fastingHours} hrs)`
                          : "Not Required"}
                      </span>
                      <span>•</span>
                      <span>
                        <strong>Report:</strong> {pkg.reportTurnaround}
                      </span>
                    </div>

                    {/* Expandable Tests List */}
                    <div className="mb-4">
                      <button
                        onClick={() =>
                          setExpandedPackage(isExpanded ? null : pkg.id)
                        }
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                      >
                        {isExpanded ? "Hide Included Tests" : "View All Included Tests"}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 space-y-1.5 text-xs text-text-secondary pl-2 border-l-2 border-primary-200"
                          >
                            {pkg.testsIncluded.map((test, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{test}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-primary">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-text-muted line-through">
                          ₹{pkg.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs font-bold text-emerald-600">
                          {discountPercent}% OFF
                        </span>
                      </div>
                      <span className="text-[10px] text-text-muted">
                        Free home collection on orders above ₹500
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant={addedItem === pkg.id ? "accent" : "primary"}
                        size="sm"
                        onClick={() => handleAddToCart(pkg)}
                      >
                        {addedItem === pkg.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 mr-1" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5 mr-1" /> Book Home Sample
                          </>
                        )}
                      </Button>
                      <a
                        href={WHATSAPP_MSG(`Hi Kreeta, I want to book the ${pkg.name} (₹${pkg.price}) for home sample collection.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick FAQ / Assistance Card */}
          <div className="mt-12 bg-white rounded-[var(--radius-xl)] p-6 sm:p-8 border border-border-light shadow-card text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
              Have a Doctor's Prescription for Specific Blood Tests?
            </h3>
            <p className="text-xs text-text-secondary max-w-md mx-auto mb-4">
              Simply upload or send your prescription via WhatsApp. Our pathologist will organize the exact tests and schedule your morning home visit.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_MSG("Hi Kreeta Path Lab, I have a doctor prescription for blood tests. Can I share it here?")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md" className="bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-1.5" /> Send Prescription on WhatsApp
                </Button>
              </a>
              <a href={`tel:${PHONE}`}>
                <Button variant="outline" size="md">
                  <Phone className="w-4 h-4 mr-1.5 text-primary" /> Call {PHONE}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
