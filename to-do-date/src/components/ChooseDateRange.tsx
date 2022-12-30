/** @format */
import React from "react";
import {DatePicker} from "antd";


const {RangePicker} = DatePicker;

interface IChooseDateRange {
    title: string;
    callbackStart: (date: string) => void;
    callbackEnd: (date: string) => void;
}

export const ChooseDateRange: React.FC<IChooseDateRange> = ({
    title,
    callbackStart,
    callbackEnd,
}) => {
    return (
        <>
            <div className=''>{title}</div>
            <div className=''>
                <RangePicker
                    onChange={(values: any) => {
                        callbackStart(values[0].format("YYYY-DD-MM"));
                        callbackEnd(values[1].format("YYYY-DD-MM"));
                    }}
                />
            </div>
        </>
    );
};
