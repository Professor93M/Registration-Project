import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import {
    ParentAnim,
    FadeIn,
    Container,
    SlideUp,
    SlideDown,
} from "@/animations";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        mobile: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

            <motion.form
                variants={SlideUp}
                initial="hidden"
                animate="show"
                onSubmit={submit}
                className="w-full max-w-md mx-auto overflow-hidden "
            >
                <div>
                    <Label forInput="name" value="الاسم الكامل" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="mobile" value="رقم الهاتف" />

                    <Input
                        type="tel"
                        name="mobile"
                        value={data.mobile}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="الرمز السري" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="تأكيد الرمز السري"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <motion.div
                    variants={SlideDown}
                    initial="hidden"
                    animate="show"
                    className="flex items-center justify-between mt-4"
                >
                    <Link
                        href={route("login")}
                        className="mt-3
                            hover:text-gray-900 
                             hover:bg-blue-300 
                              focus:outline-none 
                              focus:shadow-outline-blue
                               focus:text-gray-900 
                               transition duration-150 
                               ease-in-out bg-blue-400 text-gray-100 font-bold rounded-md px-4 py-2 ml-3 shadow-sm"
                    >
                        تسجيل دخول
                    </Link>

                    <Button
                        className="mt-3
                            hover:text-gray-900 
                             hover:bg-green-300 
                              focus:outline-none 
                              focus:shadow-outline-blue
                               focus:text-gray-900 
                               transition duration-150 
                               ease-in-out bg-green-400 text-gray-500 font-bold rounded-md px-4 py-3 ml-3 shadow-sm"
                        processing={processing}
                    >
                        تسجيل
                    </Button>
                </motion.div>
            </motion.form>
        </Guest>
    );
}
