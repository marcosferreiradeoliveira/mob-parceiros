import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ParceiroTecnicoSection from "@/components/ParceiroTecnicoSection";
import OQueFazemosSection from "@/components/OQueFazemosSection";
import ComoFuncionaSection from "@/components/ComoFuncionaSection";
import CasesSection from "@/components/CasesSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <StickyHeader />
      <HeroSection />
      <ParceiroTecnicoSection />
      <OQueFazemosSection />
      <ComoFuncionaSection />
      <CasesSection />
      <DepoimentosSection />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
