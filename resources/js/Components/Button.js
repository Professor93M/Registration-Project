import React from "react";
import { motion } from "framer-motion";
import { SlideRight } from "@/animations";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
    handleClick,
}) {
    return (
        <motion.button
            variants={SlideRight}
            initial="hidden"
            animate="show"
            type={type}
            className={className}
            onClick={handleClick}
        >
            {children}
        </motion.button>
    );
}
