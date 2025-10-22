import Link from 'next/link'
import { Building2, Calendar, DollarSign, MapPin, Filter } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { formatCurrency, formatDate, getStatusColor } from '@/lib/utils'

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    include: {
      milestones: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const statuses = ['all', 'planning', 'in-progress', 'completed', 'on-hold']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our portfolio of successful construction and renovation projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Projects ({projects.length})
              </h2>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Filter by status:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {statuses.map((status) => (
                <button
                  key={status}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    status === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status === 'all' ? 'All Projects' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{formatCurrency(project.budget)}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Due: {formatDate(project.deadline)}</span>
                    </div>
                    
                    {project.location && (
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{project.milestones.length} milestones</span>
                      <span className="group-hover:text-blue-600 transition-colors">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Check back later for new projects.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
