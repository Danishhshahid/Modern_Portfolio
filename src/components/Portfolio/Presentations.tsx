import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { sanityClient, hasSanity } from '@/lib/sanity';
import { PRESENTATIONS } from '@/lib/queries';

type Presentation = {
  title: string;
  description: string;
  link: string;
  date?: string;
  image?: string;
};

const fallbackPresentations: Presentation[] = [
  {
    title: 'Agentic Systems 101',
    description: 'Intro talk on building reliable agentic AI workflows with practical patterns.',
    link: '#',
    image: '/placeholder.svg',
    date: '2025'
  },
  {
    title: 'Modern React Performance',
    description: 'Deep dive into React performance on mobile: profiling, memoization, and animation.',
    link: '#',
    image: '/placeholder.svg',
    date: '2024'
  },
];

export const Presentations = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState<Presentation[]>(fallbackPresentations);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const childWidth = children[0].getBoundingClientRect().width + 24; // gap-6
      const idx = Math.round(el.scrollLeft / childWidth);
      setActiveIndex(Math.max(0, Math.min(idx, children.length - 1)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll as any);
  }, []);

  useEffect(() => {
    if (!hasSanity || !sanityClient) return;
    const load = async () => {
      try {
        const data = await sanityClient.fetch(PRESENTATIONS);
        if (Array.isArray(data) && data.length) setItems(data);
      } catch (e) {
        // keep fallback
      }
    };
    load();
  }, []);

  const scrollTo = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (!children[i]) return;
    el.scrollTo({ left: children[i].offsetLeft, behavior: 'smooth' });
  };
  return (
    <section id="presentations" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Presentations
          </h2>
          <p className="text-muted-foreground text-lg">Talks and slides I have presented.</p>
        </motion.div>

        <div className="overflow-x-auto no-scrollbar">
          <div ref={containerRef} className="flex gap-6 snap-x snap-mandatory">
            {items.map((p) => (
              <Card key={p.title} className="glass-card-elevated bg-transparent/15 shadow-glow border border-white/10 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[31%] flex-shrink-0 snap-start overflow-hidden">
                {p.image && (
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    {p.date && <span className="text-xs text-muted-foreground">{p.date}</span>}
                  </div>
                  <p className="text-muted-foreground">{p.description}</p>
                  <div className="pt-2">
                    <Button size="sm" asChild className="btn-primary">
                      <a href={p.link} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Slides
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {items.length > 1 && (
          <div className="flex justify-center mt-6 gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to presentation ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === activeIndex ? 'bg-primary scale-125 shadow-[0_0_12px_rgba(99,102,241,0.6)]' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


