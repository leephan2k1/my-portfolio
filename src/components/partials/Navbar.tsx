import ToggleTheme from '~/components/buttons/ToggleTheme';
import TextLogo from '~/components/icons/TextLogo';
import ClientOnly from '~/components/shared/ClientOnly';

export default function Navbar() {
    return (
        <nav className="fixed z-[100] top-0 left-0 w-full backdrop-blur-lg   bg-opacity-40">
            <div className="flex py-2 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto ">
                <TextLogo className="fill-white w-24 h-24 mx-4" />

                <ul className="text-2xl pl-10 flex w-full h-full space-x-8">
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button>About</button>
                    </li>
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button>Projects</button>
                    </li>
                    <li className="transition-all duration-200 hover:gradient-text hover:scale-[110%]">
                        <button>Resume</button>
                    </li>
                </ul>

                <ClientOnly>
                    <div className="px-4">
                        <ToggleTheme />
                        {/* <button>Menu</button> */}
                    </div>
                </ClientOnly>
            </div>
        </nav>
    );
}
