import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Quinn Brockmyre
      </h1>
      <p className="mb-4">
        {`My name is Quinn Brockmyre, a computer science student at the University of San Francisco, set to graduate with a Bachelor of Science in Computer Science in May 2025. 
        I am skilled in programming languages like Java, Python, Rust, C, Go, and RISC-V Assembly, with a strong foundation in data structures, operating systems, compilers, and systems security. 
        Alongside my technical skills, I bring effective communication, problem-solving abilities, and experience in project coordination. 
        At USFCA, I co-founded the Compsigh Club, where I helped establish a tech community hub on campus. 
        I organized the inaugural "Deploy 23" Hackathon, which drew over 50 participants and fostered collaboration and practical tech skills. 
        Through partnerships with other clubs and expanding with industry partners, I aim to continue growing the club’s impact on the USFCA tech scene. 
        On he technical side, I developed a digital version of the "Five Crowns" card game in Java, showcasing my skills in design, coding, and debugging. 
        I also participated in the 2024 DonsHack hackathon, where my team and I created a project to improve waste sorting.
        Currently, I work as a tutor for the Computer Science Department and as a teaching assistant for Professor Greg Benson’s Systems Foundations course. 
        My previous experience includes working as a laser machine operator at LFI Inc., where I honed my attention to detail, ensuring product quality by identifying and resolving machine errors before they impacted production. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
