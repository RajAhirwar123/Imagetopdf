import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageConverter from "@/components/ImageConverter";
import HowToUse from "@/components/HowToUse";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TopAdBanner from "@/components/TopAdBanner";
import BottomAdBanner from "@/components/BottomAdBanner";
//import InContentAd from "@/components/InContentAd";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Top Ad Banner - Below Header */}
      <TopAdBanner />
      <main className="flex-1">
        {/* <Hero />
        <ImageConverter /> */}
        {/* In-Content Ad - Between Converter and How To Use */}
        {/* <InContentAd />
        <HowToUse />
        <FAQ /> */}
      </main>
      {/* Bottom Ad Banner - Above Footer */}
      <BottomAdBanner />
      <Footer />
    </div>
  );
};

export default Index;
