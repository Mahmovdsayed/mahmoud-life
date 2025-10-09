'use client'
import { Button, Link } from "@heroui/react";

interface IProps {
    startContent?: React.ReactNode;
    radius?: "full" | "none" | "sm" | "md" | "lg";
    title?: string;
    href?: string;
}
const ButtonUi = ({ startContent, radius = "full", title = "Button", href = "/" }: IProps) => {
    return <>
        <Button
            className="font-medium bg-[#f1f1f1] dark:bg-default"
            radius={radius}
            as={Link}
            isIconOnly
            size="sm"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={title}

        >{startContent}</Button>
    </>;
};

export default ButtonUi;