import { useState, useEffect } from 'react'

export default function Footer() {
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
      })
      setLocalTime(time)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-sm text-gray-400">Local Time: {localTime}</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}