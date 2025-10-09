'use client'

import { motion } from "framer-motion";

interface IProps {
    children: React.ReactNode;
    delay: number;
}

const CardMotion = ({ children, delay }: IProps) => {
    return <>
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(60px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: delay, ease: "linear" }}
        >
            {children}
        </motion.div>
    </>;
};

export default CardMotion;