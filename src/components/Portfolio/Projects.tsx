import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className={project.featured ? "md:col-span-1" : ""}
>
  <Card className="glass-card-elevated overflow-hidden group hover:scale-105 transition-all duration-300 bg-transparent/15 shadow-glow">
    <div className="aspect-video overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string) => (
          <Badge key={tech} variant="secondary" className="bg-surface/50">
            {tech}
          </Badge>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button size="sm" className="btn-primary">
          <ExternalLink className="h-4 w-4 mr-2" />
          Live Demo
        </Button>
        <Button size="sm" variant="outline" className="glass-card">
          <ExternalLink className="h-4 w-4 mr-2" />
          Code
        </Button>
      </div>
    </div>
  </Card>
</motion.div>
);

const ProjectCarousel = ({ projects, activeSlide, setActiveSlide }) => {
  // Responsive slides per view
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile: 1 project
      if (window.innerWidth < 1024) return 2; // Tablet: 2 projects
      return 3; // Desktop: 3 projects
    }
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);

  // Update items per slide on resize
  useState(() => {
    const handleResize = () => setItemsPerSlide(getItemsPerSlide());
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  },);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const currentProjects = projects.slice(
    activeSlide * itemsPerSlide, 
    (activeSlide + 1) * itemsPerSlide
  );

  return (
    <div className="relative">
      {/* Carousel Content */}
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]"
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <Button
            onClick={prevSlide}
            size="sm"
            variant="outline"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-card w-10 h-10 p-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={nextSlide}
            size="sm"
            variant="outline"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-card w-10 h-10 p-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [webSlide, setWebSlide] = useState(0);
  const [aiSlide, setAiSlide] = useState(0);

  const tabVariants = {
    active: { 
      backgroundColor: 'rgba(var(--primary), 0.1)',
      borderColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary))'
    },
    inactive: { 
      backgroundColor: 'transparent',
      borderColor: 'rgba(var(--muted-foreground), 0.2)',
      color: 'hsl(var(--muted-foreground))'
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
          <div className="flex p-1 bg-surface/50 rounded-lg backdrop-blur-sm border border-border/50 shadow-glow">
            <motion.button
              onClick={() => setActiveTab('web')}
              variants={tabVariants}
              animate={activeTab === 'web' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              className="flex items-center px-6 py-3 rounded-md transition-all duration-300 border"
            >
              <Globe className="h-5 w-5 mr-2" />
              Web Development
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('ai')}
              variants={tabVariants}
              animate={activeTab === 'ai' ? 'active' : 'inactive'}
              transition={{ duration: 0.3 }}
              className="flex items-center px-6 py-3 rounded-md transition-all duration-300 border ml-2"
            >
              <Brain className="h-5 w-5 mr-2" />
              Agentic AI Systems
            </motion.button>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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