import cmsPreview from '../assets/projects/construction-management/preview.svg';
import cricversePreview from '../assets/projects/cricverse/preview.svg';
import carDealershipPreview from '../assets/projects/car-dealership/preview.svg';
import airbnbPreview from '../assets/projects/airbnb-clone/preview.svg';

// Default filter is Full Stack as requested
export const filterCategories = ["Full Stack", "Frontend", "UI/UX", "All"];

export const projects = [
  {
    id: "construction-management",
    number: "01",
    title: "Construction Management System",
    category: "Full Stack",
    featured: true,
    description:
      "A construction management platform designed to help manage construction projects, materials, attendance, equipment, and daily reports through role-based access.",
    detailedDescription:
      "A comprehensive management suite built to streamline construction operations. The platform enables distinct administrative, contractor, engineering, and site management workflows, synchronizing material logistics, attendance logs, and daily progress reporting.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Google OAuth",
      "Cloudinary",
    ],
    features: [
      "Role-based access control (Admin, Contractor, Engineer, Site Manager)",
      "Centralized project tracking & milestone management",
      "Inventory & materials management pipeline",
      "Worker & staff attendance monitoring",
      "Heavy equipment & asset scheduling",
      "Daily progress report submission & auditing",
      "Secure authentication & Google OAuth integration",
      "Cloudinary cloud storage for site documents & photos",
    ],
    roles: ["Admin", "Contractor", "Engineer", "Site Manager"],
    image: cmsPreview,
    imageAlt: "Construction Management System Interface Preview",
    github: null, // Placeholder: [ADD_CONSTRUCTION_GITHUB_URL]
    live: null,   // Placeholder: [ADD_CONSTRUCTION_LIVE_URL]
  },
  {
    id: "cricverse",
    number: "02",
    title: "CricVerse",
    category: "Full Stack",
    featured: true,
    description:
      "A cricket-focused web application with a modern interactive interface and real-time functionality.",
    detailedDescription:
      "An interactive web platform tailored for cricket enthusiasts featuring real-time event updates, detailed team statistics, and data-driven analytical charts powered by Socket.io and Recharts.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Passport Google Authentication",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
    ],
    features: [
      "Live match updates and real-time socket connections",
      "Visual run-rate and match analytics using Recharts",
      "Global state management with Redux Toolkit",
      "Passport Google OAuth & JWT authentication",
      "Smooth animated UI transitions with Framer Motion",
    ],
    image: cricversePreview,
    imageAlt: "CricVerse Application Interface Preview",
    github: null, // Placeholder: [ADD_CRICVERSE_GITHUB_URL]
    live: null,   // Placeholder: [ADD_CRICVERSE_LIVE_URL]
  },
  {
    id: "car-dealership",
    number: "03",
    title: "Car-Dealership",
    category: "Full Stack",
    featured: true,
    description:
      "A vehicle management web application built with a modern TypeScript-based backend and React frontend.",
    detailedDescription:
      "A vehicle inventory and dealership management system engineered with end-to-end type safety. Features a strongly typed Express.js backend leveraging Prisma ORM and SQLite, paired with a snappy React Vite frontend.",
    technologies: [
      "TypeScript",
      "Express.js",
      "Prisma",
      "SQLite",
      "React",
      "Vite",
      "JWT",
      "bcrypt",
    ],
    features: [
      "Type-safe API layer built with TypeScript & Prisma ORM",
      "Relational vehicle inventory database with SQLite",
      "Secure authentication with bcrypt hashing and JWT tokens",
      "Responsive vehicle catalog with real-time status filtering",
      "Fast client-side build with React and Vite",
    ],
    image: carDealershipPreview,
    imageAlt: "Car-Dealership Platform Interface Preview",
    github: "https://github.com/DhamsaniyaPrince/Car-Dealership",
    live: null, // Placeholder: [ADD_CAR_DEALERSHIP_LIVE_URL]
  },
  {
    id: "airbnb-clone",
    number: "04",
    title: "Airbnb Clone",
    category: "Frontend",
    featured: false,
    description:
      "A frontend recreation of an Airbnb-style listing experience focused on responsive design and accurate interface implementation.",
    detailedDescription:
      "A high-fidelity frontend clone created to master core web fundamentals, responsive CSS grids, flexbox layouts, and dynamic DOM interaction without relying on heavy external UI frameworks.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Pixel-accurate Airbnb style navigation and listing cards",
      "Responsive layout optimized across desktop, tablet, and mobile",
      "Interactive category tab filters and pricing displays",
      "Accessible markup and pure CSS transition effects",
    ],
    image: airbnbPreview,
    imageAlt: "Airbnb Clone Interface Preview",
    github: null, // Placeholder: [ADD_AIRBNB_GITHUB_URL]
    live: null,   // Placeholder: [ADD_AIRBNB_LIVE_URL]
  },
];
