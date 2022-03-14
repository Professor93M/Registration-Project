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
import { Inertia } from "@inertiajs/inertia";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
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

    const handleClick = () => {
        Inertia.get(route("login"));
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
                    <Button
                        as={Link}
                        variants={FadeIn}
                        animate="show"
                        initial="hidden"
                        type="button"
                        handleClick={handleClick}
                        url="auth"
                        className=" border

                                                
                         border-slate-500 px-3 py-1 bg-green-400 rounded text-slate-100"
                    >
                        تسجيل دخول
                    </Button>

                    <Button
                        url="auth"
                        className=" border border-slate-500 px-3 py-1 bg-blue-400 rounded text-slate-100"
                        processing={processing}
                    >
                        تسجيل
                    </Button>
                </motion.div>
            </motion.form>
        </Guest>
    );
}
