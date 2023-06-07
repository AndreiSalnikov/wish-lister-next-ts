import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        user: userReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
