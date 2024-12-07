import { motion } from 'framer-motion';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 bg-dark-800 text-light-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-purple-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="max-w-2xl mx-auto text-center text-light-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm Nitish, an AI & LLM engineer, full stack developer, and
          innovator with a passion for creating impactful solutions. Currently, I
          am working at Testingxperts as an AI engineer. I have also interned at
          9i Technologies, where I worked on Python-based projects.
        </motion.p>
      </div>
    </section>
  );
}
