import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import regeneratorRuntime from "regenerator-runtime";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    const [value, setValue] = useState(globalFilter);

    const handleChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 300);

    return (
        <div className="flex w-full-justify-center p-4">
            <input
                className="focus:border focus:outline-none focus:border-slate-800 hover:outline-none hover:border hover:border-slate-800  border border-slate-800  w-80 text-slate-800/90 mx-auto rounded-lg p-2"
                type="text"
                value={value || ""}
                placeholder="إبحث ..."
                onChange={(e) => {
                    setValue(e.target.value);
                    handleChange(e.target.value);
                }}
            />
        </div>
    );
};

export default GlobalFilter;
