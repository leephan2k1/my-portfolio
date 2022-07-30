import Plx from 'react-plx';

export default function Skills() {
    const parallaxData = [
        {
            start: 0,
            end: 1000,
            properties: [
                {
                    startValue: -300,
                    endValue: 200,
                    property: 'translateX',
                },
            ],
        },
    ];

    return (
        <div className="w-full min-h-[500px] bg-red-500/0">
            <div className="flex flex-col justify-center py-2 px-6 items-center h-full lg:w-1/2 md:w-3/4 w-full mx-auto">
                <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
                    <h1 className="font-secondary font-semibold text-4xl">
                        My Skills
                    </h1>
                </Plx>
            </div>
        </div>
    );
}
