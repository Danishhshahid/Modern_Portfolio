import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="glass-card p-6 bg-transparent/15 shadow-glow">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/20 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">danishhshahid@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 bg-transparent/15 shadow-glow">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-accent/20 mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+92 346 4470920</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 bg-transparent/15 shadow-glow">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/20 mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Karachi,Pk</p>
                </div>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-6"
            >
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Whether you have a project in mind, need consultation, or just want to chat about technology, I'm always open to new opportunities and interesting conversations.
              </p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="glass-card shadow-glow">
                <a href="https://www.linkedin.com/in/danish-shahid-abbasi-6952a42b5/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="glass-card shadow-glow">
                <a href="https://github.com/Danishhshahid" target="_blank" rel="noopener noreferrer">
                  GitHub
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="glass-card shadow-glow">
                <a href="https://x.com/danishhshahid" target="_blank" rel="noopener noreferrer">
                  Twitter
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card-elevated p-8 bg-transparent/15 shadow-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-card border-white/20"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-card border-white/20"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-card border-white/20"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-card border-white/20 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 mr-2 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};