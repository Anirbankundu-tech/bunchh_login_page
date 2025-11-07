import LandingHero from "./LandingHero";
import LandingDashboardPreview from "./dashboardpreview";
import TrustedBy from "./TrustedBy";
import ClipLibrarySection from "./ClipLibrarysec";
import AIGeneratedShots from "./AigeneratedShorts";
import UploadVideoSection from "./uploadVideosection";
import AIAutomationSection from "./AiAutomationsec";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="w-full overflow-hidden">
      <LandingHero />
      <LandingDashboardPreview />
      <TrustedBy />
      <ClipLibrarySection />
      <AIGeneratedShots />
      <UploadVideoSection />
      <AIAutomationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}