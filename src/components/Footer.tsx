import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3">Venta</h3>
          <p className="text-slate-400">
            Empowering sales with stablecoins, instant settlement, and on-chain
            loyalty.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/#features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#calculator" className="hover:text-white">
                Savings Calculator
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Connect</h4>
          <ul className="space-y-1">
            <li>
              <a href="mailto:team@venta.xyz" className="hover:text-white">
                Email Us
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ventapay"
                target="_blank"
                className="hover:text-white"
              >
                Twitter/X
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ventapay"
                target="_blank"
                className="hover:text-white"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-10 border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} Venta. All rights reserved.
      </div>
    </footer>
  );
}
