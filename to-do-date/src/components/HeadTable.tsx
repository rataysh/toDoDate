/** @format */

import React from "react";

export const HeadTable:React.FC = () => {
    return (
        <>
            <div className=' font-bold text-xl pb-2'>Task manager</div>
            <div className='space-x-6 flex font-semibold border-b-2 mb-2 border-blue-200'>
                <p className='w-9 sm:w-10'>ID</p>
                <p className='w-22 sm:w-44'>Start date</p>
                <p className=' w-30 sm:w-60'>Date range</p>
                <p>Delete</p>
            </div>
        </>
    );
};
