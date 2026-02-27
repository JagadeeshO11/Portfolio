import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-slate-900 w-full">
      <div className="w-full px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Contact Me</h1>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">jagosuru@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+91 9177067341</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🔗</span>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <a href="https://linkedin.com/in/22ak1a0451" className="text-cyan-400 hover:text-cyan-300">linkedin.com/in/22ak1a0451</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🐈</span>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <a href="https://github.com/JagadeeshO11" className="text-cyan-400 hover:text-cyan-300">github.com/JagadeeshO11</a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Tirupati, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-cyan-400/20 p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Send Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-900/60 backdrop-blur-sm border border-green-400/40 rounded-lg text-green-200">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
