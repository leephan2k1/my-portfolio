import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="hover:scale-[120%] transition-all duration-200 rotate-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? (
                <SunIcon className="w-8 h-8 hover:animate-spin" />
            ) : (
                <MoonIcon className="w-8 h-8 hover:animate-spin" />
            )}
        </button>
    );
}
