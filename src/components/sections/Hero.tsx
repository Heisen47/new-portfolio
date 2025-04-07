import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="text-center">
      <motion.div
        className="mb-4 text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Saptarshi Chakraborty
      </motion.div>
      <p className="mb-8 text-2xl">Software Engineer</p>
      <a
        href="#contact"
        className="rounded-full bg-blue-500 px-6 py-3 hover:bg-blue-600"
      >
        Get in Touch
      </a>
    </div>
  );
}