import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './slices/housesSlice';

export const store = configureStore({
    reducer: {
        housesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
