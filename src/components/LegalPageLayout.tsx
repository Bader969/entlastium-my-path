import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, subtitle, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Zurück zur Startseite</span>
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-primary-foreground/70 mt-4 text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-card p-6 md:p-10 lg:p-12">
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPageLayout;
