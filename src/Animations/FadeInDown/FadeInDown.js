import { motion } from "framer-motion";

export default function FadeInDown({children}) {
        return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: 20 }
              }}
            >
              {children}
            </motion.div>
          );
}


