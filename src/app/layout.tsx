import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/react'

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
      </head>
      <body className='bg-background'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
