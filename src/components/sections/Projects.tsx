import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Gym",
      description: "The project is a customized app for my local gym.",
      technologies: ["React", "Javascript","Spring Boot","Docker","MySQL"],
      imageUrl: "https://opengraph.githubassets.com/1/heisen47/gym",
      githubUrl: "https://github.com/heisen47/gym",
      liveUrl: "https://gym-frontend-nine.vercel.app/"
    },
    {
      title: "Ecommerce store",
      description: "A backend application for an ecommerce site using springboot.",
      technologies: ["Spring Boot", "PostgreSQL","Hibernate"],
      imageUrl: "https://opengraph.githubassets.com/1/Heisen47/Ecommerce-backend",
      githubUrl: "https://github.com/Heisen47/Ecommerce-backend",
      liveUrl: "https://github.com/Heisen47/Ecommerce-backend"
    },
    {
      title: "Pujo Atlas",
      description: "An Open source app for navigating festivity during the durga puja festival.",
      technologies: ["React", "TypeScript", "Astro","Django","PostgreSQL"],
      imageUrl: "https://opengraph.githubassets.com/1/Pujo-Atlas-Kolkata/PujoAtlasKol-Web",
      githubUrl: "https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web",
      liveUrl: "https://atlas.ourkolkata.in/"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-white/10 bg-gray-800/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-sm rounded-md bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}