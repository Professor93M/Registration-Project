import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import { Container, SlideDown } from "@/animations";

export default function Guest({ children }) {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={Container}
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
        >
            <motion.div variants={SlideDown} initial="hidden" animate="show">
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </motion.div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </motion.div>
    );
}
