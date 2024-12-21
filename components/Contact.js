import { motion } from 'framer-motion';
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/nitish', 
      icon: <Linkedin className="h-6 w-6" />
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/NitishRaghav', 
      icon: <GitHub className="h-6 w-6" />
    },
    { 
      name: 'Email', 
      url: 'mailto:nitish.business1221@gmail.com', 
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground mb-8 text-lg">
            I'm always open to discussing new projects, opportunities, or just having a chat. Feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="mailto:nitish.business1221@gmail.com"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full transition-colors inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

