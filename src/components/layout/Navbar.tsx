import Link from 'next/link'
import home from '../../Util/home.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='bg-transparent p-4 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='text-xl font-bold'>
          <Image
            src={home}
            alt='logo'
            width={90}
            loading='lazy'
          />
        </Link>
        <div className='hidden space-x-6 md:flex'>
          <Link href='#about' className='hover:text-slate-500'>
            About
          </Link>
          <Link href='#projects' className='hover:text-slate-500'>
            Projects
          </Link>
          <Link href='#skills' className='hover:text-slate-500'>
            Skills
          </Link>
        </div>
      </div>
    </nav>
  )
}
