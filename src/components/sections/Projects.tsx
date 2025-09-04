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
      title: 'Itinerarly',
      description: 'The project is about generating AI personalized travel itineraries.',
      technologies: ['React', 'Javascript', 'Spring Boot', 'Docker', 'MySQL'],
      imageUrl: 'https://opengraph.githubassets.com/1/heisen47/itinerarly',
      githubUrl: 'https://github.com/Heisen47/itinerarly',
      liveUrl: 'https://itinerarly-fe.vercel.app/'
    },
    {
      title: 'Gym',
      description: 'The project is a customized app for my local gym.',
      technologies: ['React', 'Javascript', 'Spring Boot', 'Docker', 'MySQL'],
      imageUrl: 'https://opengraph.githubassets.com/1/heisen47/gym',
      githubUrl: 'https://github.com/heisen47/gym',
      liveUrl: 'https://gym-frontend-nine.vercel.app/'
    },
    {
      title: 'Pujo Atlas',
      description:
        'An Open source app for navigating festivity during the durga puja festival.',
      technologies: ['React', 'TypeScript', 'Astro', 'Django', 'PostgreSQL'],
      imageUrl:
        'https://opengraph.githubassets.com/1/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
      githubUrl: 'https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
      liveUrl: 'https://atlas.ourkolkata.in/'
    }
  ]

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center text-4xl font-bold text-white'
        >
          My Projects
        </motion.h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className='overflow-hidden rounded-xl border border-white/10 bg-gray-800/50 backdrop-blur-sm'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className='object-cover'
                  loading='lazy'
                  onError={e => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop'
                  }}
                />
              </div>
              <div className='space-y-4 p-6'>
                <h3 className='text-xl font-semibold text-white'>
                  {project.title}
                </h3>
                <p className='text-gray-300'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='rounded-md bg-white/10 px-2 py-1 text-sm text-gray-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4 pt-4'>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white'
                  >
                    <Github className='h-6 w-6' />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-white'
                    >
                      <ExternalLink className='h-6 w-6' />
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
