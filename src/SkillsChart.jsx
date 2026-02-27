import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function SkillsChart() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#9ca3af',
          font: { size: 12 }
        },
        grid: {
          color: '#475569'
        },
        pointLabels: {
          color: '#e5e7eb',
          font: { size: 13, weight: 'bold' }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#e5e7eb',
          font: { size: 12 }
        }
      }
    }
  }

  const languagesData = {
    labels: ['JavaScript', 'Python', 'TypeScript', 'HTML/CSS', 'SQL'],
    datasets: [{
      label: 'Proficiency %',
      data: [95, 85, 80, 90, 88],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      pointBackgroundColor: '#3b82f6',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    }]
  }

  const toolsData = {
    labels: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    datasets: [{
      label: 'Proficiency %',
      data: [92, 78, 82, 80, 85],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      borderWidth: 2,
      pointBackgroundColor: '#10b981',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    }]
  }

  const technicalData = {
    labels: ['React', 'Node.js', 'Database', 'API Design', 'Testing'],
    datasets: [{
      label: 'Proficiency %',
      data: [93, 88, 86, 84, 80],
      borderColor: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.2)',
      borderWidth: 2,
      pointBackgroundColor: '#f59e0b',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    }]
  }

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills Dashboard</h2>
      
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
          <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Languages</h3>
          <Radar data={languagesData} options={chartOptions} />
        </div>
        
        <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
          <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Tools & DevOps</h3>
          <Radar data={toolsData} options={chartOptions} />
        </div>
        
        <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
          <h3 className="text-xl font-bold text-amber-400 mb-4 text-center">Technical Skills</h3>
          <Radar data={technicalData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}
