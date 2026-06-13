import FashionCTASection from "@/app/components/casestudies/fashion/FashionCTASection";
import FashionDashboardSection from "@/app/components/casestudies/fashion/FashionDashboardSection";
import FashionHeroSection from "@/app/components/casestudies/fashion/FashionHeroSection";
import FashionPainPointsSection from "@/app/components/casestudies/fashion/FashionPainPointsSection";

const FashionPage = () => {
  return (
    <main className="relative overflow-x-hidden bg-white font-sans text-gray-800">
      <FashionHeroSection />
      <FashionPainPointsSection />
      <FashionDashboardSection />
      <FashionCTASection />
    </main>
  );
};

export default FashionPage;
