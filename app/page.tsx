import { DiReact } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiGo } from "react-icons/di";
import { SiRiscv } from "react-icons/si";


export default function Page() {
  const technologies = {
    'React': <DiReact/>,
    'Java': <FaJava/>,
    'Python': <SiPython/>,
    'Rust': <FaRust/>,
    'TypeScript': <SiTypescript/>,
    'C': <img width="26" height="26" src="https://img.icons8.com/color/48/c-programming.png" alt="c-programming language"/>,
    'Go': <DiGo/>,
    'RISC-V': <SiRiscv/>

  }

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
    <div className="space-y-8 pointer-events-none">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold inline-block px-2 py-1 rounded pointer-events-auto text-[#383838]">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(technologies).map(([name, icon]) => (
            <span 
              key={name} 
              className="px-3 py-1 rounded-full pointer-events-auto flex gap-2 items-center text-[#383838]"
            >
              {icon}{name}
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <a
            key={section.title}
            href={section.link}
            className="group block p-6 rounded-lg hover:bg-opacity-10 transition-all pointer-events-auto"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center text-[#383838]">
              {section.title}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </h3>
            <p className="text-neutral-400">{section.description}</p>
          </a>
        ))}
      </section>
    </div>
  )
}
