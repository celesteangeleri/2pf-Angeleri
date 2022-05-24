import { createAction, props } from "@ngrx/store"
import { Curso } from "src/app/core/models/cursos"

export const cargarCursosRedux = createAction(
    '[Curso] Cargar Cursos',
)

export const cursosCargadosRedux = createAction(
    '[Curso] Cursos Cargados',
    props<{ cursos: Curso[] }>()
)