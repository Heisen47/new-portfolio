interface Project {
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    githubUrl: string
    liveUrl?: string
  }
  
  export default function Projects() {
    const projects: Project[] = [
      {
        title: "Project 1",
        description: "Description of your project",
        technologies: ["React", "TypeScript", "Tailwind"],
        imageUrl: "/projects/project1.png",
        githubUrl: "https://github.com/yourusername/project1",
        liveUrl: "https://project1.com"
      },
      // Add more projects
    ]
  
    return (
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Project card content */}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }