import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import path from 'path'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(process.cwd(), 'prisma', 'dev.db')}`
    }
  }
})

async function main() {
  // Create sample projects
  const project1 = await prisma.project.create({
    data: {
      title: 'Modern Office Complex',
      description: 'A state-of-the-art 20-story office building in downtown with sustainable design features and modern amenities.',
      status: 'completed',
      budget: 2500000,
      deadline: new Date('2024-06-15'),
      location: 'Downtown Business District',
      client: 'TechCorp Inc.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
  })

  const project2 = await prisma.project.create({
    data: {
      title: 'Residential Tower',
      description: 'Luxury residential complex with premium amenities including rooftop garden, fitness center, and concierge services.',
      status: 'in-progress',
      budget: 1800000,
      deadline: new Date('2024-12-30'),
      location: 'Waterfront District',
      client: 'Urban Development LLC',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    },
  })

  const project3 = await prisma.project.create({
    data: {
      title: 'Shopping Mall Renovation',
      description: 'Complete renovation of a 50,000 sq ft shopping center including new facade, interior redesign, and parking improvements.',
      status: 'completed',
      budget: 1200000,
      deadline: new Date('2024-03-20'),
      location: 'Suburban Shopping District',
      client: 'Retail Solutions Group',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    },
  })

  const project4 = await prisma.project.create({
    data: {
      title: 'Hospital Expansion',
      description: 'Major expansion project adding new wing with 100 patient rooms, surgical suites, and emergency department.',
      status: 'planning',
      budget: 3500000,
      deadline: new Date('2025-08-15'),
      location: 'Medical District',
      client: 'City General Hospital',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    },
  })

  // Create sample milestones for project 2 (Residential Tower)
  await prisma.milestone.createMany({
    data: [
      {
        title: 'Foundation Work',
        description: 'Complete foundation excavation and concrete pouring',
        status: 'completed',
        dueDate: new Date('2024-02-15'),
        projectId: project2.id,
      },
      {
        title: 'Structural Framework',
        description: 'Erect steel framework and concrete structure',
        status: 'completed',
        dueDate: new Date('2024-04-30'),
        projectId: project2.id,
      },
      {
        title: 'Exterior Finishing',
        description: 'Install facade, windows, and exterior finishes',
        status: 'in-progress',
        dueDate: new Date('2024-08-15'),
        projectId: project2.id,
      },
      {
        title: 'Interior Work',
        description: 'Complete interior finishes, electrical, and plumbing',
        status: 'pending',
        dueDate: new Date('2024-10-30'),
        projectId: project2.id,
      },
      {
        title: 'Final Inspection',
        description: 'Final inspections and project handover',
        status: 'pending',
        dueDate: new Date('2024-12-15'),
        projectId: project2.id,
      },
    ],
  })

  // Create sample milestones for project 4 (Hospital Expansion)
  await prisma.milestone.createMany({
    data: [
      {
        title: 'Design Phase',
        description: 'Complete architectural and engineering design',
        status: 'in-progress',
        dueDate: new Date('2024-12-31'),
        projectId: project4.id,
      },
      {
        title: 'Permit Approval',
        description: 'Obtain all necessary permits and approvals',
        status: 'pending',
        dueDate: new Date('2025-02-15'),
        projectId: project4.id,
      },
      {
        title: 'Site Preparation',
        description: 'Site clearing and preparation for construction',
        status: 'pending',
        dueDate: new Date('2025-03-30'),
        projectId: project4.id,
      },
      {
        title: 'Construction Start',
        description: 'Begin major construction work',
        status: 'pending',
        dueDate: new Date('2025-04-15'),
        projectId: project4.id,
      },
    ],
  })

  console.log('Sample data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
