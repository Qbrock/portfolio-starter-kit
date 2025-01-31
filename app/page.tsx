export default function Page() {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'Rust', icon: '🦀' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'C', icon: '⚙️' },
    { name: 'Go', icon: '🔵' },
    { name: 'RISC-V', icon: '💻' }
  ]

  const sections = [
    {
      title: 'Experience',
      description: 'View my past career experience, with showcases of work.',
      link: '/experience'
    },
    {
      title: 'Projects',
      description: 'Explore a collection of my personal projects.',
      link: '/projects'
    },
    {
      title: 'About',
      description: 'Learn more about my background, skills, and interests.',
      link: '/about'
    },
    {
      title: 'Contact',
      description: 'Reach out to me for any inquiries or collaborations.',
      link: '/contact'
    }
  ]

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold bg-black bg-opacity-80 inline-block px-2 py-1 rounded">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech.name} className="bg-black bg-opacity-80 px-3 py-1 rounded-full">
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <a
            key={section.title}
            href={section.link}
            className="group block p-6 bg-black bg-opacity-80 rounded-lg hover:bg-opacity-90 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              {section.title}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </h3>
            <p className="text-neutral-400">{section.description}</p>
          </a>
        ))}
      </section>

      <div className="pt-8 text-neutral-400 bg-black bg-opacity-80 inline-block px-2 py-1 rounded">
        San Francisco, CA
      </div>
    </div>
  )
}
