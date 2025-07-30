import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Server, 
  Cloud, 
  Brain, 
  Database,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Sanity Headless CMS", level: 92 },
      { name: "Framer Motion", level: 85 }
    ],
    color: "primary"
  },
  {
    title: "Agentic AI",
    icon: Brain,
    skills: [
      { name: "Openai Agents SDK", level: 90 },
      { name: "FAST API", level: 90 },
      { name: "Advance Python", level: 95 },
      { name: "Vector Databases", level: 82 }
    ],
    color: "accent"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 10 },
      { name: "Docker", level: 15 },
      { name: "Kubernetes", level: 25 },
      { name: "CI/CD", level: 10 }
    ],
    color: "primary"
  },
 
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass-card-elevated p-8 hover:scale-105 transition-all duration-300 bg-transparent/15 shadow-glow">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 mr-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};