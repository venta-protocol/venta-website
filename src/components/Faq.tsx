// src/components/Sections/FaqSection.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
  {
    question: "What is Venta?",
    answer:
      "Venta is a next-gen payments and rewards platform built on Solana. We help merchants reduce payment fees, increase retention, and unlock new revenue streams — all without monthly subscriptions.",
  },
  {
    question: "How is Venta different from card terminals or POS systems?",
    answer:
      "Traditional payment systems charge up to 3% with limited features. Venta starts at just 0.7% base fee, with optional extensions for additional capabilities. This means you get a modern, feature-rich platform at a fraction of traditional costs, with built-in loyalty, rewards, and referral mechanics that grow with your business.",
  },
  {
    question: "Do I need to understand crypto to use Venta?",
    answer:
      "Not at all. Venta works behind the scenes. Customers can pay with stablecoins like USDC using a phone — no wallet setup required.",
  },
  {
    question: "Is there a monthly subscription or hidden fees?",
    answer:
      "No subscriptions. No surprises. You only pay a small percentage when you actually make a sale. We grow when you grow.",
  },
  {
    question: "Can I keep using my existing POS or terminal?",
    answer:
      "Yes. Venta can work alongside your current setup, or replace it entirely — it's up to you.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-[#1b0e2d] py-20 px-6"
      id="faq"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-white text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-lg max-w-md">
            Everything you need to know about how Venta helps you save and grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-md">
              <button
                onClick={() => setActiveIndex(i === activeIndex ? null : i)}
                className="w-full px-5 py-4 text-left text-white flex justify-between items-center"
              >
                <span className="font-medium text-base">{faq.question}</span>
                <span className="text-indigo-400">
                  {activeIndex === i ? "▲" : "▼"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-slate-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
