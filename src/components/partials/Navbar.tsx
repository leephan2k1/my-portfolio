import { useTheme } from 'next-themes';
import {
    AnimatePresence,
    motion,
    //@ts-ignore
} from 'node_modules/framer-motion/dist/framer-motion';
import { Toaster } from 'node_modules/react-hot-toast/dist';
import { memo, MouseEvent, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import ToggleTheme from '~/components/buttons/ToggleTheme';
import TextLogo from '~/components/icons/TextLogo';

import { MenuIcon, XIcon } from '@heroicons/react/outline';

import ClientOnly from '../shared/ClientOnly';
import Teleport from '../shared/Teleport';

const buttonAnimate = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        type: 'spring',
        stiffness: 50,
        duration: 0.5,
    },
};

function Navbar() {
    const { theme } = useTheme();

    const [menuState, setMenuState] = useState(false);
    const refMenu = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(refMenu, () => {
        setMenuState(false);
    });

    const handleNavigateSection = (e: MouseEvent<HTMLButtonElement>) => {
        const content = e.currentTarget.dataset.id;
        setMenuState(false);

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

    const handleToggleMenu = () => {
        setMenuState((prevState) => !prevState);
    };

    return (
        <nav
            id="Nav"
            className="fixed z-[50] top-0 left-0 w-full backdrop-blur-lg  bg-opacity-40"
        >
            <Toaster position="top-center" />

            {menuState && (
                <Teleport>
                    <div className="h-screen w-screen fixed top-0 left-0 z-40"></div>
                </Teleport>
            )}

            <div className="flex justify-between md:p-2 p-4 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto ">
                <button data-id="Logo-top" onClick={handleNavigateSection}>
                    <ClientOnly>
                        <TextLogo
                            className={`${
                                theme === 'dark' ? 'fill-white' : 'fill-black'
                            } w-24 h-24 mx-4`}
                        />
                    </ClientOnly>
                </button>

                <ul className="text-2xl pl-10 hidden md:flex w-full h-full space-x-8">
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
                        <a
                            href="/files/Triet-Ly-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
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

                <div className="px-4 flex space-x-8 relative">
                    <ToggleTheme />

                    <ClientOnly>
                        <button className="z-0" onClick={handleToggleMenu}>
                            {menuState ? (
                                <AnimatePresence>
                                    <motion.div
                                        key={menuState}
                                        {...buttonAnimate}
                                    >
                                        <XIcon className="w-10 h-10 md:hidden" />
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <AnimatePresence>
                                    <motion.div
                                        key={menuState}
                                        {...buttonAnimate}
                                    >
                                        <MenuIcon className="w-10 h-10 md:hidden" />
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </button>
                    </ClientOnly>

                    <AnimatePresence>
                        {menuState && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.2,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: 'easeOut',
                                }}
                                ref={refMenu}
                                className={`absolute top-14 -left-[45px] md:hidden`}
                            >
                                <ul className="flex flex-col items-center px-10 py-8 dark:bg-gray-800 bg-gray-200 space-y-14 rounded-xl shadow-lg tex-2xl">
                                    <li>
                                        <button
                                            data-id="About"
                                            onClick={handleNavigateSection}
                                        >
                                            About
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            data-id="Projects"
                                            onClick={handleNavigateSection}
                                        >
                                            Projects
                                        </button>
                                    </li>
                                    <li>
                                        <a
                                            href="/files/Triet-Ly-CV.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resume
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            data-id="Contact"
                                            onClick={handleNavigateSection}
                                        >
                                            Contact
                                        </button>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}

export default memo(Navbar);
