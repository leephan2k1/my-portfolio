import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log('::: ', theme);
    }, []);

    return (
        <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            whileHover={{
                scale: 1.3,
                rotate: 90,
            }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            {theme === 'light' ? (
                <SunIcon className="w-8 h-8" />
            ) : (
                <MoonIcon className="w-8 h-8" />
            )}
        </motion.button>
    );
}
