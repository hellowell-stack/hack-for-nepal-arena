
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-grid-pattern min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
