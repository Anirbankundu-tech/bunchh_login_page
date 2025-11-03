import LandingHero from "./LandingHero";
import LandingDashboardPreview from "./dashboardpreview";
import TrustedBy from "./TrustedBy";

export default function LandingPage() {
  return (
    <div className="w-full overflow-hidden">
      <LandingHero />
      <LandingDashboardPreview />
      <TrustedBy />
    </div>
  );
}