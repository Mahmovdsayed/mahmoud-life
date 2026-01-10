'use client'
import { Card, CardBody, CardHeader } from "@heroui/react";

const About = () => {
    return <>
        <Card shadow="none" className="
    relative isolate w-full mt-4 rounded-2xl overflow-hidden
    bg-white/70 dark:bg-gray-900/60
    backdrop-blur-xl
    ring-1 ring-black/5 dark:ring-white/10
  ">
            <CardHeader className="text-2xl font-semibold text-start">About</CardHeader>
            <CardBody className="text-start font-medium text-default-600 text-xs md:text-sm leading-relaxed">
Engineer focused on delivering production-grade web and mobile applications. Direct experience across React, Next.js, Node.js, and React Native (Expo). Strong bias toward clean system design, predictable architecture, and scalable execution. Comfortable owning end-to-end delivery pipelines, from UI systems to backend services and deployment workflows.            </CardBody>
        </Card>
    </>;
};

export default About;