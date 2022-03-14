import React, { useState } from "react";
import Table from "@/Components/table/Table";
import Authenticated from "@/Layouts/Authenticated";

const Information = ({ columns, register, auth }) => {
    console.log(register);
    let rows = [];
    const generatedRows = register.map((item) => {
        return {
            id: item.students.id,
            fullname: item.students.fullname,
            avg: item.students.avg,
            sum: item.students.sum,
            DOB: item.students.DOB,
            branch: item.students.branch,
            gender: item.students.gender,
            dept: item.dept,
            type: item.type,
            round: item.students.round,
        };
    });

    rows = [...generatedRows];
    const cols = Object.keys(register[0].students);
    console.log(cols);
    console.log(rows);

    return (
        <Authenticated auth={auth}>
            <div
                className=" max-w-5xl mx-auto  bg-white overflow-hidden shadow-xl sm:rounded-lg"
                style={{
                    height: "80vh",
                    marginTop: "5vh",
                    paddingTop: "5vh",
                }}
            >
                <h1 className="text-2xl text-center text-gray-800 font-bold mb-4">
                    الطلبة المقبولين{" "}
                </h1>
                <div className="max-w-4xl mx-auto">
                    <Table data={rows} cols={cols} />
                </div>
            </div>
        </Authenticated>
    );
};

export default Information;
