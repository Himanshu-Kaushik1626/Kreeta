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
 * Rich footer with links, contact info, social, and disclaimer.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2B30] text-white/80">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/brand/logo.jpeg"
                  alt="Kreeta Nursing Service"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">
                  Kreeta
                </h3>
                <p className="text-xs text-white/50 leading-none mt-0.5">
                  Nursing Service
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Providing trusted, professional home healthcare services across
              Delhi NCR. Our police-verified nurses, caretakers, and therapists
              bring hospital-quality care to your doorstep, 24 hours a day.
            </p>

            {/* Contact Info */}
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-start gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">24x7 Helpline / WhatsApp</span>
                  <span className="text-white font-bold text-sm tracking-wide">{PHONE}</span>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Official Email</span>
                  <span className="text-white font-medium text-xs">{EMAIL}</span>
                </div>
              </a>
              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Office Location</span>
                  <span className="text-xs text-slate-200 leading-relaxed">{ADDRESS.full}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400">Working Hours</span>
                  <span className="text-xs text-slate-200">{OFFICE_HOURS}</span>
                  <span className="block text-[10px] text-emerald-300 font-semibold mt-0.5">💵 Payment: Cash on Delivery (COD) Only</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cities */}
            <h4 className="text-white font-semibold mb-4 mt-8 text-sm uppercase tracking-wider">
              We Serve
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.cities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-xs text-white/60 mb-3">
              Health tips and service updates, no spam.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-[var(--radius-sm)] text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-[var(--radius-sm)] hover:bg-primary-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <p className="text-xs text-slate-300 text-center leading-relaxed">
            Disclaimer: Kreeta Nursing Service provides home healthcare support
            and is not a substitute for emergency medical care. In case of a
            medical emergency, please call 112 or visit the nearest hospital
            immediately.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300">
          <p>
            © {currentYear} {SITE_NAME}. All rights reserved. Payment: <strong>Cash on Delivery (COD) Only</strong>.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
