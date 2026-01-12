import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const project = {
    title: "SkillSwap – Peer-to-Peer Skill Exchange Platform",
    description: "SkillSwap is a Google-powered peer-to-peer learning platform that enables students to exchange skills with each other instead of paying money. Users create structured profiles showcasing skills they can teach and skills they want to learn, get intelligently matched with peers, communicate securely, and schedule live learning sessions. The platform transforms informal peer learning into a structured, accessible, and collaborative ecosystem for students.",
    technologies: [
      "React + Vite",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Hosting",
      "Google Calendar API",
      "Google Meet",
      "Dialogflow AI",
      "Looker Studio"
    ],
    liveUrl: "https://skillswap-eta-lovat.vercel.app/",
    featured: true
  };

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-gradient">Project</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass overflow-hidden border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge className="mb-3">Featured Project</Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
