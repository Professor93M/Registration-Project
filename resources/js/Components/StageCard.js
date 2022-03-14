import { Down, Up } from "@/animations";
import { Link } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const StageCard = ({ title, description, active, className, link, icon }) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 500);
    }, []);

    return (
        <Link
            href={link}
            className={` group relative overflow-hidden h-1/3${
                active
                    ? className
                    : "pointer-events-none bg-gray-300 text-gray-400 rounded-lg"
            } p-6 col-span-1 transform ${
                visible
                    ? "opacity-100 transition-opacity duration-[1000ms] ease-in-out rounded-lg"
                    : "opacity-0"
            } `}
        >
            <motion.div className="front absolute h-full bg-red-400 flex flex-col overflow-hidden w-full justify-center items-center top-0 left-0 duration-200 z-10 group-hover:-translate-y-32 ">
                <motion.p
                    variants={Down}
                    initial="hidden"
                    animate="show"
                    className="mt-4  text-lg leading-relaxed text-gray-600"
                >
                    {icon}
                </motion.p>
                <motion.h1
                    variants={Up}
                    initial="hidden"
                    animate="show"
                    className="text-3xl  font-bold leading-tight text-gray-900"
                >
                    {title}
                </motion.h1>
            </motion.div>
            <motion.div className="back  front absolute w-full h-1/2  bg-green-400 flex items-center bottom-0 left-0">
                <p className="mt-4 opacity-0 group-hover:opacity-100 duration-1000 delay-500  text-lg leading-relaxed text-gray-600">
                    {description}
                </p>
            </motion.div>
        </Link>
    );
};

export default StageCard;
