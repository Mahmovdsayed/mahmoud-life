'use client'

import { Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
import CheckIcon from "@/icons/CheckIcon";
import ButtonUi from "../ui/ButtonUi";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import GithubIcon from "@/icons/GithubIcon";
import TikTokIcon from "@/icons/TikTokIcon";
import SnapChatIcon from "@/icons/SnapChatIcon";

const Header = () => {
    return (
        <Card shadow="none" className="w-full relative rounded-2xl overflow-visible">
            <CardHeader className="p-0 relative">
                <Image
                    src="https://i.pinimg.com/736x/82/5c/b2/825cb2782b4ec2709b93bc8e128ba5ac.jpg"
                    removeWrapper
                    alt="Cover"
                    className="w-full h-48 object-cover rounded-t-2xl rounded-b-none"
                />
                <div className="absolute left-4 -bottom-12">
                    <div className="relative">
                        <Image
                            src="https://i.pinimg.com/736x/38/45/3a/38453a1dd234877e7d4ee7e4fc7978da.jpg"
                            alt="Mahmoud Sayed"
                            width={96}
                            height={96}
                            className="rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                </div>
            </CardHeader>

            <CardBody className="pt-14">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold">Mahmoud Sayed</h1>
                            <CheckIcon />
                        </div>
                        <p className="text-default-500">@mahmoudsayed</p>
                        <p className="text-default-700 lg:w-3/4 mt-2">
                            Full-Stack Developer | React.js, Next.js, Node.js & React Native (Expo) | Web & Mobile Apps with Scalable Backends and Smooth UX                        </p>
                    </div>
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex items-center gap-2 mb-4">
                    <ButtonUi
                        startContent={<FacebookIcon />}
                        href={"https://www.facebook.com/mahmovdsayedd"}
                        title="Facebook"
                    />
                    <ButtonUi
                        startContent={<InstagramIcon />}
                        href={"https://www.instagram.com/mahmovdsayed"}
                        title="Instagram"
                    />
                    <ButtonUi
                        startContent={<LinkedInIcon />}
                        href={"https://www.linkedin.com/in/mahmoud-sayed-a51634226/"}
                        title="LinkedIn"
                    />
                    <ButtonUi
                        startContent={<GithubIcon />}
                        href={"https://github.com/Mahmovdsayed"}
                        title="Github"
                    />
                    <ButtonUi
                        startContent={<TwitterIcon />}
                        href={"https://x.com/mahmoodsayed_"}
                        title="Twitter"
                    />
                    <ButtonUi
                        startContent={<TikTokIcon />}
                        href={"https://www.tiktok.com/@mahmovdsayed"}
                        title="TikTok"
                    />
                    <ButtonUi
                        startContent={<SnapChatIcon />}
                        href={"https://snapchat.com/t/5hYcKVtF"}
                        title="SnapChat"
                    />

                </div>
            </CardFooter>
        </Card>
    );
};

export default Header;
