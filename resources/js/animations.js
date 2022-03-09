export const Container = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            // delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 1,
            delayChildren: 0.5,
            when: "beforeChildren",
        },
    },
};
export const SlideDown = {
    hidden: {
        opacity: 0,
        y: -20,
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

export const FadeIn = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const SlideUp = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
