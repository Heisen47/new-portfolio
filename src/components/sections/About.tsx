import { Github } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto max-w-6xl px-4'>
        <h2 className='mb-8 text-center text-4xl font-bold text-white'>
          About Me
        </h2>
        <div className='grid items-center gap-8 rounded-2xl border border-white/20 p-6 backdrop-blur-sm sm:p-8 md:grid-cols-2'>
          <div className='space-y-6 text-gray-300'>
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
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white'>Core Skills:</h3>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='rounded-xl border border-white/10 p-4'>
                  <h4 className='mb-2 font-medium text-white'>Frontend</h4>
                  <ul className='space-y-1'>
                    <li>• React & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
                <div className='rounded-xl border border-white/10 p-4'>
                  <h4 className='mb-2 font-medium text-white'>Backend</h4>
                  <ul className='space-y-1'>
                    <li>• Java Spring Boot</li>
                    <li>• RESTful APIs</li>
                    <li>• SQL Databases</li>
                    <li>• Node.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='group relative'>
            <div className='rounded-xl border border-white/10 bg-gray-800/50 p-6 shadow-xl backdrop-blur-sm'>
              <div className='flex flex-col items-center space-y-4'>
                <div className='relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/10'>
                  <img
                    src='/your-image.jpg' // Add your image to the public folder
                    alt='Your Name'
                    className='h-full w-full object-cover'
                  />
                </div>
                
                <div className='mt-4 flex gap-4'>
                  {/* Optional: Add social links */}
                  <a
                    href='https://github.com/heisen47'
                    className='text-gray-300 hover:text-white'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub Profile'                   
                  >
                    <span className='sr-only text-white'>github</span>
                    <Github className='h-6 w-6' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
