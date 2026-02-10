import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import CasesSection from "@/components/CasesSection";
import MidConversion from "@/components/MidConversion";
import WhyMobSection from "@/components/WhyMobSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <LogosSection />
      <CasesSection />
      <MidConversion />
      <WhyMobSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
