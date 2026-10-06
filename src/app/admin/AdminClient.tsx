"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  Package,
  Activity,
  DollarSign,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Phone,
  MessageCircle,
  AlertTriangle,
  ArrowUpRight,
  Shield,
  FileText,
  UserCheck,
  Building,
} from "lucide-react";
import { PHONE, WHATSAPP_MSG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface BookingRecord {
  id: string;
  patientName: string;
  phone: string;
  service: string;
  city: string;
  shift: string;
  startDate: string;
  caregiver: string;
  status: "Pending" | "Active" | "Completed" | "Cancelled";
  amount: number;
}

interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  service: string;
  city: string;
  time: string;
  status: "New" | "Contacted" | "Converted";
}

export default function AdminClient() {
  const [activeTab, setActiveTab] = useState<"bookings" | "inquiries" | "equipment" | "staff">("bookings");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const [bookings, setBookings] = useState<BookingRecord[]>([
    {
      id: "KRT-2026-9182",
      patientName: "Nirmala Devi (72y)",
      phone: "+91 98112 34567",
      service: "Nursing Care at Home",
      city: "Noida Sector 75",
      shift: "12h Day (30 Days)",
      startDate: "28 Sep 2026",
      caregiver: "Nurse Priya Sharma (GNM)",
      status: "Active",
      amount: 32000,
    },
    {
      id: "KRT-2026-9180",
      patientName: "Dr. O. P. Gupta (81y)",
      phone: "+91 98711 22334",
      service: "General Duty Assistant (GDA)",
      city: "Greater Noida West",
      shift: "24h Live-in",
      startDate: "02 Oct 2026",
      caregiver: "Attendant Manoj Kumar",
      status: "Pending",
      amount: 28000,
    },
    {
      id: "KRT-2026-9175",
      patientName: "Kavita Mehra (65y)",
      phone: "+91 99990 88776",
      service: "Physiotherapy at Home",
      city: "Delhi (South Ext)",
      shift: "10 Sessions Package",
      startDate: "20 Sep 2026",
      caregiver: "Dr. Rohit Verma (BPT)",
      status: "Active",
      amount: 8000,
    },
    {
      id: "KRT-2026-9168",
      patientName: "Col. S. K. Bakshi (79y)",
      phone: "+91 98101 55443",
      service: "ICU Setup & Critical Care",
      city: "Gurgaon Phase 2",
      shift: "24h Dual Nursing",
      startDate: "15 Sep 2026",
      caregiver: "Sister Deepa & Brother Amit",
      status: "Active",
      amount: 85000,
    },
    {
      id: "KRT-2026-9150",
      patientName: "Anjali Saxena (45y)",
      phone: "+91 98765 43210",
      service: "Post-Surgical Dressing",
      city: "Ghaziabad (Indirapuram)",
      shift: "Per Visit",
      startDate: "25 Sep 2026",
      caregiver: "Nurse Sunita Rawat",
      status: "Completed",
      amount: 2500,
    },
  ]);

  const [inquiries, setInquiries] = useState<InquiryRecord[]>([
    {
      id: "INQ-402",
      name: "Suresh Mathur",
      phone: "+91 98188 99001",
      service: "Urgent Injection / IV Cannulation",
      city: "Noida Sector 50",
      time: "10 mins ago",
      status: "New",
    },
    {
      id: "INQ-401",
      name: "Rekha Chawla",
      phone: "+91 98733 44556",
      service: "Oxygen Concentrator 5L Rental",
      city: "Greater Noida (Gaur City 2)",
      time: "45 mins ago",
      status: "Contacted",
    },
    {
      id: "INQ-400",
      name: "Amit Singhal",
      phone: "+91 99100 11223",
      service: "Elderly Caretaker 12h Night",
      city: "Faridabad Sector 15",
      time: "2 hours ago",
      status: "Converted",
    },
  ]);

  const updateBookingStatus = (id: string, newStatus: BookingRecord["status"]) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.patientName.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.caregiver.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-bg-surface py-8">
      <div className="container-custom">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-light mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Kreeta Clinical Operations Hub
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text font-[family-name:var(--font-heading)]">
              Admin & Dispatch Control Center
            </h1>
            <p className="text-xs text-text-muted">
              Real-time patient deployments, equipment inventory & inquiry triage across Delhi NCR.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/booking">
              <Button variant="primary" size="sm">
                + New Patient Booking
              </Button>
            </Link>
            <Link href="/" target="_blank">
              <Button variant="outline" size="sm">
                View Live Website &rarr;
              </Button>
            </Link>
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-[var(--radius-xl)] border border-border-light shadow-soft">
            <div className="flex items-center justify-between text-xs text-text-muted mb-2">
              <span>Active Shifts</span>
              <Activity className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-text">48</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">
              +4 deployed today
            </div>
          </div>

          <div className="bg-white p-5 rounded-[var(--radius-xl)] border border-border-light shadow-soft">
            <div className="flex items-center justify-between text-xs text-text-muted mb-2">
              <span>Pending Inquiries</span>
              <Clock className="w-4 h-4 text-accent" />
            </div>
            <div className="text-2xl font-black text-accent">14</div>
            <div className="text-[11px] text-accent font-semibold mt-1">
              3 urgent (&lt;15 mins)
            </div>
          </div>

          <div className="bg-white p-5 rounded-[var(--radius-xl)] border border-border-light shadow-soft">
            <div className="flex items-center justify-between text-xs text-text-muted mb-2">
              <span>Equipment on Rent</span>
              <Package className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-black text-primary">29</div>
            <div className="text-[11px] text-text-muted mt-1">8 beds, 12 concentrators</div>
          </div>

          <div className="bg-white p-5 rounded-[var(--radius-xl)] border border-border-light shadow-soft">
            <div className="flex items-center justify-between text-xs text-text-muted mb-2">
              <span>Monthly Volume</span>
              <DollarSign className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-black text-purple-700">₹8.45L</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">+18% vs last month</div>
          </div>
        </div>

        {/* Tab navigation & filters */}
        <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab("bookings")}
                className={`px-4 py-2 rounded-[var(--radius-md)] text-xs font-bold transition-all ${
                  activeTab === "bookings"
                    ? "bg-primary text-white shadow-xs"
                    : "text-text-secondary hover:bg-slate-100"
                }`}
              >
                Caregiver Deployments ({bookings.length})
              </button>
              <button
                onClick={() => setActiveTab("inquiries")}
                className={`px-4 py-2 rounded-[var(--radius-md)] text-xs font-bold transition-all ${
                  activeTab === "inquiries"
                    ? "bg-primary text-white shadow-xs"
                    : "text-text-secondary hover:bg-slate-100"
                }`}
              >
                Patient Leads & Inquiries ({inquiries.length})
              </button>
            </div>

            {/* Search */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search patient, ID, staff..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {activeTab === "bookings" && (
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              )}
            </div>
          </div>

          {/* Bookings Table */}
          {activeTab === "bookings" && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border-light text-text-muted font-semibold bg-bg-surface">
                    <th className="py-3 px-4">Ref ID</th>
                    <th className="py-3 px-4">Patient & Phone</th>
                    <th className="py-3 px-4">Service & Shift</th>
                    <th className="py-3 px-4">Assigned Staff</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-primary">{b.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-text">{b.patientName}</div>
                        <div className="text-text-muted text-[11px]">{b.phone}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-text">{b.service}</div>
                        <div className="text-text-muted text-[11px]">{b.shift}</div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-text">{b.caregiver}</td>
                      <td className="py-3 px-4 text-text-secondary">{b.city}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            b.status === "Active"
                              ? "bg-emerald-100 text-emerald-800"
                              : b.status === "Pending"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {b.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={WHATSAPP_MSG(`Hi, regarding your Kreeta booking ${b.id}:`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            title="WhatsApp Client"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                          <select
                            value={b.status}
                            onChange={(e) =>
                              updateBookingStatus(b.id, e.target.value as BookingRecord["status"])
                            }
                            className="text-[11px] border border-border rounded px-1.5 py-1 bg-white"
                          >
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Inquiries Table */}
          {activeTab === "inquiries" && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border-light text-text-muted font-semibold bg-bg-surface">
                    <th className="py-3 px-4">Inquiry ID</th>
                    <th className="py-3 px-4">Lead Name</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Service Needed</th>
                    <th className="py-3 px-4">City</th>
                    <th className="py-3 px-4">Received</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Connect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  {inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-text-muted">{inq.id}</td>
                      <td className="py-3 px-4 font-bold text-text">{inq.name}</td>
                      <td className="py-3 px-4 font-mono">{inq.phone}</td>
                      <td className="py-3 px-4 text-primary font-medium">{inq.service}</td>
                      <td className="py-3 px-4">{inq.city}</td>
                      <td className="py-3 px-4 text-text-muted">{inq.time}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            inq.status === "New"
                              ? "bg-red-100 text-red-800 animate-pulse"
                              : inq.status === "Contacted"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`tel:${inq.phone}`}
                            className="p-1.5 rounded-full bg-primary-50 text-primary hover:bg-primary-100"
                            title="Call Lead"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={WHATSAPP_MSG(`Hi ${inq.name}, this is from Kreeta Nursing Service regarding your inquiry for ${inq.service}:`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            title="WhatsApp Lead"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
