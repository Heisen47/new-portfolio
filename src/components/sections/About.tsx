import { Github, Twitter } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import image from '../../Util/your-image.jpg'

const About = () => {
  return (
    <section id='about' className='py-5'>
      <div className='container mx-auto max-w-6xl px-4'>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 text-center text-4xl font-bold text-white'
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='grid items-center gap-8 rounded-2xl border border-white/20 p-6 backdrop-blur-sm sm:p-8 md:grid-cols-2'
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-6 text-gray-300'
          >
            <p className='text-lg'>
              Hi! I'm a passionate Full Stack Developer with expertise in both
              frontend and backend technologies. I specialize in building robust
              applications using Spring Boot for backend services and React for
              dynamic frontend interfaces.
            </p>
            <p className='text-lg'>
              With a strong foundation in Java and modern web technologies, I
              excel at creating end-to-end solutions that are both scalable and
              user-friendly. My quick learning ability allows me to adapt to new
              technologies and frameworks efficiently, making me a versatile
              developer who can tackle diverse challenges.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='space-y-4'
            >
              <h3 className='text-xl font-semibold text-white'>Core Skills:</h3>
              <div className='grid gap-4 sm:grid-cols-2'>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className='rounded-xl border border-white/10 p-4'
                >
                  <h4 className='mb-2 font-medium text-white'>Frontend</h4>
                  <ul className='space-y-1'>
                    <li>• React & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Responsive Design</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className='rounded-xl border border-white/10 p-4'
                >
                  <h4 className='mb-2 font-medium text-white'>Backend</h4>
                  <ul className='space-y-1'>
                    <li>• Java Spring Boot</li>
                    <li>• RESTful APIs</li>
                    <li>• SQL Databases</li>
                    <li>• Node.js</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='group relative'
          >
            <div className='rounded-xl border border-white/10 bg-gray-800/50 p-6 shadow-xl backdrop-blur-sm'>
              <div className='flex flex-col items-center space-y-4'>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className='relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/10'
                >
                  <Image
                    src={image}
                    alt='Your Name'
                    fill
                    loading="lazy"
                    className='object-cover'
                    sizes='(max-width: 768px) 192px, 192px'
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className='mt-4 flex gap-4'
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href='https://github.com/heisen47'
                    className='text-gray-300 hover:text-white'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Profile'
                  >
                    <span className='sr-only text-white'>github</span>
                    <Github className='h-4 w-4' />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href='https://x.com/iWriteCode__'
                    className='text-gray-300 hover:text-white'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Profile'
                  >
                    <span className='sr-only text-white'>github</span>
                    <Twitter className='h-4 w-4' />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About