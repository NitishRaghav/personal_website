import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "AI Engineer",
    company: "Testingxperts",
    period: "Current",
    description: [
      "Implemented OCR and LLM-based data extraction from various documents",
      "Leveraged AI and computer vision to predict building dimensions",
      "Used Gemini and OpenAI APIs to create personalized assessments",
      "Built a comprehensive AI platform incorporating multiple tools and functionalities",
      "Implemented an ALM tool integrating with Azure DevOps for user story extraction",
      "Worked with AWS Bedrock for both streaming and non-streaming applications",
      "Utilized Python for AI and machine learning projects",
      "Developed skills in data manipulation, analysis, and visualization using libraries like Matplotlib"
    ]
  },
  {
    title: "AI Intern",
    company: "9i Technologies",
    period: "Previous",
    description: [
      "Gained practical experience in Python programming, AI, and machine learning",
      "Collaborated with cross-functional teams to deliver innovative solutions",
      "Developed proficiency in data manipulation, analysis, and visualization"
    ]
  }
];

export default function Experience() {
  return (
    <motion.section 
      id="experience"
      className="experience bg-background py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Professional Experience</h2>
        <div className="experience-list space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item bg-card text-card-foreground p-8 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
                </div>
              </div>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm">{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

