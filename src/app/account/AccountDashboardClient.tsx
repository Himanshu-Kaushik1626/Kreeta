"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Calendar,
  Package,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Plus,
  ArrowRight,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { PHONE, WHATSAPP_MSG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function AccountDashboardClient() {
  const [activeTab, setActiveTab] = useState<"overview" | "bookings" | "orders">("overview");

  const mockBookings = [
    {
      id: "KRT-2026-8812",
      service: "Nursing Care at Home (12h Day Shift)",
      patient: "Shanti Devi (74 yrs)",
      caregiver: "Nurse Priya Sharma (GNM)",
      city: "Noida Sector 75",
      status: "Active",
      startDate: "28 Sep 2026",
      endDate: "28 Oct 2026",
      shiftTime: "08:00 AM – 08:00 PM",
    },
  ];

  const mockOrders = [
    {
      id: "KRT-ORD-4192",
      item: "Oxygen Concentrator 5L (Rent - Monthly)",
      status: "Delivered & Active",
      date: "01 Oct 2026",
      amount: 12000,
      deposit: 5000,
    },
    {
      id: "KRT-ORD-3910",
      item: "Comprehensive Full Body Health Checkup",
      status: "Report Ready",
      date: "25 Sep 2026",
      amount: 1999,
      reportUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-surface py-10 md:py-16">
      <div className="container-custom max-w-5xl">
        {/* Welcome card */}
        <div className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8 border border-border-light shadow-card mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary font-bold text-xl">
                RD
              </div>
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Care Account
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-text font-[family-name:var(--font-heading)]">
                  Welcome, Ramesh Das
                </h1>
                <p className="text-xs text-text-muted">+91 98112 34567 • Noida, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/booking">
                <Button variant="primary" size="sm">
                  <Plus className="w-4 h-4 mr-1" /> New Booking
                </Button>
              </Link>
              <Link href="/pay">
                <Button variant="outline" size="sm">
                  Pay Bill Online
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick tab filters */}
          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border-light text-xs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 rounded-[var(--radius-md)] font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:bg-slate-100"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`px-3 py-1.5 rounded-[var(--radius-md)] font-semibold transition-all ${
                activeTab === "bookings"
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:bg-slate-100"
              }`}
            >
              Active Caregiver Shifts ({mockBookings.length})
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-3 py-1.5 rounded-[var(--radius-md)] font-semibold transition-all ${
                activeTab === "orders"
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:bg-slate-100"
              }`}
            >
              Equipment & Lab Orders ({mockOrders.length})
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Active Care Spotlight */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-primary-100 shadow-card p-6">
              <div className="flex items-center justify-between pb-3 border-b border-border-light mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-sm font-bold text-text">Currently Active Care Shift</h3>
                </div>
                <span className="text-xs text-text-muted">Ref: {mockBookings[0].id}</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs mb-4">
                <div>
                  <span className="text-text-muted block">Service:</span>
                  <span className="font-semibold text-text">{mockBookings[0].service}</span>
                </div>
                <div>
                  <span className="text-text-muted block">Assigned Staff:</span>
                  <span className="font-semibold text-primary">{mockBookings[0].caregiver}</span>
                </div>
                <div>
                  <span className="text-text-muted block">Patient:</span>
                  <span className="font-semibold text-text">{mockBookings[0].patient}</span>
                </div>
                <div>
                  <span className="text-text-muted block">Shift Timings:</span>
                  <span className="font-semibold text-text">{mockBookings[0].shiftTime}</span>
                </div>
                <div>
                  <span className="text-text-muted block">Location:</span>
                  <span className="font-semibold text-text">{mockBookings[0].city}</span>
                </div>
                <div>
                  <span className="text-text-muted block">Duration:</span>
                  <span className="font-semibold text-text">
                    {mockBookings[0].startDate} to {mockBookings[0].endDate}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-border-light flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-text-muted">
                  Need to replace caregiver or pause service?
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={WHATSAPP_MSG(`Hi Kreeta, I need assistance with booking ${mockBookings[0].id}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" /> WhatsApp Coordinator
                    </Button>
                  </a>
                  <Link href="/pay">
                    <Button variant="primary" size="sm">
                      Renew Shift
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/equipment"
                className="bg-white p-5 rounded-[var(--radius-lg)] border border-border-light shadow-card hover:border-primary-200 transition-all block group"
              >
                <Package className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-text">Rent Medical Equipment</h4>
                <p className="text-xs text-text-muted mt-1">
                  Order hospital beds, oxygen concentrators, BiPAP with same day setup.
                </p>
              </Link>

              <Link
                href="/lab-tests"
                className="bg-white p-5 rounded-[var(--radius-lg)] border border-border-light shadow-card hover:border-primary-200 transition-all block group"
              >
                <FileText className="w-6 h-6 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-sm font-bold text-text">Book Blood Test at Home</h4>
                <p className="text-xs text-text-muted mt-1">
                  Schedule morning blood sample collection with report in 12-24h.
                </p>
              </Link>

              <div className="bg-primary text-white p-5 rounded-[var(--radius-lg)] shadow-card flex flex-col justify-between">
                <div>
                  <Phone className="w-6 h-6 mb-2 text-white" />
                  <h4 className="text-sm font-bold">24x7 Clinical Helpline</h4>
                  <p className="text-xs text-primary-100 mt-1">
                    Direct access to our senior nursing supervisor.
                  </p>
                </div>
                <a href={`tel:${PHONE}`} className="mt-3 inline-block">
                  <span className="text-xs font-bold underline">Call {PHONE} &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 divide-y divide-border-light">
            {mockBookings.map((b) => (
              <div key={b.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-text">{b.service}</h3>
                  <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full w-fit">
                    {b.status}
                  </span>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 text-xs text-text-muted mb-3">
                  <div>Patient: <strong className="text-text">{b.patient}</strong></div>
                  <div>Staff: <strong className="text-primary">{b.caregiver}</strong></div>
                  <div>Shift: <strong className="text-text">{b.shiftTime}</strong></div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted">Booking Ref: {b.id}</span>
                  <Link href="/pay">
                    <Button variant="outline" size="sm">
                      Extend / Renew
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 divide-y divide-border-light">
            {mockOrders.map((o) => (
              <div key={o.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-text">{o.item}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-primary-50 text-primary">
                      {o.status}
                    </span>
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    Order Ref: {o.id} • Placed on {o.date}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm font-bold text-primary">
                    ₹{o.amount.toLocaleString("en-IN")}
                  </div>
                  {o.reportUrl && (
                    <a
                      href={WHATSAPP_MSG(`Hi Kreeta, please share report PDF for order ${o.id}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Get Report on WhatsApp
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
