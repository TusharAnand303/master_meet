import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href={'/'} className='flex items-center gap-2'>
        <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt='Yoom LOGO'
        className='max-sm:size-10'
        />
        <p className='text-[23px] font-extrabold text-white max-sm:hidden'>Master Meet</p>
      </Link> 
      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
