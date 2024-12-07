import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "AI Language Model",
      description: "Developed a custom AI language model with advanced natural language processing capabilities.",
      technologies: ["Python", "TensorFlow", "NLP"]
    },
    {
      title: "Full Stack Web Application",
      description: "Created a dynamic web application with real-time data synchronization and user authentication.",
      technologies: ["React", "Node.js", "GraphQL"]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-dark-800 text-light-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-purple-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-900 p-6 rounded-lg border border-dark-700 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                {project.title}
              </h3>
              <p className="text-light-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}