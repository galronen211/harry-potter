import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { House } from '../../models/House';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { RootState } from '../store';

const HOUSES_URL = '/houses.json';

interface HousesState {
    houses: House[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
};

const initialState: HousesState = {
    houses: [],
    status: 'idle'
};

const housesSlice = createSlice({
    name: 'houses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchHouses.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchHouses.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.houses = [...action.payload];
        })
        .addCase(fetchHouses.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export const fetchHouses = createAsyncThunk('houses/fetch', async () => {
    try {
        const response: AxiosResponse<House[], string> = await api.get(HOUSES_URL);

        return [...response.data];
    } catch (error: Error | any) {
        return error?.message;
    }
})

export const selectAllHouses = (state: RootState) => state.housesReducer.houses;
export const getHousesStatus = (state: RootState) => state.housesReducer.status;
export const getHousesError = (state: RootState) => state.housesReducer.error;

export default housesSlice.reducer;
