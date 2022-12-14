/** @format */

import React, {useState} from "react";
import {dateApi} from "../redux/api/dateApi";
import {ChooseDate} from "./ChooseDate";

export const CreateNewTask: React.FC = () => {
    const [dateOfSend, setDateOfSend] = useState<string>("");
    const [forecastStart, setForecastStart] = useState<string>("");
    const [forecastEnd, setForecastEnd] = useState<string>("");

    const [addNewDate, {}] = dateApi.useFetchAddNewDateMutation();

    const createNewTask = () => {
        dateOfSend === "" || forecastStart === "" || forecastEnd === ""
            ? alert("Заполните все даты")
            : addNewDate([dateOfSend, forecastStart, forecastEnd]);
    };

    return (
        <>
            <div className=' mt-16 text-lg font-bold '>
                Создать новую задачу
            </div>

            <div className='flex flex-col w-fit'>
                <div className='flex space-x-6 mt-8'>
                    <div>
                        <ChooseDate
                            title={"Дата отправки"}
                            callback={setDateOfSend}
                        />
                    </div>

                    <div>
                        <ChooseDate
                            title={"Начало задачи"}
                            callback={setForecastEnd}
                        />
                    </div>

                    <div>
                        <ChooseDate
                            title={"Завершение задачи"}
                            callback={setForecastStart}
                        />
                    </div>
                </div>
                <button
                    className='mt-4 h-10 p-1 self-end flex justify-center items-center bg-blue-200 rounded-sm hover:bg-blue-300 active:bg-blue-400 '
                    onClick={createNewTask}>
                    Создать
                </button>
            </div>
        </>
    );
};
