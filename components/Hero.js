import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      className="hero flex items-center justify-between min-h-screen bg-gradient-to-br from-olive-200 to-olive-300 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-1/2">
        <motion.h1 
          className="text-6xl font-bold mb-4 text-olive-900"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Nitish
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8 text-olive-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI & LLM Engineer | Full Stack Developer | Innovator
        </motion.p>
        <motion.button 
          className="bg-accent-1 text-white px-6 py-3 rounded-full hover:bg-accent-2 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.button>
      </div>
      <motion.div 
        className="w-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image 
          src="/coder-animation.gif" 
          alt="Animated Coder" 
          width={500} 
          height={500}
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.section>
  );
}