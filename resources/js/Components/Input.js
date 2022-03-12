import React, { useEffect, useRef } from "react";
import { FadeIn } from "@/animations";
import { motion } from "framer-motion";

export default function Input({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    max,
    min,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <motion.input
            ref={input}
            variants={FadeIn}
            animate="show"
            initial="hidden"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name={name}
            id={name}
            type={type}
            max={max}
            min={min}
            value={value}
            onChange={(e) => handleChange(e)}

            // placeholder={placeholder}
        />
    );
}
