"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Premium splash screen shown once on initial page load.
 * Displays the Kreeta logo with pulse animation then fades out.
 */
export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem("kreeta-splash-shown")) {
      setShow(false);
      return;
    }

    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("kreeta-splash-shown", "true");
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Background gradient circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(14,124,134,0.15) 0%, rgba(14,124,134,0) 70%)",
              }}
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(76,175,130,0.12) 0%, rgba(76,175,130,0) 70%)",
              }}
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/brand/logo.jpeg"
                alt="Kreeta Nursing Service"
                width={160}
                height={160}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 mt-6 text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-[#0E7C86] font-[family-name:var(--font-heading)] tracking-tight">
              Kreeta Nursing Service
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-sm text-[#6B7280] mt-2 font-medium"
            >
              Trusted Healthcare, At Your Doorstep
            </motion.p>
          </motion.div>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="relative z-10 mt-8"
          >
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-[#0E7C86]"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
