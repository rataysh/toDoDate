/** @format */

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {dateApi} from "./api/dateApi";

const rootReducer = combineReducers({
    [dateApi.reducerPath]: dateApi.reducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(dateApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
