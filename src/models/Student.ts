import { SelectionObject } from "./SelectionObject";

export type StudentGender = 'male' | 'female';

export interface Student extends SelectionObject {
    houseId: number;
    age: number;
    admissionDate: Date;
    gender: StudentGender;
};