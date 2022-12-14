/** @format */

import React from "react";
import {CreateNewTask} from "./components/CreateNewTask";
import {HeadTable} from "./components/HeadTable";
import {TaskView} from "./components/TaskView";

import {dateApi} from "./redux/api/dateApi";

function App() {
    const {data: tasks} = dateApi.useFetchFindAllDateQuery("");

    return (
        <div className='flex flex-col h-screen justify-center items-center transition-all duration-500'>
            <div className='border-4 p-2 rounded-md border-blue-200 w-fit'>
                <HeadTable />
                {tasks?.map((task) => (
                    <TaskView key={task.id} task={task} />
                ))}
            </div>
            <CreateNewTask />
        </div>
    );
}

export default App;
