/** @format */

import * as React from "react";
import {Dayjs} from "dayjs";
import TextField from "@mui/material/TextField";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

interface IChooseDate {
    title: string;
    callback: (date: string) => void;
}

export const ChooseDate: React.FC<IChooseDate> = ({title, callback}) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={title}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    if (newValue !== null) callback(newValue.format("DD/MM/YYYY").toString());
                }}
                renderInput={(params) => <TextField {...params} />}
            />
                    </LocalizationProvider>
    );
};
