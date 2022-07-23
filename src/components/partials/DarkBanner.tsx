import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
//@ts-ignore
import HALO from 'vanta/dist/vanta.halo.min';

function Banner() {
    const bannerRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(0);

    useEffect(() => {
        if (!vantaEffect && typeof window !== undefined) {
            setVantaEffect(
                HALO({
                    el: bannerRef.current,
                    backgroundColor: 0x0,
                    size: 0.8,
                    amplitudeFactor: 2.0,
                    mouseControls: false,
                    touchControls: false,
                    yOffset: 0.12,
                }),
            );
        }
        return () => {
            //@ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <div className="relative w-full h-screen" ref={bannerRef}>
                <div className="relative-center absolute-center overflow-hidden top-[38%] w-72 h-72 rounded-full z-10">
                    <h1 className="font-bold font-primary text-6xl hover:gradient-text transition-all duration-200 select-none">
                        Triết Lý
                    </h1>
                </div>
                <motion.h2
                    className="text-center relative-center w-full font-bold font-secondary top-[60%] text-6xl lg:text-8xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.5 }}
                >
                    I'm a{' '}
                    <span
                        className="bg-gradient-to-r bg-clip-text text-transparent
                        from-green-400 to-blue-500 animate-text"
                    >
                        Frontend{' '}
                    </span>
                    Developer.
                </motion.h2>
            </div>
        </>
    );
}

export default memo(Banner);
