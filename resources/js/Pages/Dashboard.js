import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import StageCard from "@/Components/StageCard";
import Toast from "@/Components/Toast";

export default function Dashboard(props) {
    console.log(props);

    useEffect(() => {
        props.success
            ? Toast.fire({
                  icon: props.success.icon,
                  message: props.success.message,
                  title: props.success.title,
              })
            : null;
    }, [props.success]);
    const stages = [
        {
            title: "المرحلة الاولى",
            description: props.stage1
                ? "تم تسجيل معلوماتك بمرحلة التسجيل بنجاح"
                : "في هذه المرحلة عليك تحديد المعلومات الخاصة بك بشكل صحيح",
            link: props.stage1 ? `/show/${props.auth.user.id}` : "/create",
            active: true,
            className: "bg-blue-300 border-b border-gray-200",
        },
        {
            title: "المرحلة الثانية",
            description: props.stage2
                ? "تم تسجيل معلوماتك بمرحلة التسجيل بنجاح"
                : "في هذه المرحلة عليك تحديد القسم والدراسة التي ترغب بالتسجيل فيها",
            link: props.stage1 ? "/dept" : `/show/${props.auth.user.id}`,
            active: props.stage1 ? true : false,
            className: "bg-orange-300 border-b border-gray-200",
        },
        {
            title: "المرحلة الثالثة",
            description: props.stage2
                ? "تم تسجيل معلوماتك بمرحلة التسجيل بنجاح"
                : "في هذه المرحلة عليك تحديد المعلومات الخاصة بك بشكل صحيح",
            link: props.stage2 ? `/show/${props.auth.user.id}` : "/create",
            active: props.stage2 ? true : false,
            className: "bg-orange-300 border-b border-gray-200",
        },
    ];
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl text-center mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                                اهلا بك في صفحة التسجيل
                            </h1>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                للبدء قم بالضغط على مرحلة التسجيل الاولى
                            </p>
                        </div>
                        <div className="w-full bg-white py-8 rounded-lg">
                            <div className="bg-red-400 overflow-hidden w-3/4 mx-auto grid grid-cols-3 shadow-sm sm:rounded-lg">
                                {stages.map((stage) => (
                                    <StageCard
                                        key={stage.title}
                                        link={stage.link}
                                        title={stage.title}
                                        active={stage.active}
                                        className={stage.className}
                                        description={stage.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
