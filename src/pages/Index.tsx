import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import WhyMobSection from "@/components/WhyMobSection";
import CasesSection from "@/components/CasesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <LogosSection />
      <WhyMobSection />
      <CasesSection />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
