export default function Certifications() {
  const certifications = [
    {
      title: 'Python',
      issuer: 'Spoken Tutorial Project, IIT Bombay',
      type: 'certification'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Smart Bridge Interns',
      type: 'certification'
    },
    {
      title: 'IoT',
      issuer: 'edX',
      type: 'certification'
    }
  ]

  const activities = [
    {
      title: 'Coordinated Codeathon 2K25',
      description: '450+ participants',
      type: 'activity'
    },
    {
      title: 'Participated in UAV Drone Workshop',
      description: 'Hands-on experience with drone technology',
      type: 'activity'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Certifications & Activities</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Certifications Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-6 shadow-xl hover:border-cyan-400/40 transition">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400">{cert.title}</h3>
                      <p className="text-gray-300">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Activities</h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-6 shadow-xl hover:border-cyan-400/40 transition">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400">{activity.title}</h3>
                      <p className="text-gray-300">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}