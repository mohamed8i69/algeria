import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProductShowcase from "@/components/landing/ProductShowcase";
import SocialProof from "@/components/landing/SocialProof";
import OfferSection from "@/components/landing/OfferSection";
import OrderForm from "@/components/landing/OrderForm";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <SocialProof />
        <OfferSection />
        <OrderForm />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
