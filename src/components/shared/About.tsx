import avt from '/public/images/avt.png';

interface AboutProps {
    desc: string;
}

export default function About({ desc }: AboutProps) {
    return (
        <article className="w-full min-h-[500px] h-[550px] max-h-[600px] overflow-hidden">
            <div className="flex flex-col justify-center md:justify-start py-2 px-6 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto ">
                <div className="flex">
                    <figure className="h-full min-w-fit absolute-center">
                        <img
                            className={`w-52 h-52 rounded-full`}
                            src={avt.src}
                            alt="avatar"
                        />
                    </figure>

                    <summary className="px-6 md:px-12">
                        <h2 className="font-secondary text-4xl md:text-6xl my-4">
                            Who am i?
                        </h2>
                        <p
                            className="md:text-3xl md:leading-loose  prose-a:text-blue-500 prose-a:inline-block"
                            dangerouslySetInnerHTML={{ __html: desc }}
                        ></p>
                    </summary>
                </div>
            </div>
        </article>
    );
}
