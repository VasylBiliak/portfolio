import { BASE_URL } from "@/components/utils/config";

// src/data/projects.ts
export interface Project {
    projectName: string;
    repoUrl?: string;
    externalUrl?: string;
    description: string;
    technologies: string;
    // image?: string;
}

export interface ProjectCsvRow {
    projectName: string;
    repoUrl: string;
    externalUrl: string;
    description: string;
    technologies: string;
}

export const projects: Project[] = [
        {
        projectName: 'Vor Studio',
        externalUrl: 'https://vor-studio.vercel.app/',
        description:
            'A high-performance e-commerce platform for the Vor Studio lifestyle brand. Leveraging the power of Next.js and Redux Toolkit, the project features lightning-fast page transitions, complex state management for the shopping cart, and a fully responsive interface. Optimized for speed, SEO, and flawless UX.',
        technologies: 'React, TypeScript, Next.js, Tailwind, CSS, Redux Toolkit, Vite, Vercel',
        // image: 'https://raw.githubusercontent.com/VasylBiliak/client-demo-site/refs/heads/main/public/baner.png',
    },
    {
        projectName: 'Client Demo Site',
        repoUrl: 'https://github.com/VasylBiliak/client-demo-site',
        externalUrl: 'https://vasylbiliak.github.io/client-demo-site/',
        description:
            'A professional landing page template designed for corporate clients. This project showcases a clean, modern aesthetic using Material UI components, providing a scalable structure for business presentations and service demonstrations.',
        technologies: 'React, Vite, CSS Modules, MUI',
        // image: 'https://raw.githubusercontent.com/VasylBiliak/client-demo-site/refs/heads/main/public/baner.png',
    },
    {
        projectName: 'React Application',
        repoUrl: 'https://github.com/VasylBiliak/fe-react-2024',
        externalUrl: 'https://vasylbiliak.github.io/fe-react-2024',
        description:
            'Project built during Intro to React course with mentorship support.',
        technologies: 'React, Vite, CSS Modules, MUI',
        // image: `${BASE_URL}/images/projectImg/Screenshot_24.png`

    },
    {
        projectName: 'TorAssembly Project',
        externalUrl: 'https://vasylbiliak.github.io/torassembly/',
        repoUrl: '',
        description:
            'A modular React-based landing page featuring centralized state management via Redux Toolkit. The project demonstrates clean UI/UX principles with CSS Modules for scoped styling, offering seamless theme transitions and a streamlined interactive ordering system.',
        technologies: 'React, Redux Toolkit, CSS Modules',
        // image: `${BASE_URL}/images/projectImg/tor_assembly.png`,
    },
    {
        projectName: 'Restaurant QR Menu',
        externalUrl: 'https://l-2022.github.io/menu/#example-1',
        description:
            'Dynamic web app for restaurants with QR menu, animations, and interactive dish selection.',
        technologies: 'React, Vite, CSS Modules',
        // image: 'https://l-2022.github.io/menu/banner.png',
    },
    {
        projectName: 'Restaurant Menu App',
        repoUrl:
            'https://github.com/VasylBiliak/restaurant-menu-app-nextjs',
        externalUrl:
            'https://restaurant-menu-app-nextjs-eqla.vercel.app/',
        description:
            'Modern restaurant web app with interactive menu, SEO optimization, and responsive UI.',
        technologies: 'Next.js, TypeScript, Tailwind CSS, HTML, Vercel',
        // image: `${BASE_URL}/images/projectImg/restaurant-menu-app-nextjs.png`,
    },
    {
        projectName: 'Job Board Platform',
        repoUrl:
            'https://github.com/VasylBiliak/job-board-auth-refactor',
        externalUrl: 'https://job-board-auth-refactor.vercel.app/',
        description:
            'Job board web app with authentication, filtering, and modern UI for real-world usage.',
        technologies: 'Next.js, TypeScript, Tailwind CSS, Auth, Vercel',
        // image: `${BASE_URL}/images/projectImg/job-board-preview.png`
    },
    {
        projectName: 'Restaurant Landing Page',
        externalUrl: 'https://l-2022.github.io/restaurant-site/',
        description:
            'Responsive restaurant landing page with modern UI and smooth navigation.',
        technologies: 'TypeScript, React HTML, CSS',
        // image: `${BASE_URL}/images/projectImg/Landing-menu.png`,
    },
    {
        projectName: 'FE Course Basic 2023',
        repoUrl:
            'https://github.com/VasylBiliak/fe-course-basic-2023',
        externalUrl:
            'https://vasylbiliak.github.io/fe-course-basic-2023/GamesProject/index.html',
        description:
            'Collection of browser-based games built during frontend basics course.',
        technologies: 'HTML, CSS, JavaScript',
        // image: 'https://raw.githubusercontent.com/VasylBiliak/fe-course-basic-2023/refs/heads/main/docs/GamesProject/img/about.png',
    },
    {
        projectName: 'Superheroes',
        externalUrl: 'https://l-2022.github.io/superheroes-frontend',
        description:
            'A data-driven web application with a heavy emphasis on backend architecture. This project showcases the ability to design and consume complex RESTful APIs, manage large datasets of superhero lore, and ensure seamless communication between the client and the server.',
        technologies: 'React, Axios, React Router, Vite',
        // image: 'https://l-2022.github.io/superheroes-frontend/baner-site.webp',
    },
];
