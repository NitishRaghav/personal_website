import { motion } from 'framer-motion';

export default function Experience() {
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
    <section 
      id="experience" 
      className="py-20 bg-dark-900 text-light-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-purple-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-dark-800 p-6 rounded-lg shadow-lg border border-dark-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                {exp.title}
              </h3>
              <p className="text-light-300 mb-3">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside text-light-200 space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
