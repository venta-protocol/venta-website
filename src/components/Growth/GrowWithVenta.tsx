
export default function GrowWithVenta() {
  const features = [
    {
      title: "🎁 Automated Loyalty",
      description:
        "Turn first-time buyers into regulars with always-on rewards — no monthly fees, no bloat.",
    },
    {
      title: "📈 Viral Campaigns",
      description:
        "Run wallet-based discounts and cashbacks that drive footfall and build loyalty.",
    },
    {
      title: "🤝 Partnership-Powered Sales",
      description:
        "Tap into partner-funded offers that bring new customers through your door — at zero cost to you.",
    },
  ];

  return (
    <section
      className="bg-[#0f172a] text-white py-16 px-6 border-t border-slate-800"
      id="growth"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Grow With Venta</h2>
        <p className="text-lg mb-12 text-slate-300">
          Venta isn’t just about saving — it’s about scaling. Here’s how we help
          you grow smarter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/60 rounded-lg p-6 shadow hover:shadow-lg transition backdrop-blur"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
