export const Container = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            // delay: 0.5,
            duration: 1,
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
            delayChildren: 1,
        },
    },
};

export const SlideDown = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.5,
        },
    },
};

export const SlideUp = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.5,
        },
    },
};
export const Down = {
    hidden: {
        opacity: 0,
        y: -80,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.5,
        },
    },
};

export const Up = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.5,
        },
    },
};

export const FadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,

        transition: {
            delay: 1,
            duration: 1,
            ease: "easeOut",
        },
    },
};

export const SlideRight = {
    hidden: {
        x: 1000,
    },
    show: {
        x: 0,
        transition: {
            delay: 1.4,
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 120,
        },
    },
};
