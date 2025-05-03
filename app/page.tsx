import { HeroSection } from '@/components/home/hero-section';
import { ServicesPreview } from '@/components/home/services-preview';
import { AboutPreview } from '@/components/home/about-preview';
import { PortfolioPreview } from '@/components/home/portfolio-preview';
import { CtaSection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <PortfolioPreview />
      <CtaSection />
    </>
  );
}