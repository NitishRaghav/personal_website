import { motion } from 'framer-motion';
import { Code2, FileText, Building, Brain, GitMerge } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Document Extraction",
    description: "Implemented OCR and LLM-based data extraction from various documents, enhancing information retrieval efficiency.",
    technologies: ["Python", "OCR", "LLM", "NLP"],
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "Building Dimension Predictor",
    description: "Leveraged AI and computer vision to predict building dimensions, streamlining architectural and construction processes.",
    technologies: ["Computer Vision", "AI", "Python", "TensorFlow"],
    icon: <Building className="h-6 w-6" />
  },
  {
    title: "Personalized Assessment Generator",
    description: "Utilized Gemini and OpenAI APIs to create dynamic, personalized assessments, enhancing learning experiences.",
    technologies: ["Gemini API", "OpenAI API", "Python", "NLP"],
    icon: <Brain className="h-6 w-6" />
  },
  {
    title: "Comprehensive AI Platform",
    description: "Built a versatile AI platform incorporating multiple tools and functionalities, streamlining AI-driven processes.",
    technologies: ["Python", "AWS Bedrock", "Machine Learning", "API Integration"],
    icon: <Code2 className="h-6 w-6" />
  },
  {
    title: "ALM Tool with Azure DevOps Integration",
    description: "Developed an Application Lifecycle Management tool integrated with Azure DevOps for efficient user story extraction and management.",
    technologies: ["Azure DevOps", "Python", "API Integration", "ALM"],
    icon: <GitMerge className="h-6 w-6" />
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
              <div className="p-6 mt-auto bg-muted">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

