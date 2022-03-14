import React, { useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "@/animations";
import FormItem from "@/Components/FormItem";
import Button from "@/Components/Button";
import Combo from "@/Components/Combo";

const Show = (props) => {
    console.log(props.student);
    const { data, setData, post, processing, errors, reset } = useForm({
        idn: props.student.idn || "",
        fullname: props.student.fullname || "",
        dob: props.student.DOB || "",
        gender: props.student.gender || "",
        avg: props.student.avg || "",
        branch: props.student.branch || "",
        sum: props.student.sum || "",
        n_lessons: props.student.n_lessons || "",
        round: props.student.round || "",
        year: props.student.year || "",
        _method: "PUT",
    });

    useEffect(() => {
        const avg = parseInt(data.sum) / parseInt(data.n_lessons);
        setData({ ...data, avg: avg.toFixed(2) });
    }, [data.sum, data.n_lessons]);

    const gender = [
        {
            name: "ذكر",
        },
        {
            name: "أنثى",
        },
    ];
    const branch = [
        {
            name: "علمي",
        },
        {
            name: "ادبي",
        },
    ];
    const round = [
        {
            name: "الاول",
        },
        {
            name: "الثاني",
        },
        {
            name: "الدور التكميلي",
        },
    ];

    const handleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post("/update");
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
                                تسجيل بياناتك في الكلية
                            </motion.h1>
                            <motion.p className="mt-4 text-lg leading-relaxed text-gray-600">
                                يرجى التأكد من البيانات المدخلة قبل الارسال
                            </motion.p>
                        </motion.div>
                        <div className="w-full bg-white py-8 rounded-lg">
                            <div className="w-full px-6">
                                <div className="-mx-3">
                                    <form className="px-3 grid grid-cols-4 items-center justify-center gap-x-3">
                                        <FormItem
                                            name="fullname"
                                            type="text"
                                            className="col-span-2"
                                            label="الاسم الرباعي واللقب"
                                            handleChange={handleChange}
                                            value={data.fullname}
                                        />
                                        <FormItem
                                            name="dob"
                                            type="date"
                                            label="تاريخ الميلاد"
                                            handleChange={handleChange}
                                            value={data.dob}
                                        />
                                        <FormItem>
                                            <Combo
                                                className="appearance-none block w-full py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                name="gender"
                                                value={data.gender}
                                                add={"true"}
                                                label="الجنس"
                                                options={gender}
                                                handleChange={(e) => {
                                                    handleChange(e);
                                                }}
                                            />
                                        </FormItem>
                                        <div className="col-span-4 gap-4 grid grid-cols-4 border-2 p-3 rounded-lg mt-3">
                                            <FormItem
                                                className="col-span-2"
                                                name="idn"
                                                type="number"
                                                label="الرقم الامتحاني"
                                                handleChange={handleChange}
                                                value={data.idn}
                                            />
                                            <FormItem>
                                                <Combo
                                                    className="appearance-none block w-full py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    name="branch"
                                                    add={"true"}
                                                    value={data.branch}
                                                    label="الفرع"
                                                    options={branch}
                                                    handleChange={(e) => {
                                                        handleChange(e);
                                                    }}
                                                />
                                            </FormItem>
                                            <FormItem>
                                                <Combo
                                                    className="appearance-none block w-full py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    name="round"
                                                    add={"true"}
                                                    value={data.round}
                                                    label="الدور"
                                                    options={round}
                                                    handleChange={(e) => {
                                                        handleChange(e);
                                                    }}
                                                />
                                            </FormItem>
                                            <FormItem
                                                name="sum"
                                                type="number"
                                                label="المجموع"
                                                handleChange={handleChange}
                                                value={data.sum}
                                            />
                                            <FormItem
                                                name="n_lessons"
                                                type="number"
                                                label="عدد الدروس"
                                                handleChange={handleChange}
                                                value={data.n_lessons}
                                            />
                                            <FormItem
                                                name="avg"
                                                type="number"
                                                label="المعدل"
                                                max="100"
                                                min="50"
                                                value={data.avg}
                                                disabled
                                            />
                                            <FormItem
                                                name="year"
                                                type="number"
                                                label="سنة التخرج"
                                                handleChange={handleChange}
                                                value={data.year}
                                            />
                                        </div>
                                    </form>

                                    <Button
                                        handleClick={handleSubmit}
                                        className=" mt-6 bg-blue-500 px-4 py-2 rounded-lg text-slate-100"
                                    >
                                        تسجيل
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
