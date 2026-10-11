"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Smartphone,
  Building,
  QrCode,
  ArrowRight,
  Phone,
  MessageCircle,
  Receipt,
  Download,
} from "lucide-react";
import { PHONE, WHATSAPP_MSG, SITE_NAME } from "@/lib/constants";
import { isValidPhone } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function PayClient() {
  const [invoiceRef, setInvoiceRef] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [amount, setAmount] = useState<string>("5000");
  const [purpose, setPurpose] = useState("Caregiver Shift Advance / Renewal");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setError("Please enter patient or payer name.");
      return;
    }
    if (!isValidPhone(patientPhone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid payment amount.");
      return;
    }

    setError("");
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const txn = `TXN-${Date.now().toString().slice(-8)}`;
      setTransactionId(txn);
      setPaymentSuccess(true);
      window.scrollTo({ top: 80, behavior: "smooth" });
    }, 1500);
  };

  const paymentShareMsg = `*PAYMENT CONFIRMATION — KREETA*
- Transaction ID: ${transactionId}
- Invoice / Ref: ${invoiceRef || "Direct Payment"}
- Payer: ${patientName} (${patientPhone})
- Purpose: ${purpose}
- Amount: ₹${Number(amount).toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-bg-surface py-10 md:py-16">
      <div className="container-custom max-w-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Cash on Delivery (COD) & Post-Service Payment Only
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text font-[family-name:var(--font-heading)]">
            Payment & Billing Information
          </h1>
          <p className="text-xs text-text-secondary mt-1">
            We operate on <strong>Cash on Delivery (COD)</strong> — pay cash or UPI to our executive after services are delivered or equipment is installed. Zero advance required.
          </p>
        </div>

        {paymentSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[var(--radius-xl)] border border-emerald-200 p-8 shadow-elevated text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full">
              Payment Successful
            </span>

            <h2 className="text-2xl font-bold text-text mt-3 mb-1 font-[family-name:var(--font-heading)]">
              ₹{Number(amount).toLocaleString("en-IN")} Paid Successfully
            </h2>

            <p className="text-xs text-text-secondary mb-6">
              A receipt has been recorded and an SMS confirmation sent to {patientPhone}.
            </p>

            <div className="bg-bg-surface rounded-[var(--radius-md)] p-4 border border-border-light text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-text-muted">Transaction ID:</span>
                <span className="font-mono font-bold text-text">{transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Payer Name:</span>
                <span className="font-semibold text-text">{patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Payment Purpose:</span>
                <span className="font-semibold text-text">{purpose}</span>
              </div>
              {invoiceRef && (
                <div className="flex justify-between">
                  <span className="text-text-muted">Reference / Invoice:</span>
                  <span className="font-semibold text-text">{invoiceRef}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_MSG(paymentShareMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="md" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" /> Share Receipt on WhatsApp
                </Button>
              </a>
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 sm:p-8">
            <form onSubmit={handlePay} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-[var(--radius-md)]">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-text mb-1">
                  Invoice / Booking Reference (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. KRT-2026-9281 or INV-4512"
                  value={invoiceRef}
                  onChange={(e) => setInvoiceRef(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text mb-1">
                    Payer / Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text mb-1">
                    Mobile Number (For Receipt) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text mb-1">
                  Payment Purpose *
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="Caregiver Shift Advance / Renewal">Caregiver Shift Advance / Renewal</option>
                  <option value="Monthly Nursing Service Bill">Monthly Nursing Service Bill</option>
                  <option value="Equipment Security Deposit">Equipment Security Deposit</option>
                  <option value="Equipment Monthly Rent">Equipment Monthly Rent</option>
                  <option value="Home Lab Test Booking">Home Lab Test Booking</option>
                  <option value="Physiotherapy Package">Physiotherapy Package</option>
                  <option value="Other Medical Fee">Other Medical Fee</option>
                </select>
              </div>

              {/* Amount input with quick select chips */}
              <div>
                <label className="block text-xs font-semibold text-text mb-1">
                  Amount to Pay (INR ₹) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-text-muted text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    required
                    min="100"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-[var(--radius-md)] border border-border text-base font-bold text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["1000", "2500", "5000", "12000", "25000"].map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setAmount(preset)}
                      className={`px-2.5 py-1 text-xs rounded-full border transition-all ${
                        amount === preset
                          ? "bg-primary-50 text-primary border-primary font-bold"
                          : "bg-bg-surface text-text-secondary border-border hover:border-primary-200"
                      }`}
                    >
                      ₹{Number(preset).toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-text mb-2">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label
                    className={`p-3 rounded-[var(--radius-md)] border cursor-pointer text-xs flex flex-col items-center text-center transition-all ${
                      paymentMethod === "upi"
                        ? "border-primary bg-primary-50/40 text-primary font-bold shadow-xs"
                        : "border-border-light text-text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payMethod"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="sr-only"
                    />
                    <Smartphone className="w-5 h-5 mb-1 text-primary" />
                    <span>UPI / QR</span>
                  </label>

                  <label
                    className={`p-3 rounded-[var(--radius-md)] border cursor-pointer text-xs flex flex-col items-center text-center transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary-50/40 text-primary font-bold shadow-xs"
                        : "border-border-light text-text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payMethod"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="sr-only"
                    />
                    <CreditCard className="w-5 h-5 mb-1 text-primary" />
                    <span>Card</span>
                  </label>

                  <label
                    className={`p-3 rounded-[var(--radius-md)] border cursor-pointer text-xs flex flex-col items-center text-center transition-all ${
                      paymentMethod === "netbanking"
                        ? "border-primary bg-primary-50/40 text-primary font-bold shadow-xs"
                        : "border-border-light text-text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payMethod"
                      checked={paymentMethod === "netbanking"}
                      onChange={() => setPaymentMethod("netbanking")}
                      className="sr-only"
                    />
                    <Building className="w-5 h-5 mb-1 text-primary" />
                    <span>Netbanking</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isProcessing}
                className="w-full mt-4 font-bold"
              >
                <Lock className="w-4 h-4 mr-2" /> Pay ₹{Number(amount || 0).toLocaleString("en-IN")}{" "}
                Securely
              </Button>

              <div className="pt-3 border-t border-border-light flex items-center justify-between text-[11px] text-text-muted">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" /> 100% Safe Payment
                </span>
                <span>GST Invoicing Available</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
