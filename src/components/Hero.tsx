"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash === "#savings") {
        e.preventDefault();
        const el = document.querySelector(target.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    const anchors = document.querySelectorAll('a[href="#savings"]');
    anchors.forEach((a) =>
      a.addEventListener("click", handleSmoothScroll as EventListener)
    );

    return () => {
      anchors.forEach((a) =>
        a.removeEventListener("click", handleSmoothScroll as EventListener)
      );
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Empowering Sales
          </h1>
          <div className="mt-2 text-2xl md:text-4xl font-semibold max-w-2xl md:max-w-3xl mx-auto">
            to{" "}
            <TypeAnimation
              sequence={[
                "supercharge your profits",
                2000,
                "make every dollar work",
                2000,
                "slash hidden payment fees",
                2000,
                "turn payments into promotions",
                2000,
                "earn while money waits",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-indigo-500 to-sky-400 text-transparent bg-clip-text inline-block"
            />
          </div>

          <p className="text-lg mt-6 max-w-xl text-slate-300">
            Venta is a fast, modern POS and payments solution powered by Solana.
            Accept stablecoins, reward customers, and eliminate unnecessary
            costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-center gap-4">
            <Link
              href="https://tally.so/r/w4EVQA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-3 font-medium text-white transition"
            >
              Request a Demo
            </Link>

            <a
              href="#savings"
              className="inline-block rounded-lg border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              See the Savings
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/30 to-pink-500/20 blur-[120px] -z-10" />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src="/images/hero-pos.png"
            alt="Venta POS"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
