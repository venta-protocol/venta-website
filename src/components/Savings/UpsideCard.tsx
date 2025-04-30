import React from "react";

export default function UpsideCard({
  label,
  desc,
  value,
  highlight = false,
}: {
  label: string;
  desc: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-6 shadow-sm text-center ${
        highlight ? "bg-teal-100" : "bg-slate-100"
      }`}
    >
      <p
        className={`text-sm font-medium ${
          highlight ? "text-teal-600" : "text-slate-500"
        } mb-1`}
      >
        {label}
      </p>
      <p
        className={`text-2xl font-bold ${
          highlight ? "text-teal-800" : "text-slate-800"
        }`}
      >
        ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </p>
      <p
        className={`text-xs ${
          highlight ? "text-teal-600" : "text-slate-600"
        } mt-1`}
      >
        {desc}
      </p>
    </div>
  );
}
