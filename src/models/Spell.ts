import { SelectionObject } from "./SelectionObject";
import { Student } from "./Student";

export interface Spell extends SelectionObject {
    users: Student[]
}