import { SpotlightEffect } from '@/components/Portfolio/SpotlightEffect';
import { Navigation } from '@/components/Portfolio/Navigation';
import { Hero } from '@/components/Portfolio/Hero';
import { Skills } from '@/components/Portfolio/Skills';
import { Projects } from '@/components/Portfolio/Projects';
import { Presentations } from '@/components/Portfolio/Presentations';
import { Contact } from '@/components/Portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <SpotlightEffect />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        
        <Skills />
        <Projects />
        <Presentations />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Danish Shahid Abbasi. Crafted with ❤️ using React & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
