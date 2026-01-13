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

  const projects = [
    {
      title: "ChatFlow - Real-Time Chat Application",
      description: "A full-stack real-time chat application with modern UI/UX, featuring instant messaging, online status tracking, and message management. Built with a complete authentication system, Socket.IO for real-time communication, and cloud deployment on Render and Vercel.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "Socket.IO",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
        "Shadcn UI"
      ],
      features: [
        "Real-time 1-to-1 messaging with Socket.IO",
        "User authentication with JWT tokens",
        "Chat request system for connecting with new users",
        "Message deletion with real-time sync",
        "Read receipts (sent/delivered/seen status)",
        "Unread message count badges",
        "Online/offline status indicators",
        "Typing indicators",
        "Image/GIF/Sticker support with Cloudinary integration",
        "Responsive design for mobile and desktop"
      ],
      liveUrl: "https://real-chat-flow10.vercel.app",
      githubUrl: "https://github.com/Siddiq322/chat-frontend-spark",
      featured: true
    },
    {
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
      features: [],
      liveUrl: "https://skillswap-eta-lovat.vercel.app/",
      githubUrl: "",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass overflow-hidden border-2 border-primary/20 h-full flex flex-col">
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
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
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
                      
                      {project.features.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                            {project.features.slice(0, 5).map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex gap-3 pt-2">
                        <Button asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        {project.githubUrl && (
                          <Button variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
