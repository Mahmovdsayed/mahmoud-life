'use client';
import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';
import { Button } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Theme = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Button
            onPress={toggleTheme}
            isIconOnly
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full shadow-none bg-default "
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};

export default Theme;
