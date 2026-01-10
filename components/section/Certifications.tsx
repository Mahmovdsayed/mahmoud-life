'use client'

import UdemyIcon from "@/icons/UdemyIcon";
import { Card, CardBody, CardHeader, Divider, Link } from "@heroui/react"

const Certifications = () => {
    const certifications = [
        {
            title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
            issuer: "Udemy",
            date: "Issued Sep 2025",
            link: "https://www.udemy.com/certificate/UC-4f29f5ac-9e31-42c0-8d00-d5becc897940/"
        },
        {
            title: "JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
            issuer: "Udemy",
            date: "Issued Aug 2025",
            link: "https://www.udemy.com/certificate/UC-513e9186-e8b3-42b4-b462-79754fbf98e2/"
        },
    ]
    return <>
        <Card shadow="none" className="
    relative isolate w-full mt-4 rounded-2xl overflow-hidden
    bg-white/70 dark:bg-gray-900/60
    backdrop-blur-xl
    ring-1 ring-black/5 dark:ring-white/10
  ">
            <CardHeader className="flex-col items-start">
                <h5 className="text-2xl font-semibold text-start">Certifications</h5>
                <p className="text-start font-medium text-default-600 text-xs md:text-sm leading-relaxed"
                >I believe in continuous learning and professional development. Here are some of the certifications I've earned to expand my knowledge and skills in various areas of technology and development.</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="flex flex-col gap-4">
                    {certifications.map((certification, index) => <div key={index}>
                        <div className="flex flex-col gap-1 py-3">
                            <h4 className="text-base font-semibold text-start">{certification.title}</h4>
                            <h5 className="text-sm font-medium text-default-700 text-start flex items-center gap-2"><UdemyIcon /> {certification.issuer}</h5>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-default-500 text-sm">{certification.date}</p>
                                <Link
                                    href={certification.link}
                                    showAnchorIcon
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="sm"
                                >
                                    View Certificate
                                </Link>
                            </div>
                        </div>

                        {index < certifications.length - 1 && <Divider />}
                    </div>
                    )}
                </div>
            </CardBody>
        </Card>
    </>;
};

export default Certifications;