import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { News } from '@/components/home/News';
import { Stats } from '@/components/home/Stats';
import { Testimonials } from '@/components/home/Testimonials';
import { Toppers } from '@/components/home/Toppers';
import { CallToAction } from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <News />
      <Toppers />
      <Testimonials />
      <CallToAction />
    </>
  );
}