export interface TimeLineCardProps {
    icon?: JSX.Element;
    title: string;
    desc: string[];
}

export function TimeLineCard({ desc, title, icon }: TimeLineCardProps) {
    return (
        <div className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
            <div className="pointer p-4 dark:bg-[#0f0f0f] bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
                {icon ? icon : null}
            </div>
            <div className="card md:max-w-lg p-5 rounded-md my-3 dark:bg-[#0f0f0f] bg-gray-100">
                <h2 className="mx-auto">{title}</h2>
                {desc.map((item) => {
                    return <p className="py-7">{item}</p>;
                })}
            </div>
        </div>
    );
}
