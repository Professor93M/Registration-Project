import React from "react";
import { motion } from "framer-motion";
import { SlideRight, FadeIn } from "@/animations";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
    handleClick,
    url,
}) {
    return (
        <motion.button
            variants={url === "auth" ? FadeIn : SlideRight}
            initial="hidden"
            animate="show"
            type={type}
            disabled={processing}
            className={className}
            onClick={handleClick}
        >
            {children}
        </motion.button>
    );
}
