import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Code, Cloud } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
  date: string
  link?: string
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: 'Open Source Impact',
      description:
        'Lead developer of Pujo Atlas, an open-source festival navigation app that reached 12k peak viewers during Durga Puja festival',
      icon: <Code className='h-6 w-6' />,
      date: '2024',
      link: 'https://atlas.ourkolkata.in/'
    },
    {
      title: 'AWS Certification',
      description:
        'Achieved AWS certification, demonstrating expertise in cloud architecture and services',
      icon: <Cloud className='h-6 w-6' />,
      date: '2023',
      link: 'https://www.credly.com/users/saptarshi-chakraborty.25467d03'
    },
    {
      title: 'LeetCode Knight',
      description:
        'Achieved Knight status on LeetCode, demonstrating strong problem-solving and algorithmic skills',
      icon: <Trophy className='h-6 w-6' />,
      date: '2025',
      link: 'https://leetcode.com/u/Heisen_47/'
    },
    {
      title: 'Hacktoberfest Participant',
      description:
        'Successfully completed a Hacktoberfest, developing innovative solutions under time constraints',
      icon: <Award className='h-6 w-6' />,
      date: '2024',
      link: 'https://hacktoberfest.com/'
    }
  ]

  return (
    <section id='achievements' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center text-4xl font-bold text-white'
        >
          Achievements
        </motion.h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='rounded-xl border border-white/10 bg-gray-800/50 p-6 backdrop-blur-sm transition-all hover:border-white/20'
              onClick={() =>
                achievement.link && window.open(achievement.link, '_blank')
              }
              role='link'
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  achievement.link && window.open(achievement.link, '_blank')
                }
              }}
            >
              <div className='flex items-start gap-4'>
                <div className='rounded-lg bg-gray-700/50 p-3'>
                  {achievement.icon}
                </div>
                <div>
                  <h3 className='mb-2 text-xl font-semibold text-white'>
                    {achievement.title}
                  </h3>
                  <p className='mb-2 text-gray-300'>
                    {achievement.description}
                  </p>
                  <span className='text-sm text-gray-400'>
                    {achievement.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
