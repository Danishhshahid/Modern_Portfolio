"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
// import Image from "next/image";
import photo from "/assets/mypic.png"


export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Heading & actions */}
          <div className="text-center lg:text-left">
            {/* Main heading with animated typewriter effect */}
            <h1 className="hero-text mb-6 text-subtle-glow text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Danish Shahid
              Abbasi
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-[#c9aaf7]">
              Agentic AI Developer specializing in the{' '}
              <span className="text-primary font-semibold">Modern Web Applications</span> and{' '}
              <span className="text-accent font-semibold">Agentic AI Systems</span>
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
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
                <Button variant="outline" size="icon" className="glass-card hover:bg-primary/20 shadow-glow" asChild>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danishhshahid@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile photo with modern frame; transparent PNG keeps site background */}
          <div className="relative mx-auto lg:mx-0 w-[260px] sm:w-[320px] md:w-[360px] lg:w-[420px]">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary/10 blur-2xl border-hidden" aria-hidden></div>
            <div className="absolute inset-0 rounded-[24px] border border-white/10 backdrop-blur-sm bg-transparent/10" aria-hidden></div>
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-[24px] overflow-hidden"
            >
              <img
                src={photo}
                alt="Portrait of Danish Shahid Abbasi"
                width={840}
                height={840}
                // priority
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
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