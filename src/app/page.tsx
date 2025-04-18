'use client';

import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'


export default function Page() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </Layout>
  )
}