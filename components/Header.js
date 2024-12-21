import { useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <header className="fixed w-full z-50 bg-dark-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
          Nitish
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-400 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.ul 
            className="flex space-x-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item) => (
              <motion.li 
                key={item.href}
                variants={itemVariants}
              >
                <Link 
                  href={item.href} 
                  className="text-light-100 hover:text-purple-400 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-900 z-40 md:hidden"
            >
              <motion.ul 
                className="flex flex-col items-center justify-center h-full space-y-6"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                {menuItems.map((item) => (
                  <motion.li 
                    key={item.href}
                    variants={itemVariants}
                  >
                    <Link 
                      href={item.href} 
                      className="text-2xl text-light-100 hover:text-purple-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
  