'use client';

import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import { Analytics } from "@vercel/analytics/react"
import Achievements from '@/components/sections/Achievements';


export default function Page() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Skills />
    </Layout>
  )
}