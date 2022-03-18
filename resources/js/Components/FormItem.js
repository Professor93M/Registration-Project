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
    value,
    pattern,
    handleChange,
    className,
    children,
    disabled,
    error,
}) => {
    return (
        <motion.div
            variants={Container}
            initial="hidden"
            animate="show"
            className={`${className}  mb-6`}
        >
            <Label
                forInput={name}
                value={label}
                className="w-full text-right mb-2"
            />
            {children ? (
                children
            ) : (
                <Input
                    name={name}
                    type={type}
                    max={max}
                    min={min}
                    value={value}
                    maxLength={maxLength}
                    pattern={pattern}
                    handleChange={handleChange}
                    disabled={disabled}
                />
            )}
            <small className="text-red-500 text-sm">{error}</small>
        </motion.div>
    );
};

export default FormItem;
