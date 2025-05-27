import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join St. Boston Edtech?</h2>
        <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto mb-8">
          Take the first step towards providing your child with an exceptional education experience. Apply now or schedule a campus tour.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-pink-700 hover:bg-pink-50">
            <Link href="/signup">Apply Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href="/contact">Schedule a Tour</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}