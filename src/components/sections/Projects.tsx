import { Github, ExternalLink, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { projects } from '@/data/projects'

export default function Projects() {
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
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className='flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-800/50 backdrop-blur-sm'
            >
              <div className='relative h-40 w-full shrink-0'>
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
              <div className='flex flex-1 flex-col space-y-3 p-4'>
                <h3 className='text-lg font-semibold text-white'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-300 line-clamp-3'>{project.description}</p>
                <div className='mt-auto flex flex-wrap gap-2 pt-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='rounded-md bg-white/10 px-2 py-1 text-xs text-gray-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4 pt-3'>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white'
                  >
                    <Github className='h-5 w-5' />
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
                      <ExternalLink className='h-5 w-5' />
                    </motion.a>
                  )}
                  {project.mediumUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.mediumUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-white'
                    >
                      <BookOpen className='h-5 w-5' />
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
