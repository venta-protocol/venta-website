import Image from "next/image";

const logos = [
  {
    href: "https://www.solana.com/",
    src: "/images/logos/solana-01.svg",
    alt: "Solana",
  },
  {
    href: "https://solana.com/breakpoint",
    src: "/images/logos/breakpoint2024.svg",
    alt: "Solana Breakpoint",
  },
  {
    href: "https://solanasummit.org",
    src: "/images/logos/solanasummit.svg",
    alt: "Solana Summit",
  },
  {
    href: "https://x.com/hackerhouses",
    src: "/images/logos/hackerhouse-01.svg",
    alt: "Solana Hacker Houses",
  },
  {
    href: "https://www.proofoftalk.io/",
    src: "/images/logos/proofoftalk.svg",
    alt: "Proof of Talk",
  },
  {
    href: "https://www.forma.city/",
    src: "/images/logos/forma.svg",
    alt: "Forma City",
  },
  {
    href: "https://www.raposacoffee.com/",
    src: "/images/logos/raposa-01.svg",
    alt: "Raposa Coffee",
  },
  {
    href: "https://www.okx.com/web3",
    src: "/images/logos/okx.svg",
    alt: "Okx Wallet",
  },
  {
    href: "https://www.selecta.com/int/en",
    src: "/images/logos/selecta.png",
    alt: "Selecta",
  },
  {
    href: "https://www.decaf.so",
    src: "/images/logos/decaf.png",
    alt: "Decaf",
  },
  {
    href: "https://www.monstre.net/",
    src: "/images/logos/monstre.png",
    alt: "Monstre",
  },
  {
    href: "https://solana.com/playgg",
    src: "/images/logos/playgg.png",
    alt: "Solana PlayGG",
  },
];

export default function CompanyLogo() {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold mb-6 text-slate-300">
          Trusted by industry leaders and innovators
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo) => (
            <a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 grayscale opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
