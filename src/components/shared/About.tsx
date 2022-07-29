import avt from '/public/images/avt.png';

interface AboutProps {
    desc: string;
}

export default function About({ desc }: AboutProps) {
    return (
        <article className="w-full min-h-[500px] h-[550px] max-h-[600px] overflow-hidden bg-red-400/0">
            <div className="flex py-2 px-6 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto bg-green-500/0">
                <img
                    className={`w-52 h-52 rounded-full`}
                    src={avt.src}
                    alt="avatar"
                />

                <p
                    className="px-6 md:text-3xl md:leading-loose prose-a:text-blue-500 prose-a:inline-block"
                    dangerouslySetInnerHTML={{ __html: desc }}
                ></p>
            </div>
        </article>
    );
}
