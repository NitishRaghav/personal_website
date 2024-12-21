import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-dark-900 text-light-100 px-4"
    >
      <motion.div 
        className="text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 text-purple-400"
          variants={itemVariants}
        >
          Hi, I'm Nitish
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-light-300"
          variants={itemVariants}
        >
          AI & LLM Engineer | Full Stack Developer | Innovator
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a 
            href="#about" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Discover More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}