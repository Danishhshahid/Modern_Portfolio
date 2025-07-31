import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const webProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative project management tool with real-time updates, team workspaces, and advanced reporting features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Portal",
    description: "HIPAA-compliant patient management system with appointment scheduling and telemedicine capabilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with automated posting and engagement tracking.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    technologies: ["React", "GraphQL", "Redis", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours and mortgage calculator integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const aiProjects = [
  {
    title: "Intelligent Content Generator",
    description: "AI-powered content creation platform that generates marketing copy, blog posts, and social media content using advanced language models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    technologies: ["LangChain", "OpenAI GPT-4", "Pinecone", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Document Analysis Agent",
    description: "Multi-modal AI agent that extracts insights from PDFs, images, and spreadsheets with natural language querying capabilities.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
    technologies: ["LangChain", "Claude 3", "ChromaDB", "Streamlit", "Python"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Smart Customer Support Bot",
    description: "Autonomous customer service agent with knowledge base integration, ticket routing, and escalation management.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
    technologies: ["Rasa", "OpenAI", "Redis", "PostgreSQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Predictive Analytics Engine",
    description: "Machine learning platform for business forecasting with automated model selection and deployment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    technologies: ["TensorFlow", "scikit-learn", "MLflow", "FastAPI", "Docker"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Computer Vision Assistant",
    description: "AI-powered image analysis tool for quality control in manufacturing with real-time defect detection.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    technologies: ["OpenCV", "PyTorch", "YOLO", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const CarouselItem = ({ project, index, direction }) => (
  <motion.div
    key={`${project.title}-${index}`}
    initial={{ 
      opacity: 0, 
      x: direction === 'next' ? 300 : -300,
      scale: 0.8 
    }}
    animate={{ 
      opacity: 1, 
      x: 0,
      scale: 1 
    }}
    exit={{ 
      opacity: 0, 
      x: direction === 'next' ? -300 : 300,
      scale: 0.8 
    }}
    transition={{ 
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1],
      opacity: { duration: 0.3 }
    }}
    className="w-full"
  >
    <Card className="glass-card-elevated overflow-hidden group hover:scale-[1.02] transition-all duration-500 bg-transparent/15 shadow-glow border border-white/10 backdrop-blur-sm">
      <div className="aspect-video overflow-hidden relative">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 space-y-4">
        <motion.h3 
          className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground line-clamp-3 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {project.technologies.map((tech, i) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-surface/50 border border-white/5 text-xs hover:bg-primary/10 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button size="sm" className="btn-primary flex-1 hover:scale-105 transition-transform duration-200">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Button>
          <Button size="sm" variant="outline" className="glass-card flex-1 hover:scale-105 transition-transform duration-200">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        </motion.div>
      </div>
    </Card>
  </motion.div>
);

const ProjectCarousel = ({ projects, activeSlide, setActiveSlide }) => {
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 items
      if (window.innerWidth >= 768) return 2;  // md: 2 items
      return 1; // sm: 1 item
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerView);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setActiveSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeSlide) return;
    setIsAnimating(true);
    setDirection(index > activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, isAnimating]);

  // Get current projects for the slide
  const currentProjects = projects.slice(
    activeSlide * itemsPerView,
    (activeSlide + 1) * itemsPerView
  );

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`slide-${activeSlide}`}
            initial={{ 
              opacity: 0, 
              x: direction === 'next' ? 300 : -300
            }}
            animate={{ 
              opacity: 1, 
              x: 0
            }}
            exit={{ 
              opacity: 0, 
              x: direction === 'next' ? -300 : 300
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <Card className="glass-card-elevated overflow-hidden group hover:scale-[1.02] transition-all duration-500 bg-transparent/15 shadow-glow border border-white/10 backdrop-blur-sm">
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-surface/50 border border-white/5 text-xs hover:bg-primary/10 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="btn-primary flex-1 hover:scale-105 transition-transform duration-200">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="glass-card flex-1 hover:scale-105 transition-transform duration-200">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <motion.button
            onClick={prevSlide}
            disabled={isAnimating}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={isAnimating}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </>
      )}

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-primary shadow-lg shadow-primary/50 scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${((activeSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [webSlide, setWebSlide] = useState(0);
  const [aiSlide, setAiSlide] = useState(0);

  const tabVariants = {
    active: { 
      backgroundColor: 'rgba(var(--primary), 0.15)',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary))',
      scale: 1.05
    },
    inactive: { 
      backgroundColor: 'transparent',
      borderColor: 'rgba(var(--muted-foreground), 0.2)',
      color: 'hsl(var(--muted-foreground))',
      scale: 1
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary px-4 py-2 text-sm font-medium shadow-glow">
              ✨ My Portfolio
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              A showcase of innovative solutions spanning web development and artificial intelligence
            </p>
            <div className="flex justify-center items-center gap-2 text-muted-foreground/60">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <span className="text-sm font-medium px-4">Building the Future</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex p-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
            <motion.button
              onClick={() => setActiveTab('web')}
              variants={tabVariants}
              animate={activeTab === 'web' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-6 py-3 rounded-md transition-all duration-300 border backdrop-blur-sm"
            >
              <Globe className="h-5 w-5 mr-2" />
              Web Development
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('ai')}
              variants={tabVariants}
              animate={activeTab === 'ai' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-6 py-3 rounded-md transition-all duration-300 border ml-2 backdrop-blur-sm"
            >
              <Brain className="h-5 w-5 mr-2" />
              Agentic AI Systems
            </motion.button>
          </div>
        </motion.div>

        {/* Project Carousel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'web' ? (
            <ProjectCarousel 
              projects={webProjects} 
              activeSlide={webSlide} 
              setActiveSlide={setWebSlide} 
            />
          ) : (
            <ProjectCarousel 
              projects={aiProjects} 
              activeSlide={aiSlide} 
              setActiveSlide={setAiSlide} 
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};