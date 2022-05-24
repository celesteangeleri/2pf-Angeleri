import { ActionReducerMap } from "@ngrx/store";
import { CursoState } from "../core/models/curso.state";
import { SesionState } from "../core/models/sesion.state.model";
import { cursosReducer } from "./reducers/curso.reducer";
import { loginReducer } from "./reducers/login.reducer";

export interface AppState {
    sesion: SesionState;
    cursos : CursoState;
};
export const ROOT_REDUCERS : ActionReducerMap<AppState>={
    sesion : loginReducer,
    cursos : cursosReducer
}