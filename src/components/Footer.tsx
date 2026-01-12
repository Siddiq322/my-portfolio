import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shaik Abubakar Siddiq. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart size={14} className="text-primary fill-primary" /> using React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
