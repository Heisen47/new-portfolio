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
      }, 150) // Adjust typing speed here
      return () => clearTimeout(timeout)
    } else {
      // Set typing as done when the full text is displayed
      setIsTypingDone(true)
    }
  }, [text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530) // Cursor blink speed
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className='pt-10 text-center'>
      <div className='pt-10 text-center'>
        <div className='mb-4 flex justify-center text-6xl font-bold'>
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
            <div className='relative ml-1 w-[2px]'>
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
          <>
            <motion.p
              className='mb-8 text-xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Your friendly neighbourhood Software Engineer
            </motion.p>
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              className='inline-block rounded-full bg-blue-500 px-6 py-3 hover:bg-blue-600'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Get in Touch
            </motion.button>
          </>
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
