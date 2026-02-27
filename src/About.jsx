export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">About Me</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-8 shadow-xl mb-8">
            <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
              <p>
                I am a motivated B.Tech ECE student at Annamacharya Institute of Technology and Science, Tirupati,
                with strong skills in HTML, CSS, JavaScript, and ReactJS. I have hands-on experience building
                responsive web applications and am passionate about creating user-friendly interfaces that provide
                excellent user experiences.
              </p>

              <p>
                My expertise lies in frontend development with a solid foundation in modern JavaScript frameworks,
                particularly React. I am actively expanding my knowledge in backend technologies, including Node.js,
                and database management with PostgreSQL. I believe in writing clean, maintainable code and following
                industry best practices to build scalable applications.
              </p>

              <p>
                I am seeking entry-level or internship opportunities in Full Stack Development where I can contribute
                to meaningful projects while continuing to grow my technical skills. My goal is to work with
                cutting-edge technologies and collaborate with experienced developers to build innovative solutions
                that make a real impact.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Download My Resume</h2>
            <a href="https://drive.google.com/file/d/1E5zJq_gqsy_2OQoM0935gzMj-rNN3pP1/view?usp=sharing" download>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg text-lg">
                📄 Download Resume (PDF)
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
