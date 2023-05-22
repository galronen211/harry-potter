import { Student } from "./Student";

export interface Spell {
    id: number;
    name: string;
    users: Student[]
}