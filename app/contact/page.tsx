export default function ContactPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="max-w-xl space-y-4">
        <p className="text-neutral-400">
          Feel free to reach out to me through any of the following channels:
        </p>
        
        <div className="space-y-4">
          <a 
            href="mailto:your.email@example.com"
            className="block p-4 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
          >
            <h3 className="font-medium">Email</h3>
            <p className="text-neutral-400">your.email@example.com</p>
          </a>
          
          <a 
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
          >
            <h3 className="font-medium">LinkedIn</h3>
            <p className="text-neutral-400">Connect with me professionally</p>
          </a>
          
          <a 
            href="https://github.com/Qbrock"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
          >
            <h3 className="font-medium">GitHub</h3>
            <p className="text-neutral-400">Check out my code and contributions</p>
          </a>
        </div>
      </div>
    </section>
  )
} 