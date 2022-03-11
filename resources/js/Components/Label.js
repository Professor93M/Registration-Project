import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";

export default function Label({ forInput, value, className, children }) {
    return (
        <motion.label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ` + className}
            variants={SlideUp}
            animate="show"
            initial="hidden"
        >
            {value ? value : children}
        </motion.label>
    );
}
