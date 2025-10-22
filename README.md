BuildPro - Construction & Project Management Platform
A modern construction company website that doubles as a mini project management dashboard. Built with Next.js, TypeScript, Tailwind CSS, and Prisma.

🚀 Features
Public Website
Home Page: Hero section, key stats, featured projects, testimonials
Services Page: Comprehensive list of construction services
Projects Page: Gallery of past and ongoing projects with filters
Project Details: Dynamic routes showing project info, images, and timeline
Contact Page: Form connected to API route for submission
Admin Dashboard
Project Management: Add, edit, delete projects (CRUD operations)
Project Overview: Dashboard with project statistics and status
Milestone Tracking: Visual progress tracking with completion status
Responsive Design: Works seamlessly on desktop and mobile
Technical Features
Next.js App Router: Modern routing with SSR and SEO optimization
TypeScript: Full type safety throughout the application
Tailwind CSS: Modern, responsive styling
Prisma + SQLite: Database ORM with local SQLite for development
API Routes: RESTful API for project and contact management
Responsive Design: Mobile-first approach with modern UI/UX
🛠️ Tech Stack
Frontend: Next.js 16, React 18, TypeScript
Styling: Tailwind CSS, Lucide React icons
Database: Prisma ORM with SQLite
Deployment: Ready for Vercel deployment
📁 Project Structure
src/
├── app/
│   ├── api/
│   │   ├── projects/
│   │   │   ├── route.ts          # Projects CRUD API
│   │   │   └── [id]/route.ts     # Individual project API
│   │   └── contact/route.ts      # Contact form API
│   ├── admin/page.tsx            # Admin dashboard
│   ├── contact/page.tsx          # Contact page
│   ├── projects/
│   │   ├── page.tsx              # Projects listing
│   │   └── [id]/page.tsx         # Project details
│   ├── services/page.tsx         # Services page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Navigation.tsx            # Main navigation
│   └── Footer.tsx                # Site footer
├── lib/
│   ├── prisma.ts                 # Prisma client
│   └── utils.ts                  # Utility functions
└── generated/prisma/             # Generated Prisma client
🚀 Getting Started
Prerequisites
Node.js 18+
npm or yarn
Installation
Clone the repository

git clone <repository-url>
cd BuildPro
Install dependencies

npm install
Set up the database

npx prisma generate
npx prisma db push
Start the development server

npm run dev
Open your browser Navigate to http://localhost:3000

📊 Database Schema
Project Model
id: Unique identifier
title: Project name
description: Project details
status: planning, in-progress, completed, on-hold
budget: Project budget
deadline: Project deadline
image: Project image URL
location: Project location
client: Client name
createdAt: Creation timestamp
updatedAt: Last update timestamp
Milestone Model
id: Unique identifier
title: Milestone name
description: Milestone details
status: pending, in-progress, completed
dueDate: Milestone deadline
projectId: Reference to parent project
Contact Model
id: Unique identifier
name: Contact name
email: Contact email
phone: Contact phone (optional)
message: Contact message
subject: Message subject (optional)
createdAt: Submission timestamp
🎨 Key Features Implemented
1. Modern UI/UX
Responsive design with Tailwind CSS
Clean, professional construction industry aesthetic
Smooth transitions and hover effects
Mobile-first approach
2. Project Management
Complete CRUD operations for projects
Visual project status indicators
Budget and timeline tracking
Milestone progress visualization
3. SEO Optimization
Next.js App Router for optimal SEO
Server-side rendering for fast page loads
Proper meta tags and structured data
Fast loading times
4. API Integration
RESTful API design
Type-safe API routes
Error handling and validation
Database integration with Prisma
🔧 Development
Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run start - Start production server
npm run lint - Run ESLint
Database Management
npx prisma studio - Open Prisma Studio (database GUI)
npx prisma db push - Push schema changes to database
npx prisma generate - Generate Prisma client
🚀 Deployment
Vercel (Recommended)
Push your code to GitHub
Connect your repository to Vercel
Deploy with zero configuration
Environment Variables
Create a .env.local file for production:

DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="your-domain.com"
📱 Responsive Design
The application is fully responsive and optimized for:

Desktop: Full-featured experience with sidebar navigation
Tablet: Adapted layout with collapsible navigation
Mobile: Touch-friendly interface with mobile navigation
🎯 Future Enhancements
 User authentication with NextAuth
 File upload for project images
 Email notifications for contact forms
 Advanced project filtering and search
 Real-time project updates
 Integration with external APIs (maps, weather)
 Advanced reporting and analytics
 Multi-language support
📄 License
This project is licensed under the MIT License.

🤝 Contributing
Fork the repository
Create a feature branch
Commit your changes
Push to the branch
Open a Pull Request

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
