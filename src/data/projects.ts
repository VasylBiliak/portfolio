import { BASE_URL } from "../config";

// src/data/projects.ts
export interface Project {
    projectName: string;
    repoUrl?: string;
    externalUrl?: string;
    description: string;
    technologies: string;
    image?: string;
}

export const projects: Project[] = [
    {
        projectName: 'Client Demo Site',
        repoUrl: 'https://github.com/VasylBiliak/client-demo-site',
        externalUrl: 'https://vasylbiliak.github.io/client-demo-site/',
        description:
            'Client Demo Site is a demonstration website designed to showcase responsive layout and modern technologies.',
        technologies: 'React, Vite, CSS Modules, MUI',
        image: 'https://raw.githubusercontent.com/VasylBiliak/client-demo-site/refs/heads/main/public/baner.png',
    },
    {
        projectName: 'React Application',
        repoUrl: 'https://github.com/VasylBiliak/fe-react-2024',
        externalUrl: 'https://vasylbiliak.github.io/fe-react-2024',
        description:
            'Project built during Intro to React course with mentorship support.',
        technologies: 'React, Vite, CSS Modules, MUI',
        image: `${BASE_URL}/images/projectImg/Screenshot_24.png`

    },
    {
        projectName: 'TorAssembly Project',
        externalUrl: 'https://vasylbiliak.github.io/torassembly/',
        repoUrl: '',
        description:
            'Single-page website showcasing services and allowing service orders with responsive UI and theme switching.',
        technologies: 'React, Redux Toolkit, CSS Modules',
        image: `${BASE_URL}/images/projectImg/tor_assembly.png`,
    },
    {
        projectName: 'Restaurant QR Menu',
        externalUrl: 'https://l-2022.github.io/menu/#example-1',
        description:
            'Dynamic web app for restaurants with QR menu, animations, and interactive dish selection.',
        technologies: 'React, Vite, CSS Modules',
        image: 'https://l-2022.github.io/menu/banner.png',
    },
    {
        projectName: 'Restaurant Menu App',
        repoUrl:
            'https://github.com/VasylBiliak/restaurant-menu-app-nextjs',
        externalUrl:
            'https://restaurant-menu-app-nextjs-eqla.vercel.app/',
        description:
            'Modern restaurant web app with interactive menu, SEO optimization, and responsive UI.',
        technologies: 'Next.js, TypeScript, Tailwind CSS',
        image:
            `${BASE_URL}/images/projectImg/restaurant-menu-app-nextjs.png`,
    },
    {
        projectName: 'Job Board Platform',
        repoUrl:
            'https://github.com/VasylBiliak/job-board-auth-refactor',
        externalUrl: 'https://job-board-auth-refactor.vercel.app/',
        description:
            'Job board web app with authentication, filtering, and modern UI for real-world usage.',
        technologies: 'Next.js, TypeScript, Tailwind, Auth',
        image: `${BASE_URL}/images/projectImg/job-board-preview.png`
    },
    {
        projectName: 'Restaurant Landing Page',
        externalUrl: 'https://l-2022.github.io/restaurant-site/',
        description:
            'Responsive restaurant landing page with modern UI and smooth navigation.',
        technologies: 'HTML, CSS, JavaScript',
        image:
            `${BASE_URL}/images/projectImg/Landing-menu.png`,
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
        image:
            'https://raw.githubusercontent.com/VasylBiliak/fe-course-basic-2023/refs/heads/main/docs/GamesProject/img/about.png',
    },
    {
        projectName: 'Superheroes',
        externalUrl: 'https://l-2022.github.io/superheroes-frontend',
        description:
            'Web app for searching and exploring superheroes with API integration.',
        technologies: 'React, Axios, React Router, Vite',
        image:
            'https://l-2022.github.io/superheroes-frontend/baner-site.webp',
    },
];
