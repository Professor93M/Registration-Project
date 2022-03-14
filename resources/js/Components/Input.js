import React, { useEffect, useRef } from "react";
import { FadeIn } from "@/animations";
import { motion } from "framer-motion";

export default function Input({
    type = "text",
    name,
    value,
    disabled,
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
            disabled={disabled}
            variants={FadeIn}
            animate="show"
            initial="hidden"
            className={`${
                type === "date"
                    ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            }`}
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
