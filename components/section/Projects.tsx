'use client'

import GithubIcon from "@/icons/GithubIcon";
import { Button, Card, CardBody, CardHeader, Chip, Divider, Image, Link } from "@heroui/react";

const Projects = () => {
    const projects = [
        {
            name: "Alquran Player",
            description: "Explore the Quran. Listen to every Surah with over 50 renowned reciters, and delve into detailed verse interpretations in both Arabic and English. Whether you're seeking spiritual growth or educational insight, our platform provides a complete and immersive Quranic experience.",
            image: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1751492790/portfolio/userImages/mahmoudsayed/Project/x8iaw4fjhkxak5zuldhb.webp",
            client: {
                name: "NEST",
                logo: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1751492792/portfolio/userImages/mahmoudsayed/Project/Client/a3rs4mom9qgyedgz6s84.webp"
            },
            stack: [
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "React-Query",
                "Redux-Toolkit",
                "Framer Motion"
            ],
            projectCategory: {
                from: "2025-07-01",
                to: "2025-07-25",
                projectType: "Tech",
                status: "Completed"
            },
            projectLinks: {
                projectURL: "https://alquran-player.vercel.app/",
                githubURL: "https://github.com/Mahmovdsayed/al-quran-player"
            }
        },
        {
            name: "Movies Cafe | AI-Powered Movies & TV Hub",
            description: 'Discover Movies Cafe, your ultimate hub for movies and TV shows. Explore detailed information about films and series, interact with AI in English or Arabic, and enjoy social features like reposting, commenting, liking, and sharing. Create your account to save favorites, add to watch later, and personalize your experience with custom themes. Stay connected with seamless search, profile customization, and effortless sharing with friends.',
            image: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1757732968/moviescafebanner_aewklg.png",
            client: {
                name: "NEST",
                logo: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1751492792/portfolio/userImages/mahmoudsayed/Project/Client/a3rs4mom9qgyedgz6s84.webp"
            },
            stack: [
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "React-Query",
                "Redux-Toolkit",
                "Framer Motion",
                "MongoDB",
                "Node.js",
            ],
            projectCategory: {
                from: "2025-08-10",
                to: "2025-09-13",
                projectType: "Tech",
                status: "Completed"
            },
            projectLinks: {
                projectURL: "https://moviescafe.vercel.app",
                githubURL: "https://github.com/Mahmovdsayed/movies-cafe"
            },

        },
        {
            name: 'E-Commerce Backend with AI',
            description: `An AI-powered e-commerce REST API built with Node.js, Express, TypeScript, and MongoDB. It provides a complete backend solution for modern online stores with user authentication, product & category management, cart, orders, discounts, payments, and analytics. The system integrates AI tools for generating product descriptions, SEO metadata, and marketing strategies, helping merchants optimize their store and reach their audience more effectively. It also supports online payments via Stripe, Google OAuth login, OTP-based email verification, and advanced analytics for sales and products.`,
            image: "https://res.cloudinary.com/daaehlqpd/image/upload/v1760030371/e-commerce-backend_im6uda.png",
            client: {
                name: "NEST",
                logo: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1751492792/portfolio/userImages/mahmoudsayed/Project/Client/a3rs4mom9qgyedgz6s84.webp"
            },
            stack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
                "Mongoose",
                "JWT",
                "ZOD",
                "Cloudinary",
                "Stripe",
                "Multer",
                "Nodemailer",
                "bcrypt",
                "Google OAuth",
                "AI Integration"
            ],
            projectCategory: {
                from: "2025-09-26",
                to: "2025-10-12",
                projectType: "Backend",
                status: "Completed"
            },
            projectLinks: {
                projectURL: "https://www.linkedin.com/posts/mahmoud-sayed-a51634226_github-mahmovdsayede-commerce-backend-activity-7380399739621699586-dLNr",
                githubURL: "https://github.com/Mahmovdsayed/e-commerce-backend"
            }
        },
        {
            name: "Lexel — Create AI-Powered Blogs in Minutes",
            description: 'Generate, optimize, and publish blog posts effortlessly with Lexel — the next-gen AI blogging platform built for creators who value simplicity and speed.',
            image: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1761445476/lexel-header_zsz6tb.png",
            client: {
                name: "NEST",
                logo: "https://res.cloudinary.com/dtpsyi5am/image/upload/v1751492792/portfolio/userImages/mahmoudsayed/Project/Client/a3rs4mom9qgyedgz6s84.webp"
            },
            stack: [
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "React-Query",
                "Redux-Toolkit",
                "Framer Motion",
                "MongoDB",
                "Node.js",
            ],
            projectCategory: {
                from: "2025-10-26",
                to: "2025-11-6",
                projectType: "Tech",
                status: "Completed"
            },
            projectLinks: {
                projectURL: "https://lexel-ai.vercel.app/",
                githubURL: "#"
            }
        },
        {
            name: "World Art Forum For Development Foundation",
            description: 'The World Art Forum for Development Foundation is a non-profit organization that aims to promote the development of art and culture in the world. The organization is committed to supporting artists, cultural institutions, and communities around the world. It provides grants, scholarships, and other resources to help artists and cultural institutions develop their work and reach new audiences.',
            image: "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1762885189/banner_ybktpc.png",
            client: {
                name: "WAFDF",
                logo: "	https://wafdf.org/_next/image?url=%2Fimg%2Fwafdf.png&w=384&q=75"
            },
            stack: [
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "React-Query",
                "Redux-Toolkit",
                "Framer Motion",
            ],
            projectCategory: {
                from: "2025-12-1",
                to: "2025-12-7",
                projectType: "Tech",
                status: "Completed"
            },
            projectLinks: {
                projectURL: "https://wafdf.org/",
                githubURL: "#"
            }
        },
         {
            name: "Teleb Furniture",
            description: 'Teleb Furniture is a furniture e-commerce platform built with Next.js, TypeScript, and TailwindCSS. It provides a user-friendly interface for customers to browse and purchase furniture products. The platform includes features such as product search, filtering, and sorting, as well as a shopping cart and checkout process. It also features a responsive design that works on both desktop and mobile devices.',
            image: "https://www.teleb-furniture.com/icon-512x512.png",
            client: {
                name: "Teleb Furniture",
                logo: "	https://www.teleb-furniture.com/icon-512x512.png"
            },
            stack: [
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "React-Query",
                "GSAP",
                "Framer Motion",
                "Shadcn UI",
                "Bun",
                "Hono",
                "MongoDB"
            ],
            projectCategory: {
                from: "2025-12-22",
                to: "2025-12-29",
                projectType: "Tech",
                status: "Completed"
            },
            projectLinks: {
                projectURL: "https://www.teleb-furniture.com",
                githubURL: "#"
            }
        }
    ]
    return (
        <Card shadow="none" className="
    relative isolate w-full mt-4 rounded-2xl overflow-hidden
   
  ">
            <CardHeader className="text-2xl font-semibold text-start">Projects</CardHeader>

            <CardBody className="flex flex-col ">
                {projects.map((project, index) => (
                    <div key={index}>
                        {/* client */}
                        <div className="flex items-center gap-2 mb-3">
                            <Image
                                src={project.client.logo}
                                alt={`${project.client.name} Logo`}
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            <p className="text-sm text-default-600"><strong>{project.client.name}</strong></p>
                        </div>
                        <div className="flex flex-col md:flex-row items-start">

                            {/* Project Details */}

                            <div className="flex flex-col  w-full gap-3">
                                <div>
                                    <h4 className="text-lg md:text-xl font-semibold text-start">{project.name}</h4>
                                    <p className="text-start font-medium text-default-600 text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, idx) => (
                                        <Chip key={idx} radius="sm" size="sm" variant="flat">
                                            {tech}
                                        </Chip>
                                    ))}
                                </div>

                                {/* Category + Status */}
                                <div className="flex items-center flex-wrap gap-2 text-sm">
                                    <p className="text-default-500">
                                        {project.projectCategory.from} — {project.projectCategory.to}
                                    </p>
                                    <Chip radius="sm" size="sm" variant="flat">
                                        {project.projectCategory.projectType}
                                    </Chip>
                                    <Chip
                                        radius="sm"
                                        size="sm"
                                        variant="flat"
                                        color={project.projectCategory.status === "Completed" ? "success" : "warning"}
                                    >
                                        {project.projectCategory.status}
                                    </Chip>
                                </div>


                                {/* Links */}
                                <div className="flex gap-3 mt-2">
                                    {project.projectLinks.projectURL && (
                                        <Button
                                            as={Link}
                                            href={project.projectLinks.projectURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            color="default"
                                            variant="flat"
                                            size="sm"
                                            className="font-medium"
                                            showAnchorIcon
                                        >
                                            View Project
                                        </Button>
                                    )}
                                    {project.projectLinks.githubURL && (
                                        <Button
                                            as={Link}
                                            href={project.projectLinks.githubURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            color="secondary"
                                            variant="flat"
                                            startContent={<GithubIcon />}
                                            className="bg-black text-white dark:bg-white dark:text-black font-medium"
                                            size="sm"
                                        >
                                            GitHub
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Divider between projects */}
                        {index < projects.length - 1 && <Divider className="my-6" />}
                    </div>
                ))}
            </CardBody>
        </Card>
    );
};

export default Projects;