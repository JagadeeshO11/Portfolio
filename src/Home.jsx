import photo from './assets/photo.jpeg'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <img 
            src={photo} 
            alt="OSURU JAGADEESH" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400/50 shadow-lg object-cover"
          />
          <h1 className="text-6xl font-bold text-white mb-4">
            OSURU JAGADEESH
          </h1>
          <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Full Stack Developer</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Building scalable and responsive web applications using modern JavaScript technologies.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg">
              View Projects
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-semibold transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Frontend</h4>
              <p className="text-gray-300">HTML, CSS, JavaScript, React</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Backend</h4>
              <p className="text-gray-300">Node.js</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Database</h4>
              <p className="text-gray-300">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
