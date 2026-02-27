export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'ReactJS', 'Tailwind CSS']
    },
    {
      category: 'Languages', 
      skills: ['Python', 'C']
    },
    {
      category: 'Backend',
      skills: ['Node.js (Basic)']
    },
    {
      category: 'Database',
      skills: ['PostgreSQL (Learning Level)']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub']
    },
    {
      category: 'Concepts',
      skills: ['Responsive Design', 'Component Architecture', 'State Management']
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map(category => (
            <div key={category.category} className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-cyan-400/20 shadow-xl hover:border-cyan-400/40 transition">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map(skill => (
                  <div key={skill} className="bg-slate-700/50 text-white px-4 py-3 rounded-lg border border-gray-600/30 hover:border-cyan-400/30 transition">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
