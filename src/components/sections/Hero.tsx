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
    <div className="flex flex-col items-center justify-center w-full text-center py-20">
      <div className="mb-4 flex justify-center text-4xl font-bold sm:text-6xl">
        <div className="relative flex">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="whitespace-pre"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <div className="relative ml-1 w-[1ch]">
            <AnimatePresence>
              {showCursor && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-0 text-blue-500"
                >
                  _
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 min-h-[150px] sm:min-h-[200px]">
        <AnimatePresence>
          {isTypingDone && (
            <>
              <motion.p
                className="text-sm sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                Your friendly neighbourhood Software Engineer
              </motion.p>
                <motion.button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-block rounded-full bg-transparent border border-blue-500 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base text-blue-500 hover:bg-blue-500 hover:text-white hover:bg-opacity-20 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                >
                Get in Touch
                </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}

export default Hero