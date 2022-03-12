import React from "react";
import { motion } from "framer-motion";
import { Container, FadeIn, SlideUp } from "@/animations";
import Input from "./Input";
import Label from "./Label";

const FormItem = ({
    label,
    name,
    type,
    max,
    min,
    maxLength,
    pattern,
    handleChange,
    className,
    children,
}) => {
    return (
        <motion.div
            variants={Container}
            initial="hidden"
            animate="show"
            className={`${className} relative flex flex-wrap mb-6`}
        >
            <Label
                forInput={name}
                value={label}
                className="w-full text-right"
            />
            {children ? (
                children
            ) : (
                <Input
                    name={name}
                    type={type}
                    max={max}
                    min={min}
                    maxLength={maxLength}
                    pattern={pattern}
                    handleChange={handleChange}
                />
            )}
        </motion.div>
    );
};

export default FormItem;
