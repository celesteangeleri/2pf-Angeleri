import { ActionReducerMap } from "@ngrx/store";
import { SesionState } from "../core/models/sesion.state.model";
import { loginReducer } from "./reducers/login.reducer";

export interface AppState {
    sesion: SesionState;
};
export const ROOT_REDUCER : ActionReducerMap<AppState>={
    sesion : loginReducer
}