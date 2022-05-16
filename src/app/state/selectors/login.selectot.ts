import { createSelector } from "@ngrx/store";
import { SesionState } from "src/app/core/models/sesion.state.model";
import { AppState } from "../app.state";

export const selectorSesion = (state: AppState) => state.sesion;
export const selectorSesionActiva = createSelector(
    selectorSesion,
    (state: SesionState) => state
    )