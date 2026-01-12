import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Code, Shield, BarChart } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    { icon: Code, title: "Web Development", description: "Building modern web applications" },
    { icon: Shield, title: "Cybersecurity", description: "Security analysis and penetration testing" },
    { icon: BarChart, title: "Data Analytics", description: "Transforming data into insights" },
    { icon: GraduationCap, title: "Learning", description: "Continuously expanding knowledge" },
  ];

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <Card className="glass mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6">
                I'm currently pursuing my <strong>B.Tech 2nd year</strong> at <strong>Siddhartha Academy of Higher Education</strong>. 
                As a passionate technology enthusiast, I'm deeply interested in web development, cybersecurity, and data analytics.
              </p>
              <p className="text-lg text-muted-foreground">
                I believe in learning by doing and have been actively working on various projects to strengthen my skills. 
                My goal is to leverage technology to create impactful solutions that make a difference in people's lives.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <interest.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-xl mb-2">{interest.title}</h3>
                    <p className="text-muted-foreground">{interest.description}</p>
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
