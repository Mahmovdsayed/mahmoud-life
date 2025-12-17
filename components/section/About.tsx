'use client'
import { Card, CardBody, CardHeader } from "@heroui/react";

const About = () => {
    return <>
        <Card shadow="none" className="w-full rounded-2xl mt-4">
            <CardHeader className="text-2xl font-bold text-start">About</CardHeader>
            <CardBody className="text-start font-medium text-default-600 text-xs md:text-sm leading-relaxed">
Engineer focused on delivering production-grade web and mobile applications. Direct experience across React, Next.js, Node.js, and React Native (Expo). Strong bias toward clean system design, predictable architecture, and scalable execution. Comfortable owning end-to-end delivery pipelines, from UI systems to backend services and deployment workflows.            </CardBody>
        </Card>
    </>;
};

export default About;