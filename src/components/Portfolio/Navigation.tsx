import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Presentation, Mail } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Skills', href: '#skills', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Presentations', href: '#presentations', icon: Presentation },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string): void => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navHeight = 80; // Account for fixed nav height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Close mobile menu after clicking a link
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-background/80 py-3 shadow-md' : 'bg-transparent py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-base md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
              onClick={() => scrollToSection('#home')}
              aria-label="Danish Shahid Abbasi - Go to home section"
            >
              Danish Shahid Abbasi
            </motion.button>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-colors px-3 py-2 relative focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      activeSection === item.href.replace('#', '') 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                  >
                    {item.name}
                    {activeSection === item.href.replace('#', '') && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:block"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="text-sm px-4 py-2 btn-primary hover:bg-indigo-950 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              >
                Let's Talk
              </Button>
            </motion.div>

            {/* Mobile Sidebar Trigger */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="Open navigation menu"
                    >
                      <Menu size={24} />
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 px-0">
                  <SheetHeader className="px-6 pb-4 border-b">
                    <SheetTitle className="text-left bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                      Danish Shahid Abbasi
                    </SheetTitle>
                    <SheetDescription className="text-left text-sm text-muted-foreground">
                      Portfolio Navigation
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="flex flex-col py-6">
                    {/* Navigation Items */}
                    <nav className="px-6 space-y-2">
                      {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.replace('#', '');
                        
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Button
                              variant={isActive ? "secondary" : "ghost"}
                              onClick={() => scrollToSection(item.href)}
                              className={`w-full justify-start text-base font-medium py-3 px-4 h-auto ${
                                isActive 
                                  ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                                  : 'text-muted-foreground hover:bg-muted'
                              }`}
                            >
                              <Icon className="mr-3 h-5 w-5" />
                              {item.name}
                            </Button>
                          </motion.div>
                        );
                      })}
                    </nav>

                    {/* CTA Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="mt-8 px-6"
                    >
                      <div className="p-4 bg-muted rounded-lg border">
                        <p className="text-sm text-muted-foreground mb-3">
                          Ready to work together?
                        </p>
                        <Button
                          onClick={() => scrollToSection('#contact')}
                          className="w-full py-3 btn-primary font-medium"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Let's Talk
                        </Button>
                      </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="mt-auto px-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        © 2025 Danish Shahid Abbasi
                      </p>
                    </motion.div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};