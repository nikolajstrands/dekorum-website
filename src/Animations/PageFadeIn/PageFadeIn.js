import { motion } from "framer-motion"

export default function PageFadeIn({ children }) {
    return (
        <motion.div
            transition={{ ease: "easeOut", duration: 0.5 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    )
}