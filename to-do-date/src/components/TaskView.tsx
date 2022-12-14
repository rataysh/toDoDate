/** @format */

import React from "react";
import {ITask} from "../models/ITask";
import {MdDeleteOutline} from "react-icons/md";
import { dateApi } from "../redux/api/dateApi";

interface ITaskView {
    task: ITask;
}

export const TaskView: React.FC<ITaskView> = ({task}) => {
    const [deleteDate, {}] = dateApi.useFetchDeleteDateMutation();

    const deleteTask = () => {
        deleteDate(task.id);
    };

    return (
        <div className='flex space-x-6'>
            <p className='w-9 sm:w-10'>{task.id}</p>
            <p className='w-22 sm:w-44'>{task.dateOfSend}</p>
            <p className='w-30 sm:w-60'>
                {task.forecastStart} - {task.forecastEnd}
            </p>
            <p className='w-8 flex justify-center cursor-pointer'>
                <MdDeleteOutline onClick={deleteTask} />
            </p>
        </div>
    );
};
