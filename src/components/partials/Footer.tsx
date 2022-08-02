import {
    FaFacebookSquare,
    FaGithub,
    FaTwitter,
    FaDiscord,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="w-full min-h-[200px] h-[200px] dark:bg-black">
            <h3 className="text-4xl text-center font-bold font-secondary">
                Easy to find me
            </h3>

            <div className="w-1/2 absolute-center mx-auto py-6 gap-10">
                <a
                    href="https://www.facebook.com/leephan2001"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute-center hover:scale-[110%] transition-all duration-300"
                >
                    <FaFacebookSquare className="w-12 h-12" />
                </a>
                <a
                    href="https://twitter.com/lee_dev1002"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute-center hover:scale-[110%] transition-all duration-300"
                >
                    <FaTwitter className="w-12 h-12" />
                </a>
                <a
                    href="https://github.com/leephan2k1"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute-center hover:scale-[110%] transition-all duration-300"
                >
                    <FaGithub className="w-12 h-12" />
                </a>
                <a
                    href="https://discord.com/users/lee2001#9563"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute-center hover:scale-[110%] transition-all duration-300"
                >
                    <FaDiscord className="w-12 h-12" />
                </a>
            </div>
        </div>
    );
}
