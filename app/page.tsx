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
    <div className="space-y-16">
      {/* Technologies Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-x-2 bg-neutral-900 px-4 py-2 rounded-md"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-neutral-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <a
            key={section.title}
            href={section.link}
            className="group block p-6 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              {section.title}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </h3>
            <p className="text-neutral-400">{section.description}</p>
          </a>
        ))}
      </section>

      {/* Location */}
      <div className="pt-8 text-neutral-400">
        San Francisco, CA
      </div>
    </div>
  )
}
