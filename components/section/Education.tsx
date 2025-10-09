'use client'

import { Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react"

const Education = () => {
    return <>
        <Card shadow="none" className="w-full rounded-2xl mt-4">
            <CardHeader className="text-2xl font-bold text-start">Education</CardHeader>
            <CardBody>
                <div className="flex items-center w-full gap-4 mb-4">
                    <div>
                        <Image
                            src={"https://res.cloudinary.com/dtpsyi5am/image/upload/v1746900771/portfolio/userImages/mahmoudsayed/Education/ov6dqaeo0eqmidehrxqe.webp"}
                            alt="Sadat Academy for Management Sciences"
                            width={50}
                            height={50}
                            className="rounded-xl object-contain object-center"
                        />
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-start mb-1">Sadat Academy for Management Sciences</h4>
                        <h5 className="text-sm font-medium text-default-700 text-start mb-2">Business Information systems and Management Science</h5>
                    </div>
                </div>
                <p className="text-start font-medium text-default-600 text-xs md:text-sm leading-relaxed">I'm currently studying Business Information Systems and Management Science at Sadat Academy for Management Sciences, where I focus on data analytics, full-stack development, and database management. My studies include NodeJS, Express, and MongoDB. This program equips me with practical skills to design and implement data-driven business solutions and innovative technologies.</p>
            </CardBody>
            <CardFooter>
                <div className="flex items-center justify-between w-full">
                    <p className="text-default-500 text-sm">2022 — Present</p>
                    <p className="text-default-500 text-sm">3.00 GPA</p>
                </div>
            </CardFooter>
        </Card>
    </>;
};

export default Education;