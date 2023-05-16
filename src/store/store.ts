import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './slices/housesSlice';
import studentsReducer from './slices/studentsSlice';

export const store = configureStore({
    reducer: {
        housesReducer,
        studentsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
