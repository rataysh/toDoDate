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
        <div className=' flex'>
            <p className=' w-10'>{task.id}</p>
            <p className='w-44'>{task.dateOfSend}</p>
            <p className='w-60'>
                {task.forecastStart} - {task.forecastEnd}
            </p>
            <p className=' w-10 flex justify-center cursor-pointer'>
                <MdDeleteOutline onClick={deleteTask} />
            </p>
        </div>
    );
};
