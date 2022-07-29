import avt from '/public/images/avt.png';

export default function About() {
    return (
        <article className="w-full min-h-[500px] h-[550px] max-h-[600px] overflow-hidden bg-red-400/0">
            <div className="flex py-2 px-6 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto bg-green-500/0">
                <img
                    className={`w-52 h-52 rounded-full`}
                    src={avt.src}
                    alt="avatar"
                />

                <p className="px-6 md:text-3xl md:leading-loose">
                    Hi! My name is Phan Thanh Triet Ly. I am a 4th-year software
                    engineering student at{' '}
                    <a
                        className="text-blue-500 md:leading-loose inline-block"
                        href="https://www.ctu.edu.vn"
                        target="_blank"
                    >
                        Can Tho University
                    </a>
                    , Vietnam. I have a deep passion for UI/UX. Recently, I have
                    been also interested about the site's performance and
                    security. My 🚀 is a Full-stack developer in the future.
                </p>
            </div>
        </article>
    );
}
