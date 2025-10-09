'use client'
import { useEffect, useState } from "react";


interface ContainerLayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const ContainerLayout = ({ children, ...rest }: ContainerLayoutProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) return null;
    return <>
        <main
            {...rest}
            className={`relative min-h-dvh overflow-x-hidden px-2 py-6 ${rest.className ?? ""}`}
        >
            <div className={"w-full xl:w-1/2 mx-auto relative z-10"}>
                {children}
            </div>
        </main>
    </>;
};

export default ContainerLayout;