/** @format */

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITask} from "../../models/ITask";

export const dateApi = createApi({
    reducerPath: "dateApi",
    tagTypes: ["Tasks"],
    baseQuery: fetchBaseQuery({baseUrl: "http://195.210.47.140:8000/"}),
    endpoints: (build) => ({
        fetchFindAllDate: build.query<ITask[], string>({
            query: () => ({
                url: "/findAllForecastPlanerItems",
            }),
            providesTags: (result) => ["Tasks"],
        }),

        fetchAddNewDate: build.mutation<any, any>({
            query: (body: Array<string>) => ({
                url: `/addNewForecastPlannerItem?dateOfSend=${body[0]}&forecastStart=${body[1]}&forecastEnd=${body[2]}`,
                method: "GET",
            }),
            invalidatesTags: ["Tasks"],
        }),

        fetchDeleteDate: build.mutation<any, any>({
            query: (itemId) => ({
                url: `/deleteForecastPlannerItemById?itemId=${itemId}`,
                method: "GET",
            }),
            invalidatesTags: ["Tasks"],
        }),
    }),
});
