import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesDashboard from "@/components/ServicesDashboard";
import ProcessTimeline from "@/components/ProcessTimeline";
import PriceCalculator from "@/components/PriceCalculator";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesDashboard />
        <ProcessTimeline />
        <PriceCalculator />
        <AboutUs />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
