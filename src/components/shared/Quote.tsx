import QuoteIcon from '../icons/QuoteIcon';
import { motion } from 'framer-motion';

interface QuoteProps {
    styles?: string;
}

export default function Quote({ styles }: QuoteProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className={styles}
        >
            <small className="w-full absolute-center">
                <QuoteIcon styles="dark:fill-white" />
            </small>
            <p className="w-full text-center text-gray-300 px-4">
                I will enjoy life as an{' '}
                <a
                    className="text-yellow-400"
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
                >
                    (Arrow Function) =&gt; &#123; &#125;
                </a>
                . Because it cannot be "bind", "call" and "apply".
            </p>
        </motion.div>
    );
}
