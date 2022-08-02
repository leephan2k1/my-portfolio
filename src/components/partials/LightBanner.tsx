import React from 'react';
import { useEffectOnce } from 'usehooks-ts';
import { renderCanvas } from '~/utils/renderCanvas';
import { motion } from 'framer-motion';
import Quote from '../shared/Quote';
import { memo } from 'react';

function LightBanner() {
    useEffectOnce(() => {
        renderCanvas();
    });

    return (
        <>
            <div className="relative flex flex-col w-full h-screen items-center justify-center">
                <h1 className="font-bold text-6xl md:text-8xl hover:scale-[110%] transition-all duration-200 select-none font-secondary fancy-fade-in">
                    Triết Lý
                </h1>

                <motion.h2
                    className="text-center w-full font-bold font-secondary text-6xl lg:text-8xl my-6"
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

                <Quote />

                <canvas
                    className="bg-skin-base pointer-events-none absolute inset-0"
                    id="canvas"
                ></canvas>
            </div>
        </>
    );
}

export default memo(LightBanner);
