import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "AI Engineer",
      company: "Testingxperts",
      period: "Current",
      description: [
        "Developing AI and LLM solutions",
        "Implementing innovative technologies"
      ]
    },
    {
      title: "AI Intern",
      company: "9i Technologies",
      period: "Previous",
      description: [
        "Worked on Python-based projects",
        "Gained hands-on experience in software development"
      ]
    }
  ];
  return (
    <motion.section 
      className="experience bg-olive-300 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-olive-900">Professional Experience</h2>
      <div className="experience-list flex flex-wrap gap-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className={`experience-item cursor-pointer p-4 rounded-lg \${selectedExp === index ? 'bg-accent-3' : 'bg-white'}`}
            onClick={() => setSelectedExp(selectedExp === index ? null : index)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold text-olive-800">{exp.title}</h3>
            <p className="text-olive-700">{exp.company} | {exp.period}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedExp !== null && (
          <motion.div 
            className="experience-details mt-8 bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-olive-800">{experiences[selectedExp].title} at {experiences[selectedExp].company}</h4>
            <ul className="list-disc pl-5 text-olive-700">
              {experiences[selectedExp].description.map((desc, index) => (
                <li key={index} className="mb-2">{desc}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}