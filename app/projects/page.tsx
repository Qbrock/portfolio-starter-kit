export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">Featured Projects</h1>
      
      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
          <h3 className="font-medium text-xl mb-2">
            <a 
              href="https://github.com/Qbrock/Search_Engine"
              className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java Search Engine
            </a>
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            • Built a custom search engine implementation in Java
            <br />
            • Implemented efficient data structures and search algorithms
            <br />
            • Developed with a focus on performance and scalability
          </p>
        </div>

        <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
          <h3 className="font-medium text-xl mb-2">Compsigh Club Co-founder</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            • Co-founded and established a tech community hub on campus
            <br />
            • Organized "Deploy 23" Hackathon with 50+ participants
          </p>
        </div>

        <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
          <h3 className="font-medium text-xl mb-2">Five Crowns Digital Implementation</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            • Developed a digital version of the "Five Crowns" card game in Java
            <br />
            • Implemented game logic, UI, and debugging systems
          </p>
        </div>
      </div>
    </section>
  )
} 