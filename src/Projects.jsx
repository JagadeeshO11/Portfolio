export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Food Delivery Web Application',
      description: 'A responsive food delivery application built with ReactJS featuring modern UI components and interactive functionality.',
      tech: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
      features: ['Responsive UI', 'Reusable components', 'Add to cart / remove from cart', 'React Hooks usage'],
      github: 'https://github.com/JagadeeshO11',
      demo: '#'
    },
    {
      id: 2,
      name: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with clean design and smooth animations.',
      tech: ['ReactJS', 'HTML', 'CSS'],
      features: ['Structured layout', 'Project showcase', 'Responsive design'],
      github: 'https://github.com/JagadeeshO11',
      demo: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <div key={project.id} className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-cyan-600/80 to-blue-600/80 h-32"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-slate-700/60 text-gray-300 px-3 py-1 rounded text-xs border border-gray-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a href={project.github} className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                    GitHub →
                  </a>
                  <a href={project.demo} className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">More Projects Coming Soon!</h2>
            <p className="text-gray-300 text-lg">I'm currently working on exciting new projects that will be showcased here soon.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
