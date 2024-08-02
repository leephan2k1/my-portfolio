import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
//@ts-ignore
import HALO from 'vanta/dist/vanta.halo.min';
import Quote from '~/components/shared/Quote';
import { typewriterOptions } from '~/constant';

function DarkBanner() {
    const bannerRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(0);

    useEffect(() => {
        try {
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
        } catch (error) {
            alert(
                'Your browser does not support WebGL. Please try to switch to another browser!. (Trình duyệt của bạn đã cũ hoặc không hỗ trợ, Vui lòng nâng cấp hoặc thử trình duyệt khác!)',
            );
        }
        return () => {
            //@ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <div className="relative w-full min-h-screen" ref={bannerRef}>
                <div className="relative-center absolute-center overflow-hidden top-[38%] w-72 h-72 rounded-full z-10">
                    <h1 className="font-bold text-6xl hover:scale-[110%] transition-all duration-200 select-none ">
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
                    <Typewriter
                        options={{
                            wrapperClassName: `bg-gradient-to-r bg-clip-text text-transparent
                        from-green-400 to-blue-500 animate-text inline-block`,
                            ...typewriterOptions,
                        }}
                    />
                    Developer.
                </motion.h2>
                <Quote styles="absolute left-1/2 -translate-x-1/2 top-[70%] w-full" />
            </div>
        </>
    );
}

export default memo(DarkBanner);
