export default function Education() {
  const education = [
    {
      degree: 'B.Tech – Electronics and Communication Engineering',
      institution: 'Annamacharya Institute of Technology and Science, Tirupati',
      duration: '2022–2026',
      grade: 'CGPA: 7.9'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'MGM Junior College',
      duration: '2020–2022',
      grade: '83.2%'
    },
    {
      degree: 'SSC',
      institution: 'ZPHS Thondamanadu',
      duration: '2019–2020',
      grade: '96%'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Education</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-6 shadow-xl hover:border-cyan-400/40 transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                    <p className="text-white font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-cyan-600/20 text-cyan-300 px-4 py-2 rounded-lg font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}