import { Profesor } from "./profesor";
import { Student } from "./student";

export interface Curso{
    id: number,
    nombre:string,
    descripcion:string,
    precio:number,
    fechaInicio: Date,
    fechaFin: Date,
    profesor: Profesor,
    students: Student[]
}