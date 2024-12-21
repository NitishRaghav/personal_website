import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          Nitish
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu />
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
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        )}

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
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
                      className="text-2xl text-foreground hover:text-primary transition-colors"
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