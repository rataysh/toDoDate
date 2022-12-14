/** @format */

import React from "react";

export const HeadTable:React.FC = () => {
    return (
        <>
            <div className=' font-bold text-xl pb-2'>Планировщик</div>
            <div className=' flex font-semibold border-b-2 mb-2 border-blue-200'>
                <p className=' w-10'>ID</p>
                <p className=' w-44'>Дата отправки</p>
                <p className='w-60'>Прогноз на период</p>
                <p className=' w-30'>Удалить</p>
            </div>
        </>
    );
};
