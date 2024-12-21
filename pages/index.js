import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-dark-900 text-light-100">
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hero />
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
      </motion.div>
    </div>
  );
}
