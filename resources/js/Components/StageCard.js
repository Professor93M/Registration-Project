import { Link } from "@inertiajs/inertia-react";
import React from "react";

const StageCard = ({ title, description, active, className, link }) => {
    return (
        <Link
            href={link}
            className={`${
                active
                    ? className
                    : "pointer-events-none bg-gray-300 text-gray-400"
            } p-6 col-span-1`}
        >
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {description}
            </p>
        </Link>
    );
};

export default StageCard;
