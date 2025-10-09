'use client'
import { Card, CardBody, CardHeader } from "@heroui/react";

const About = () => {
    return <>
        <Card shadow="none" className="w-full rounded-2xl mt-4">
            <CardHeader className="text-2xl font-bold text-start">About</CardHeader>
            <CardBody className="text-start font-medium text-default-600 text-xs md:text-sm leading-relaxed">
                Hello there! I’m Mahmoud, a full-stack developer from Egypt who’s been building modern web and mobile apps for a year now. I’m particularly good at React.js, Next.js, Node.js, and React Native using Expo. I’m always on the lookout for new challenges and opportunities to grow as a developer. I love working on projects that make a real impact and push the boundaries of what’s possible. I’m all about creating responsive user interfaces and scalable backend solutions that deliver high-quality digital experiences. I’m also a big believer in continuous learning and I thrive in collaborative environments that value creativity and problem-solving.
            </CardBody>
        </Card>
    </>;
};

export default About;