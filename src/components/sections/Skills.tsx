import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'devops' | 'database'
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: 'logos:react', category: 'frontend' },
    { name: 'Astro', icon: 'logos:astro', category: 'frontend' },
    { name: 'ThreeJs', icon: 'logos:threejs', category: 'frontend' },
    { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend' },
    { name: 'Next.js', icon: 'logos:nextjs-icon', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', category: 'frontend' },
    
    // Backend
    { name: 'Java', icon: 'logos:java', category: 'backend' },
    { name: 'Spring Boot', icon: 'logos:spring-icon', category: 'backend' },
    { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'backend' },
    { name: 'Express', icon: 'simple-icons:express', category: 'backend' },
    
    // DevOps
    { name: 'Git', icon: 'logos:git-icon', category: 'devops' },
    { name: 'Docker', icon: 'logos:docker-icon', category: 'devops' },
    { name: 'Jenkins', icon: 'logos:jenkins', category: 'devops' },
    
    // Database
    { name: 'MongoDB', icon: 'logos:mongodb-icon', category: 'database' },
    { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database' },
    { name: 'MySQL', icon: 'logos:mysql', category: 'database' },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-8">
          {(['frontend', 'backend', 'devops', 'database'] as const).map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-2xl font-semibold text-white capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center p-4 rounded-xl border border-white/10 bg-gray-800/50 backdrop-blur-sm"
                    >
                      <Icon 
                        icon={skill.icon} 
                        className="w-12 h-12 mb-2" 
                      />
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills