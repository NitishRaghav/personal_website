import { useEffect } from 'react';
import '../styles/globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Smooth scroll behavior
    const handleScrollToSection = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Add smooth scroll to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', handleScrollToSection);
    });

    // Cleanup event listeners
    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToSection);
      });
    };
  }, []);

  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;