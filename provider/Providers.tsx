'use client';
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            storageKey="nest"
            enableSystem={false}
        >
            <HeroUIProvider navigate={router.push}>
                {children}
            </HeroUIProvider>
        </ThemeProvider>
    );
};

export default Providers;
