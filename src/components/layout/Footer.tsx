"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Globe,
} from "lucide-react";
import {
  SITE_NAME,
  PHONE,
  PHONE_RAW,
  EMAIL,
  ADDRESS,
  OFFICE_HOURS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { footerLinks } from "@/data/navigation";

/**
 * Rich footer with crystal-clear high-contrast text, links, contact info, social, and disclaimer.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2B30] text-slate-100 border-t border-teal-900/50">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border border-white/20">
                <Image
                  src="/images/brand/logo.jpeg"
                  alt="Kreeta Nursing Service"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white leading-none">
                  Kreeta
                </h3>
                <p className="text-xs text-emerald-300 font-semibold leading-none mt-1 uppercase tracking-wider">
                  Nursing Service
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-200 font-normal">
              Providing trusted, professional home healthcare services across
              Delhi NCR. Our police-verified nurses, caretakers, and therapists
              bring hospital-quality care to your doorstep, 24 hours a day.
            </p>

            {/* Contact Info */}
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-start gap-3 text-slate-100 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300 font-semibold tracking-wide uppercase">24x7 Helpline / WhatsApp</span>
                  <span className="text-white font-bold text-sm tracking-wide group-hover:text-emerald-300 transition-colors">{PHONE}</span>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 text-slate-100 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300 font-semibold tracking-wide uppercase">Official Email</span>
                  <span className="text-white font-medium text-xs group-hover:text-emerald-300 transition-colors">{EMAIL}</span>
                </div>
              </a>
              <div className="flex items-start gap-3 text-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300 font-semibold tracking-wide uppercase">Office Location</span>
                  <span className="text-xs text-slate-200 leading-relaxed">{ADDRESS.full}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-emerald-300 font-semibold tracking-wide uppercase">Working Hours</span>
                  <span className="text-xs text-slate-200">{OFFICE_HOURS}</span>
                  <span className="block text-xs text-emerald-300 font-bold mt-1">💵 Payment: Cash on Delivery (COD) Only</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-emerald-300 hover:pl-1 transition-all flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-emerald-300 hover:pl-1 transition-all flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cities We Serve */}
            <h4 className="text-white font-bold mb-4 mt-8 text-sm uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              We Serve
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.cities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-emerald-300 hover:pl-1 transition-all flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              Legal
            </h4>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 hover:text-emerald-300 hover:pl-1 transition-all flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider border-b border-emerald-500/20 pb-2">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-200 mb-3 leading-relaxed">
              Health tips and service updates, no spam.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-[var(--radius-sm)] text-white placeholder:text-slate-300 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-[var(--radius-sm)] hover:bg-emerald-400 transition-colors shadow-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/15 bg-black/20">
        <div className="container-custom py-4">
          <p className="text-xs text-slate-200 text-center leading-relaxed">
            <strong className="text-emerald-300">Disclaimer:</strong> Kreeta Nursing Service provides home healthcare support
            and is not a substitute for emergency medical care. In case of a
            medical emergency, please call 112 or visit the nearest hospital
            immediately.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-200">
          <p>
            © {currentYear} <strong className="text-white">{SITE_NAME}</strong>. All rights reserved. Payment: <strong className="text-emerald-300">Cash on Delivery (COD) Only</strong>.
          </p>
          <p className="flex items-center gap-1 font-medium">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
