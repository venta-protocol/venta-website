"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SavingsCard from "./SavingCard";
import UpsideCard from "./UpsideCard";

export default function Calculator() {
  const [revenue, setRevenue] = useState(10000); // monthly GMV

  /* --------------------- Fee Savings (Top Row) --------------------- */
  const legacyRate = 0.03; // 3%
  const ventaRate = 0.007; // 0.7%
  const legacyFees = revenue * legacyRate;
  const ventaFees = revenue * ventaRate;
  const monthlySave = legacyFees - ventaFees;
  const annualSave = monthlySave * 12;

  /* -------------------- Revenue Upside (Bottom Row) -------------------- */
  const referralRate = 0.1; // 10% fee typical with referral platforms
  const ventaPromoRate = 0.003; // 0.3% effective via Venta's credit/loyalty

  const referralLoss = revenue * referralRate;
  const ventaLoss = revenue * ventaPromoRate;
  const extraKept = referralLoss - ventaLoss;
  const extraKeptAnnual = extraKept * 12;

  return (
    <section id="savings" className="bg-indigo-50 text-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Save More. Earn More.</h2>
        <p className="text-lg mb-10">
          Slide to match your monthly revenue and see how Venta helps you grow.
        </p>

        {/* Revenue slider */}
        <label className="font-medium block mb-4">
          Monthly Revenue:{" "}
          <span className="text-indigo-600 font-semibold">
            ${revenue.toLocaleString()}
          </span>
        </label>
        <input
          type="range"
          min={1000}
          max={500000}
          step={1000}
          value={revenue}
          onChange={(e) => setRevenue(Number(e.target.value))}
          className="w-full max-w-xl mx-auto"
        />

        {/* --- Row 1: Fee Savings --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <UpsideCard
            label="Legacy Payment Fees"
            desc="Typical 2.6% + $0.30 (~3%) fee"
            value={legacyFees}
          />
          <UpsideCard
            label="Venta Payment Fees"
            desc="Flat 0.7% fee"
            value={ventaFees}
          />
          <SavingsCard annual={annualSave} monthly={monthlySave} />
        </motion.div>

        {/* --- Row 2: Revenue Upside --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <UpsideCard
            label="Revenue Lost on Referral Platforms"
            desc="Typical 10% fee"
            value={referralLoss}
          />
          <UpsideCard
            label="Venta Partner-Driven Offers"
            desc="Flat 0.3% rate"
            value={ventaLoss}
          />
          <UpsideCard
            label="Extra Kept Annually"
            desc={`≈ $${extraKept.toFixed(0)} / mo`}
            value={extraKeptAnnual}
            highlight
          />
        </motion.div>
      </div>
    </section>
  );
}
