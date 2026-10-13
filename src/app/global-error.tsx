"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RotateCcw, Phone } from "lucide-react";
import { PHONE_RAW } from "@/lib/constants";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
        <div className="max-w-md w-full text-center bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-600 mx-auto mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            System Unavailable
          </h1>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            A critical application error occurred. We are working to restore service immediately.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0E7C86] hover:bg-[#095A62] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Reload Page
            </button>

            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" /> Call 24x7 Helpline: 8865888772
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
