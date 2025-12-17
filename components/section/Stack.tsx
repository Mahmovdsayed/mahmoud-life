'use client'
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";

const Stack = () => {
    const skills = [
        "HTML",
        "CSS",
        "SASS",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
        "AJAX",
        "JQuery",
        "React",
        "Formik",
        "ZOD",
        "Yup",
        "Figma",
        "Redux-Toolkit",
        "Redux",
        "React-Query",
        "TailwindCSS",
        "Framer Motion",
        "GSAP",
        "Axios",
        "Rest API",
        "Git",
        "Github",
        "Responsive Design",
        "PWA",
        "SEO",
        "Performance",
        "Accessibility",
        "Web Security",
        "Shadcn/ui",
        "VS Code",
        "Postman",
        "MongoDB Compass",
        "Turborepo",
        "Docker",
        "Vercel",
        "Netlify",
        "React Native",
        "Expo",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Multer",
        "C++",
        "python",
        "Bun",
        "Hono"
    ]
    return <>
        <Card shadow="none" className="
    relative isolate w-full mt-4 rounded-2xl overflow-hidden
    bg-white/70 dark:bg-gray-900/60
    backdrop-blur-xl
    ring-1 ring-black/5 dark:ring-white/10
  ">
            <CardHeader className="text-2xl font-bold text-start">Stack</CardHeader>
            <CardBody>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) =>
                        <Chip radius="sm" size="sm" variant="bordered" key={index}>{skill}</Chip>
                    )}
                </div>
            </CardBody>
        </Card>
    </>;
};

export default Stack;