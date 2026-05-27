import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { CoreBankingInfo } from "@/components/home/CoreBankingInfo";
import { CoreBankingFeatures } from "@/components/home/CoreBankingFeatures";
import { PaperlessCard } from "@/components/home/PaperlessCard";
import { Marquee } from "@/components/home/Marquee";
import { DigitalBanking } from "@/components/home/DigitalBanking";
import { Insights } from "@/components/home/Insights";
import { CaseStudies } from "@/components/home/CaseStudies";
import { PaperlessPromo } from "@/components/home/PaperlessPromo";

export function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <CoreBankingInfo />
      <CoreBankingFeatures />
      <PaperlessCard />
      <Marquee />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <PaperlessPromo />
    </>
  );
}