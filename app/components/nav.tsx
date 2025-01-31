import Link from 'next/link'

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
  return (
    <button className="text-neutral-400 hover:text-white transition-colors">
      <svg
        className="w-6 h-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
          className="transition-opacity duration-300"
        />
      </svg>
    </button>
  )
}


