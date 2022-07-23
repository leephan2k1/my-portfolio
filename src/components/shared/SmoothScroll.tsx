//ref: https://codesandbox.io/s/54cz4?file=/src/SmoothScroll.component.jsx
import {
    useRef,
    useState,
    useCallback,
    useLayoutEffect,
    ReactNode,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
    useViewportScroll,
    useTransform,
    useSpring,
    motion,
} from 'framer-motion';

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
    // scroll container
    const scrollRef = useRef<HTMLElement | null>(null);

    // page scrollable height based on content length
    const [pageHeight, setPageHeight] = useState(0);

    // update scrollable height when browser is resizing
    const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries),
        );

        if (scrollRef.current) {
            scrollRef && resizeObserver.observe(scrollRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const { scrollY } = useViewportScroll(); // measures how many pixels user has scrolled vertically
    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
    const spring = useSpring(transform, physics); // apply easing to the negative scroll value

    return (
        <>
            <motion.div
                //@ts-ignore
                ref={scrollRef}
                style={{ y: spring }} // translateY of scroll container using negative scroll value
                className="scroll-container"
            >
                {children}
            </motion.div>
            {/* blank div that has a dynamic height based on the content's inherent height */}
            {/* this is neccessary to allow the scroll container to scroll... */}
            {/* ... using the browser's native scroll bar */}
            <div style={{ height: pageHeight }} />
        </>
    );
};

export default SmoothScroll;
