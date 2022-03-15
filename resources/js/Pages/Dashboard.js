import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import StageCard from "@/Components/StageCard";
import Toast from "@/Components/Toast";
import { FcAddDatabase, FcApproval, FcDepartment } from "react-icons/fc";

export default function Dashboard(props) {
    console.log(props);

    useEffect(() => {
        props.success
            ? Toast.fire({
                  icon: props.success.icon,
                  text: props.success.message,
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
            link: props.stage1 ? `/show` : "/create",
            active: true,
            className: "bg-blue-300 border-b border-gray-200",
            duration: "1000",
            icon: <FcAddDatabase className="w-12 h-12" />,
        },
        {
            title: "المرحلة الثانية",
            description: props.stage2
                ? "لقد قمت بإختيار القسم بنجاح"
                : "في هذه المرحلة عليك تحديد القسم والدراسة التي ترغب بالتسجيل فيها",
            link: !props.stage2 ? "/dept" : `/dshow`,
            active: props.stage1 ? true : false,
            className: "bg-orange-300 border-b border-gray-200",
            duration: "3000",
            icon: <FcDepartment className="w-12 h-12" />,
        },
        {
            title: "المرحلة الثالثة",
            description: props.stage2
                ? "تم قبولك اضغط لرؤية الطلبات المقبولة"
                : "في هذه المرحلة سيظهر لك القبول الخاص بك",
            link: "/information",
            active: props.stage2 ? true : false,
            className: "bg-green-300 border-b border-gray-200",
            duration: "5000",
            icon: <FcApproval className="w-12 h-12" />,
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
                        </div>
                        <div className="w-full bg-white py-8">
                            <div className="w-3/4 mx-auto grid grid-cols-3 gap-4 mt-10 h-80 shadow-sm">
                                {stages.map((stage) => (
                                    <StageCard
                                        key={stage.title}
                                        link={stage.link}
                                        title={stage.title}
                                        active={stage.active}
                                        className={stage.className}
                                        description={stage.description}
                                        duration={stage.duration}
                                        icon={stage.icon}
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
