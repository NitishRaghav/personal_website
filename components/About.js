import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "Python", "Data Analysis","Prompt Engineering", "Machine Learning","Deep Learning","Computer Vision","APIs","SSO", "React", "Next.js",
     "NLP","RAG", "GenAI","LLMs","SLMs","Ollama", "AWS-BEDROCK", "Azure"
  ];

  return (
    <motion.section 
      id="about"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm Nitish, an AI & LLM engineer, full stack developer, and
              innovator with a passion for creating impactful solutions. Currently, I
              am working at Testingxperts as an AI engineer. I have also interned at
              9i Technologies, where I worked on Python-based projects. My expertise
              spans across various technologies, and I'm always eager to take on new
              challenges and push the boundaries of what's possible in tech.
            </p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
