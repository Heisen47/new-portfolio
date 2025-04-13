import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ContactModal } from '@/components/ui/ContactModal'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Hi! I am Rishi'
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingDone(true)
    }
  }, [text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className='pt-10 text-center'>
      <div className='pt-10 text-center'>
        <div className='mb-4 flex justify-center text-4xl font-bold sm:text-6xl'>
          <div className='relative flex'>
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className='whitespace-pre'
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            {/* Fix for cursor jerking */}
            <div className='relative ml-1 w-[1ch]'>
              <AnimatePresence>
                {showCursor && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='absolute left-0 top-0 text-blue-500'
                  >
                    _
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isTypingDone && (
          <div className='flex h-[120px] flex-col items-center space-y-4 sm:h-[150px]'>
            <motion.p
              className='text-sm sm:text-xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Your friendly neighbourhood Software Engineer
            </motion.p>
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              className='inline-block rounded-full bg-blue-500 px-4 py-2 text-sm hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-base'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Get in Touch
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}

export default Hero
