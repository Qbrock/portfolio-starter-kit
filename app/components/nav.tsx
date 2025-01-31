'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/experience': {
    name: 'Experience',
  },
  '/about': {
    name: 'About',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  return (
    <div className="flex justify-between items-center w-full mb-16">
      <h1 className="text-4xl font-bold tracking-tighter">
        Quinn Brockmyre
      </h1>
      <nav className="flex items-center">
        <div className="flex space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="text-lg font-bold transition-all hover:text-neutral-400 py-2 px-4"
              >
                {name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-neutral-400 hover:text-white transition-colors relative z-50"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300 ease-in-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // X icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-neutral-900 rounded-lg shadow-xl border border-neutral-800 dropdown-menu z-50">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      )}

      {/* Click outside handler */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: 'transparent' }}
        />
      )}
    </div>
  )
}


