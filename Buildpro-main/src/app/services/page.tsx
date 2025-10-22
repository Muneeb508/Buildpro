import { Building2, Wrench, Shield, Clock, DollarSign, Users, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Construction Management',
      description: 'Complete project oversight from planning to completion, ensuring quality, safety, and timely delivery.',
      icon: Building2,
      features: [
        'Project planning and scheduling',
        'Quality control and assurance',
        'Safety management',
        'Cost control and budgeting',
        'Subcontractor coordination',
        'Progress monitoring'
      ]
    },
    {
      title: 'Design & Planning',
      description: 'Comprehensive design services and detailed project planning to ensure successful execution.',
      icon: Wrench,
      features: [
        'Architectural design',
        'Engineering solutions',
        'Permit acquisition',
        'Site analysis',
        'Material selection',
        'Timeline development'
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to maintain the highest standards throughout your project.',
      icon: Shield,
      features: [
        'Material testing',
        'Workmanship inspection',
        'Code compliance',
        'Documentation management',
        'Quality audits',
        'Defect prevention'
      ]
    },
    {
      title: 'Timeline Management',
      description: 'Expert scheduling and timeline management to keep your project on track and on time.',
      icon: Clock,
      features: [
        'Critical path analysis',
        'Resource allocation',
        'Milestone tracking',
        'Delay prevention',
        'Schedule optimization',
        'Progress reporting'
      ]
    },
    {
      title: 'Budget Control',
      description: 'Comprehensive financial management to ensure your project stays within budget.',
      icon: DollarSign,
      features: [
        'Cost estimation',
        'Budget monitoring',
        'Change order management',
        'Vendor negotiations',
        'Financial reporting',
        'Cost optimization'
      ]
    },
    {
      title: 'Team Coordination',
      description: 'Expert coordination of all project stakeholders for seamless collaboration.',
      icon: Users,
      features: [
        'Stakeholder management',
        'Communication protocols',
        'Team coordination',
        'Conflict resolution',
        'Progress meetings',
        'Documentation sharing'
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet with you to understand your vision, requirements, and project goals.'
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Our team creates detailed plans, designs, and schedules for your project.'
    },
    {
      step: '03',
      title: 'Permits & Approvals',
      description: 'We handle all necessary permits and regulatory approvals.'
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Our skilled team executes the project with regular progress updates.'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Thorough inspections ensure everything meets our high standards.'
    },
    {
      step: '06',
      title: 'Project Delivery',
      description: 'Final walkthrough and handover of your completed project.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive construction and project management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial planning to final delivery, we provide end-to-end construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BuildPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring decades of experience and a commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Proven track record in construction and project management</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Rigorous quality control processes ensure exceptional results</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">Expert timeline management keeps projects on schedule</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Budget Control</h3>
              <p className="text-gray-600">Transparent pricing and cost management throughout</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
