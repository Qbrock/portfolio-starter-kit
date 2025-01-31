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
