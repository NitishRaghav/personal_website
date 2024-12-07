import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      className="about bg-olive-200 p-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-olive-800"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I'm Nitish, an AI & LLM engineer, full stack developer, and
        innovator with a passion for creating impactful solutions. Currently, I
        am working at Testingxperts as an AI engineer. I have also interned at
        9i Technologies, where I worked on Python-based projects.
      </motion.p>
    </motion.section>
  );
}