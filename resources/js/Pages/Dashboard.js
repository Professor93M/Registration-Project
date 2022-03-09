import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import StageCard from "@/Components/StageCard";

export default function Dashboard(props) {
    const [active, setActive] = useState(false);

    // useEffect(() => {
    //     if (props.auth.user) {
    //         setActive(true);
    //     }
    // }, []);

    const stages = [
        {
            title: "المرحلة الاولى",
            description:
                "في هذه المرحلة عليك تحديد المعلومات الخاصة بك بشكل صحيح",
            link: "/register/stage/1",
            active: true,
            className: "bg-blue-400 border-b border-gray-200",
        },
        {
            title: "المرحلة الثانية",
            description:
                "في هذه المرحلة عليك تحديد القسم الذي تريد الانضمام له والدراسة التي تريد الانضمام لها",
            link: "/register/stage/2",
            active: true,
            className: "bg-orange-300 border-b border-gray-200",
        },
        {
            title: "المرحلة الثالثة",
            description:
                "هذه المرحلة سيتم عرض معلومات القبول الخاص بك في الجامعه والقسم الذين تريد الانضمام لهم",
            link: "/register/stage/3",
            active: true,
            className: "bg-green-400 border-b border-gray-200",
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
                                        title={stage.title}
                                        description={stage.description}
                                        link={stage.link}
                                        active={stage.active}
                                        className={stage.className}
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
