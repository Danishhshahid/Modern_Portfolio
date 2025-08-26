import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Link, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";



export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with animated typewriter effect */}
          <h1 className="hero-text mb-6 text-subtle-glow text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Danish Shahid
            Abbasi
          </h1>
        

        {/* Subtitle */}
       
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-[#c9aaf7]">
            Agentic AI Developer specializing in the{' '}
            <span className="text-primary font-semibold">Modern Web Applications</span> and{' '}
            <span className="text-accent font-semibold">Agentic AI Systems</span>
          </p>

        {/* CTA Buttons */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            onClick={scrollToProjects}
            className="btn-primary group bg-[#c9aaf7]"
          >
            View My Work
            {!shouldReduceMotion && !isTouchDevice ? (
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="ml-2"
              >
                →
              </motion.div>
            ) : (
              <span className="ml-2">→</span>
            )}
          </Button>
          
          <div className="flex gap-4">
            
            <Button variant="outline" size="icon" className="glass-card hover:bg-primary/20 shadow-glow" asChild>
              <a href="https://github.com/Danishhshahid" target="_blank" rel="noopener noreferrer">
                <FiGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="glass-card hover:bg-primary/20 shadow-glow">
            <a href="https://www.linkedin.com/in/danish-shahid-abbasi-6952a42b5/" target="_blank" rel="noopener noreferrer">
              <LuLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="glass-card hover:bg-primary/20 shadow-glow"asChild>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danishhshahid@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        {!shouldReduceMotion && !isTouchDevice ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="cursor-pointer"
              onClick={scrollToProjects}
            >
              <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        ) : (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </div>
        )}
      </div>

      {/* Floating elements */}
      {!shouldReduceMotion && !isTouchDevice && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm"
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, delay: 0 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full blur-sm"
            animate={{ y: [0, -24, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0.6 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1.2 }}
          />
        </>
      )}
    </section>
  );
};