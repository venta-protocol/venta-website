import {
  BoltIcon,
  CurrencyDollarIcon,
  GiftIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Lower Fees",
    description: "Ditch the 2–3% credit card tax. Pay 0.7% with Solana.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Instant Settlement",
    description: "Funds land in your wallet in 1–2 seconds, not days.",
    icon: BoltIcon,
  },
  {
    title: "Smart Rewards",
    description: "Build automated loyalty programs that reward real customers.",
    icon: GiftIcon,
  },
  {
    title: "Boost Margins",
    description:
      "Recover up to 25% of profits lost to payment fees and friction.",
    icon: ChartBarIcon,
  },
  {
    title: "Global Ready",
    description:
      "Tap into borderless stablecoins like USDG, USDC, and USDT. No bank barriers.",
    icon: GlobeAltIcon,
  },
  {
    title: "Non-Custodial",
    description: "Venta never holds your funds. You're always in control.",
    icon: ShieldCheckIcon,
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Venta?</h2>
        <p className="text-lg text-slate-300 mb-12">
          A new standard for cost, speed, and composability in merchant
          payments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-slate-800 rounded-xl p-6 text-left hover:shadow-xl transition"
            >
              <div className="mb-4">
                <Icon className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
