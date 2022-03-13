import React, { useState } from "react";
import Table from "@/Components/table/Table";

const Information = ({ columns, register }) => {
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
        <div
            className="w-full mx-auto p-4"
            style={{
                backgroundColor: "#fafafa",
                padding: "20px",
                borderRadius: "10px",
                width: "72rem",
                boxShadow: "0px 0px 10px #00000029",
            }}
        >
            <Table data={rows} cols={cols} />
        </div>
    );
};

export default Information;
