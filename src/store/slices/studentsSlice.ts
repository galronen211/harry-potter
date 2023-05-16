import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { RootState } from '../store';
import { Student } from '../../models/Student';

const STUDENTS_URL = '/students';

interface StudentsState {
    students: Student[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
};

const initialState: StudentsState = {
    students: [],
    status: 'idle'
};

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchStudents.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.students = [...action.payload];
        })
        .addCase(fetchStudents.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export const fetchStudents = createAsyncThunk('student/fetch', async (houseId: number) => {
    try {
        const response: AxiosResponse<Student[], string> = await api.get(`${STUDENTS_URL}/${houseId}.json`);

        return [...response.data];
    } catch (error: Error | any) {
        return error?.message;
    }
})

export const selectAllStudents = (state: RootState) => state.studentsReducer.students;
export const getStudentsStatus = (state: RootState) => state.studentsReducer.status;
export const getStudentsError = (state: RootState) => state.studentsReducer.error;

export default studentsSlice.reducer;
