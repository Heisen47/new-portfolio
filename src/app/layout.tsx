import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'My-Portfolio',
  description: 'My portfolio website'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.variable}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='70'>🚀</text></svg>"
        />
      </head>
      <body className='bg-background'>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
