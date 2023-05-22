import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { RootState } from '../store';
import { Student } from '../../models/Student';
import { Spell } from '../../models/Spell';

const SPELLS_URL = '/spells.json';

interface SpellsState {
    spells: Spell[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
};

const initialState: SpellsState = {
    spells: [],
    status: 'idle'
};

const spellsSlice = createSlice({
    name: 'spells',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSpells.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchSpells.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.spells = [...action.payload];
        })
        .addCase(fetchSpells.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export const fetchSpells = createAsyncThunk('spells/fetch', async () => {
    try {
        const response: AxiosResponse<Student[], string> = await api.get(SPELLS_URL);

        return [...response.data];
    } catch (error: Error | any) {
        return error?.message;
    }
})

export const selectAllSpells = (state: RootState) => state.spellsReducer.spells;
export const getSpellsStatus = (state: RootState) => state.spellsReducer.status;
export const getSpellsError = (state: RootState) => state.spellsReducer.error;

export default spellsSlice.reducer;
