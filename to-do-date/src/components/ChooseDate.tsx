/** @format */

import React from "react";
import {DatePicker} from "antd";


interface IChooseDate {
    title: string;
    callback: (date: string) => void;
}

export const ChooseDate: React.FC<IChooseDate> = ({title, callback}) => {
    return (
        <>
            <div className=''>{title}</div>
            <div className=''>
                <DatePicker
                    onChange={(values: any) => {
                        console.log(values);
                        callback(values.format("YYYY-DD-MM"));
                    }}></DatePicker>
            </div>
        </>
    );
};
