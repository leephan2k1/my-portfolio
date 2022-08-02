import { useTheme } from 'next-themes';
import { MouseEvent } from 'react';
import ToggleTheme from '~/components/buttons/ToggleTheme';
import TextLogo from '~/components/icons/TextLogo';

export default function Navbar() {
    const { theme } = useTheme();

    const handleNavigateSection = (e: MouseEvent<HTMLButtonElement>) => {
        const content = e.currentTarget.dataset.id;

        switch (content) {
            case 'About':
            case 'Projects':
            case 'Contact':
                const elem = document.getElementById(content);
                const navElem = document.getElementById('Nav');
                if (elem && navElem) {
                    window.scrollTo(0, elem.offsetTop - navElem.offsetHeight);
                }
                break;
            case 'Logo-top':
                window.scrollTo(0, 0);
                break;
        }
    };

    return (
        <nav
            id="Nav"
            className="fixed z-[100] top-0 left-0 w-full backdrop-blur-lg  bg-opacity-40"
        >
            <div className="flex py-2 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto ">
                <button data-id="Logo-top" onClick={handleNavigateSection}>
                    <TextLogo
                        className={`${
                            theme === 'dark' ? 'fill-white' : 'fill-black'
                        } w-24 h-24 mx-4`}
                    />
                </button>

                <ul className="text-2xl pl-10 flex w-full h-full space-x-8">
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button data-id="About" onClick={handleNavigateSection}>
                            About
                        </button>
                    </li>
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button
                            data-id="Projects"
                            onClick={handleNavigateSection}
                        >
                            Projects
                        </button>
                    </li>
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button onClick={handleNavigateSection}>Resume</button>
                    </li>
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button
                            data-id="Contact"
                            onClick={handleNavigateSection}
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                <div className="px-4">
                    <ToggleTheme />
                </div>
            </div>
        </nav>
    );
}
