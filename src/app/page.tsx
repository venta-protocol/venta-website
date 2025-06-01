import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Calculator from "@/components/Earn/Calculator";
import Footer from "@/components/Footer";
import CompanyLogo from "@/components/CompanyLogo";
import GrowWithVenta from "@/components/Growth/GrowWithVenta";
import FaqSection from "@/components/Faq";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <GrowWithVenta />
      <Calculator />
      <FaqSection />
      <Footer />
    </main>
  );
}
