import { createReducer, on } from "@ngrx/store";

import { CursoState } from "src/app/core/models/curso.state";
import { cargarCursosRedux, cursosCargadosRedux } from "../actions/curso.action";

export const estadoInicial: CursoState = {
    cargando: false,
    cursos: [],
}
export const cursosReducer = createReducer(
    estadoInicial,
    on (cargarCursosRedux, (state) => {
        return {...state,cargando: true}
}),
on(cursosCargadosRedux, (state, {cursos}) => {
    return {...state,cargando: false, cursos}
})
)