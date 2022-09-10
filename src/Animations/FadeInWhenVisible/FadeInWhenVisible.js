import { motion } from "framer-motion";

export default function FadeInWhenVisible({ direction, children }) {

  let variants;
  if (direction === "right") {
    variants = {
      visible: {opacity: 1, x: 0 },
      hidden: {opacity: 0, x: 20 }
    }
  } else if (direction === "top") {
    variants = {
      visible: {opacity: 1, y: 0 },
      hidden: {opacity: 0, y: -20 }
    }
  } else if (direction === "left") {
    variants = {
      visible: {opacity: 1, x: 0 },
      hidden: {opacity: 0, x: -20 }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}