import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md text-white shadow-lg w-full border-b border-cyan-400/20 sticky top-0 z-50">
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition">
          OSURU JAGADEESH
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-300 hover:text-cyan-400 transition font-medium">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition font-medium">About</Link>
          <Link to="/skills" className="text-gray-300 hover:text-cyan-400 transition font-medium">Skills</Link>
          <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition font-medium">Projects</Link>
          <Link to="/education" className="text-gray-300 hover:text-cyan-400 transition font-medium">Education</Link>
          <Link to="/certifications" className="text-gray-300 hover:text-cyan-400 transition font-medium">Certifications</Link>
          <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition font-medium">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
