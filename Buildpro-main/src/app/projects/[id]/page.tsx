import { notFound } from 'next/navigation'
import { Building2, Calendar, DollarSign, MapPin, User, Clock, CheckCircle } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { formatCurrency, formatDate, getStatusColor } from '@/lib/utils'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      milestones: {
        orderBy: {
          dueDate: 'asc',
        },
      },
    },
  })

  if (!project) {
    notFound()
  }

  const completedMilestones = project.milestones.filter(m => m.status === 'completed').length
  const totalMilestones = project.milestones.length
  const progressPercentage = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="text-lg">
                {formatCurrency(project.budget)}
              </span>
            </div>
            <p className="text-xl max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Image */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-8">
                <Building2 className="h-16 w-16 text-gray-400" />
              </div>

              {/* Project Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Milestones */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Milestones</h2>
                
                {project.milestones.length > 0 ? (
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-500">
                          {completedMilestones} of {totalMilestones} completed
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Milestones List */}
                    {project.milestones.map((milestone, index) => (
                      <div
                        key={milestone.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          milestone.status === 'completed'
                            ? 'border-green-500 bg-green-50'
                            : milestone.status === 'in-progress'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                              milestone.status === 'completed'
                                ? 'bg-green-500 text-white'
                                : milestone.status === 'in-progress'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-600'
                            }`}>
                              {milestone.status === 'completed' ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <span className="text-xs font-bold">{index + 1}</span>
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                              {milestone.description && (
                                <p className="text-sm text-gray-600">{milestone.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">
                              Due: {formatDate(milestone.dueDate)}
                            </div>
                            <div className={`text-xs font-medium ${
                              milestone.status === 'completed'
                                ? 'text-green-600'
                                : milestone.status === 'in-progress'
                                ? 'text-blue-600'
                                : 'text-gray-500'
                            }`}>
                              {milestone.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No milestones defined for this project yet.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Budget</div>
                      <div className="font-semibold text-gray-900">{formatCurrency(project.budget)}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Deadline</div>
                      <div className="font-semibold text-gray-900">{formatDate(project.deadline)}</div>
                    </div>
                  </div>
                  
                  {project.location && (
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-semibold text-gray-900">{project.location}</div>
                      </div>
                    </div>
                  )}
                  
                  {project.client && (
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Client</div>
                        <div className="font-semibold text-gray-900">{project.client}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Status</div>
                      <div className="font-semibold text-gray-900 capitalize">{project.status}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interested in Similar Projects?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us to discuss your construction needs and get a free consultation.
                </p>
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
