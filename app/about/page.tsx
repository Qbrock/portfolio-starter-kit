export default function AboutPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">About Me</h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-neutral-300">
          [Your introduction paragraph goes here]
        </p>

        <div>
          <h3 className="text-xl font-medium mb-4">Education</h3>
          <div className="border border-neutral-800 rounded-lg p-6">
            <h4 className="font-medium">University of San Francisco</h4>
            <p className="text-neutral-400">B.S. Computer Science • Expected May 2025</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Interests</h3>
          <p className="text-neutral-300">
            [Your interests and hobbies paragraph]
          </p>
        </div>
      </div>
    </section>
  )
} 