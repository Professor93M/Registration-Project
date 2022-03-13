import { Down, Up } from "@/animations";
import { Link } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const StageCard = ({ title, description, active, className, link }) => {
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 1000);
    }, [visible]);
    return (
        <Link
            href={link}
            className={`${active
                ? className
                : "pointer-events-none bg-gray-300 text-gray-400 rounded-lg"
                } p-6 col-span-1 transform ${visible
                    ? "opacity-100 transition-opacity duration-[200ms] ease-in-out rounded-lg"
                    : "opacity-0"
                } `}
        >
            <motion.h1
                variants={Up}
                initial="hidden"
                animate="show"
                className="text-3xl  font-bold leading-tight text-gray-900"
            >
                {title}
            </motion.h1>
            <motion.p
                variants={Down}
                initial="hidden"
                animate="show"
                className="mt-4 text-lg leading-relaxed text-gray-600"
            >
                {description}
            </motion.p>
        </Link>
    );
};

export default StageCard;
