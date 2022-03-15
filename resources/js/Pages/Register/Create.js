import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "@/animations";
import FormItem from "@/Components/FormItem";
import Button from "@/Components/Button";
import Combo from "@/Components/Combo";
import { Inertia } from "@inertiajs/inertia";

const Create = (props) => {
    let year;
    let [filteredTypes, setFilteredTypes] = useState([]);
    const [disabled, setDisabled] = useState(false);

    console.log(props);
    const { data, setData, post, processing, errors, reset } = useForm({
        dept: "",
        type: "",
    });

    useEffect(() => {
        year = new Date(props.student.DOB).getFullYear();
        if (year < 1993) {
            setData({ ...data, type: "مسائي" });
            setDisabled(true);
        }
    }, []);

    const dept = [
        {
            name: "حدد القسم",
            avg: 0,
        },
        {
            name: "هندسة مدني",
            avg: 65,
            branch: ["علمي", "مهني", "احيائي", "تطبيقي"],
        },
        {
            name: "هندسة تقنيات الحاسوب",
            avg: 60,
            branch: ["علمي", "مهني", "احيائي", "تطبيقي"],
        },
        {
            name: "علوم الحاسبات",
            avg: 57,
            branch: ["علمي", "مهني", "احيائي", "تطبيقي"],
        },
        {
            name: "قانون",
            avg: 55,
            branch: ["علمي", "ادبي", "احيائي", "تطبيقي"],
        },
        {
            name: "محاسبة",
            avg: 50,
            branch: ["علمي", "ادبي", "احيائي", "تطبيقي", "مهني"],
        },
        {
            name: "إدارة واقتصاد",
            avg: 50,
            branch: ["علمي", "ادبي", "احيائي", "تطبيقي", "مهني"],
        },
        {
            name: "آداب انكليزي",
            avg: 50,
            branch: ["علمي", "ادبي", "احيائي", "تطبيقي", "مهني"],
        },
    ];

    const filteredDepts = dept.filter((item) => {
        return (
            item.avg <= parseInt(props.student.avg) && props.student.avg >= 50
        );
    });

    const type = [
        {
            name: "حدد الدراسة",
        },
        {
            name: "صباحي",
        },
        {
            name: "مسائي",
        },
    ];

    const back = () => {
        Inertia.get("/dashboard");
    };

    const handleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post("/save");
    };

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-6xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <motion.div
                            variants={SlideUp}
                            initial="hidden"
                            animate="show"
                            className="p-6"
                        >
                            <motion.h1 className="text-3xl font-bold leading-tight text-gray-900">
                                تسجيل بياناتك في القسم
                            </motion.h1>
                            <motion.p className="mt-4 text-lg leading-relaxed text-gray-600">
                                يرجى التأكد من البيانات المدخلة قبل الارسال
                            </motion.p>
                        </motion.div>
                        <div className="w-full bg-white py-8 rounded-lg">
                            <div className="w-full px-6">
                                <div className="-mx-3 ">
                                    {filteredDepts.length > 0 ? (
                                        <>
                                            <form className="px-3 grid grid-cols-2 items-center justify-center gap-x-3">
                                                <FormItem>
                                                    <Combo
                                                        className="appearance-none block w-full py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        name="dept"
                                                        label="القسم"
                                                        options={filteredDepts}
                                                        handleChange={(e) => {
                                                            handleChange(e);
                                                        }}
                                                    />
                                                </FormItem>
                                                <FormItem>
                                                    <Combo
                                                        className="appearance-none block w-full py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        name="type"
                                                        label="الدراسة"
                                                        disabled={disabled}
                                                        value={data.type}
                                                        options={type}
                                                        handleChange={(e) => {
                                                            handleChange(e);
                                                        }}
                                                    />
                                                </FormItem>
                                            </form>
                                            <div className="flex gap-x-10 justify-center">
                                                <Button
                                                    handleClick={handleSubmit}
                                                    className=" mt-6 bg-blue-500 px-4 py-2 rounded-lg text-slate-100"
                                                >
                                                    تسجيل
                                                </Button>
                                                <Button
                                                    handleClick={back}
                                                    className=" mt-6 bg-slate-500 px-4 py-2 rounded-lg text-slate-100"
                                                >
                                                    رجوع
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <motion.h1
                                                variants={FadeIn}
                                                initial="hidden"
                                                animate="show"
                                                className="text-3xl font-bold leading-tight text-gray-900"
                                            >
                                                معدلك لا يؤهلك للقبول في كليتنا
                                            </motion.h1>
                                            <Button
                                                handleClick={back}
                                                className=" mt-6 bg-slate-500 px-4 py-2 rounded-lg text-slate-100"
                                            >
                                                رجوع
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
