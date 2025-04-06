import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-primary">
            About
          </Link>
          <Link href="#projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}