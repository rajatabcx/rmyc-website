'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const leftNavItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT THE CLUB', href: '/about' },
  { name: 'LEISURE SAILING', href: '/leisure' },
];

const rightNavItems = [
  { name: 'LEARNING PROGRAMS', href: '/learning' },
  { name: 'MEMBERSHIP', href: '/membership' },
  { name: 'CONTACT US', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 left-0 right-0 z-50 mx-auto w-full bg-white max-h-20'>
      <div className='max-w-[1170px] mx-auto px-4 h-20'>
        <div className='flex items-center justify-between h-20'>
          {/* Desktop Navigation - Left Side */}
          <nav className='hidden lg:flex lg:flex-1'>
            <ul className='flex items-center space-x-8'>
              {leftNavItems.map((item) => (
                <li key={item.name}>
                  <NavLink href={item.href}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo - Center on desktop, left on mobile */}
          <div className='flex flex-1 items-center lg:flex-none lg:justify-center z-50'>
            <Link
              href='/'
              className='relative h-16 w-16 lg:h-20 lg:w-20 flex items-center'
            >
              <Image
                src='/rmyc_logo.png'
                alt='Sailing Club Logo'
                className='object-contain'
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <nav className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <ul className='flex items-center space-x-8'>
              {rightNavItems.map((item) => (
                <li key={item.name}>
                  <NavLink href={item.href}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='relative z-50 lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            <AnimatePresence mode='wait'>
              {isOpen ? (
                <motion.div
                  key='close'
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className='h-6 w-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className='h-6 w-6' />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className='fixed inset-0 z-40 bg-white h-screen'
              >
                <nav className='flex h-full flex-col items-center justify-center'>
                  <ul className='space-y-6 text-center'>
                    {[...leftNavItems, ...rightNavItems].map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className='text-lg font-medium transition-colors text-primary group relative'
                        >
                          {item.name}
                          <span className='absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-primary transition-transform group-hover:scale-x-100' />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className='group relative font-medium transition-colors text-primary'
    >
      {children}
      <span className='absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-primary transition-transform group-hover:scale-x-100' />
    </Link>
  );
}
