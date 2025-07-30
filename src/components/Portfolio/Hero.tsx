import { motion } from 'framer-motion';
import { ChevronDown, Link, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";



export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with animated typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-text mb-6 text-subtle-glow">
            Danish Shahid
            Abbasi
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-[#c9aaf7]">
            Agentic AI Developer specializing in the{' '}
            <span className="text-primary font-semibold">Modern Web Applications</span> and{' '}
            <span className="text-accent font-semibold">Agentic AI Systems</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            onClick={scrollToProjects}
            className="btn-primary group bg-[#c9aaf7]"
          >
            View My Work
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.div>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full blur-sm"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-sm"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
      />
    </section>
  );
};