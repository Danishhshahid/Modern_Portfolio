import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { sanityClient, hasSanity } from '@/lib/sanity';
import { PROJECTS_BY_CATEGORY } from '@/lib/queries';

const webProjectsFallback = [
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

const aiProjectsFallback = [
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

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

const ProductCard = ({ project, lighten }: { project: Project; lighten: boolean }) => (
  <Card className="glass-card-elevated overflow-hidden group bg-transparent/15 shadow-glow border border-white/10 backdrop-blur-sm w-[85vw] xs:w-[78vw] sm:w-[45vw] md:w-[40vw] lg:w-[32%] xl:w-[31%] flex-shrink-0 snap-start mx-auto sm:mx-0">
    <div className="aspect-video overflow-hidden relative">
      <motion.img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500"
        whileHover={lighten ? undefined : { scale: 1.05 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-4 sm:p-5 space-y-3">
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">{project.title}</h3>
      <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="bg-surface/50 border border-white/5 text-xs py-1 px-2">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2 sm:gap-3 pt-2">
        <Button size="sm" asChild className="btn-primary flex-1 text-xs sm:text-sm">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Live
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild className="glass-card flex-1 text-xs sm:text-sm">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Code
          </a>
        </Button>
      </div>
    </div>
  </Card>
);

const HorizontalScroller = ({ projects }: { projects: Project[] }) => {
  const shouldReduceMotion = useReducedMotion();
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const lighten = shouldReduceMotion || isTouchDevice;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerView(3);
      else if (width >= 1024) setItemsPerView(3);
      else if (width >= 768) setItemsPerView(2);
      else if (width >= 640) setItemsPerView(1.5);
      else setItemsPerView(1);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const totalPages = Math.max(1, Math.ceil(projects.length / itemsPerView));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
      const idx = Math.round(progress * (totalPages - 1));
      setActivePage(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll as any);
  }, [totalPages, itemsPerView]);

  const scrollToPage = (page: number) => {
    const el = containerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = totalPages > 1 ? (page / (totalPages - 1)) * maxScroll : 0;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="overflow-x-auto overflow-y-visible snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-4 sm:gap-6 min-w-0 px-4 sm:px-1 pb-2">
          {projects.map((p) => (
            <ProductCard key={p.title} project={p} lighten={lighten} />
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 sm:gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => scrollToPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === activePage ? 'bg-primary scale-125 shadow-[0_0_12px_rgba(99,102,241,0.6)]' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const otherProjectsFallback: Project[] = [
  {
    title: 'TypeScript Utils Pack',
    description: 'A collection of typed utilities and helpers for day-to-day dev.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
    technologies: ['TypeScript', 'Vitest'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Python Data Scripts',
    description: 'Small scripts for scraping and CSV processing with clean CLIs.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop',
    technologies: ['Python', 'Pandas'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'CLI Tools',
    description: 'Handy Node CLI tools for project automation and DX improvements.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
    technologies: ['Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'ai' | 'other'>('web');
  const [webProjects, setWebProjects] = useState<Project[]>(webProjectsFallback as Project[]);
  const [aiProjects, setAiProjects] = useState<Project[]>(aiProjectsFallback as Project[]);
  const [otherProjects, setOtherProjects] = useState<Project[]>(otherProjectsFallback);

  useEffect(() => {
    if (!hasSanity || !sanityClient) return;
    const fetchAll = async () => {
      try {
        const [web, ai, other] = await Promise.all([
          sanityClient.fetch(PROJECTS_BY_CATEGORY('web')),
          sanityClient.fetch(PROJECTS_BY_CATEGORY('ai')),
          sanityClient.fetch(PROJECTS_BY_CATEGORY('other')),
        ]);
        if (Array.isArray(web) && web.length) setWebProjects(web);
        if (Array.isArray(ai) && ai.length) setAiProjects(ai);
        if (Array.isArray(other) && other.length) setOtherProjects(other);
      } catch (e) {
        // fail silently, keep fallbacks
      }
    };
    fetchAll();
  }, []);

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
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-glow">
              ✨ Projects
            </Badge>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center items-center gap-2 text-muted-foreground/60 mt-4 sm:mt-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <span className="text-xs sm:text-sm font-medium px-2 sm:px-4">Building the Future</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12 px-2"
        >
          <div className="flex flex-wrap sm:flex-nowrap justify-center p-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 w-full max-w-md sm:max-w-xl">
            <motion.button
              onClick={() => setActiveTab('web')}
              variants={tabVariants}
              animate={activeTab === 'web' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-4 py-2 sm:px-5 sm:py-3 rounded-md transition-all duration-300 border backdrop-blur-sm text-sm sm:text-base mb-1 sm:mb-0 flex-1 text-center justify-center"
            >
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="truncate">Web Dev</span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('ai')}
              variants={tabVariants}
              animate={activeTab === 'ai' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-4 py-2 sm:px-5 sm:py-3 rounded-md transition-all duration-300 border mx-1 sm:mx-2 backdrop-blur-sm text-sm sm:text-base mb-1 sm:mb-0 flex-1 text-center justify-center"
            >
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="truncate">AI Systems</span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('other')}
              variants={tabVariants}
              animate={activeTab === 'other' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center px-4 py-2 sm:px-5 sm:py-3 rounded-md transition-all duration-300 border backdrop-blur-sm text-sm sm:text-base flex-1 text-center justify-center"
            >
              Others
            </motion.button>
          </div>
        </motion.div>

        {/* Product Carousel (Horizontal Scroll) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          {activeTab === 'web' && <HorizontalScroller projects={webProjects} />}
          {activeTab === 'ai' && <HorizontalScroller projects={aiProjects} />}
          {activeTab === 'other' && <HorizontalScroller projects={otherProjects} />}
        </motion.div>
      </div>
    </section>
  );
};