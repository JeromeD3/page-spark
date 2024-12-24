import React from 'react'
import { Link } from '@nextui-org/link'
import LogoWithText from './logo-with-text'
import { menuItems, socialLinks } from '@/lib/config'

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8 ">
      <LogoWithText />

      <span aria-hidden="true" className="block h-px w-px" style={{ marginLeft: '0.25rem', marginTop: '1rem' }} />

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        {menuItems.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-small text-default-500 transition-opacity hover:opacity-80"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <span aria-hidden="true" className="block h-px w-px" style={{ marginLeft: '0.25rem', marginTop: '1.5rem' }} />

      <div className="flex justify-center gap-x-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-medium text-default-400 transition-opacity hover:opacity-80"
          >
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </Link>
        ))}
      </div>

      <span aria-hidden="true" className="block h-px w-px" style={{ marginLeft: '0.25rem', marginTop: '1rem' }} />

      <p className="mt-1 text-center text-small text-default-400">© 2024 Page Spark. All rights reserved.</p>
    </footer>
  )
}

export default Footer
