import { createReducer, on } from "@ngrx/store";

import { SesionState } from "src/app/core/models/sesion.state.model";
import { crearSesion } from "../actions/sesion.action";

export const estadoInicial: SesionState = {
    sesionActiva: false,
    // usuario : {
    //     id: "",
    //     nombre: "",
    //     apellido: "",
    //     email: "",
    //     password: "",
    //     rol: "",
    // }
    usuario: []
}
export const loginReducer = createReducer(
    estadoInicial,
    // on(crearSesion, (estado, {usuario: usuario}) => {
    //     return {
    //         ...estado,
    //         sesionActiva: true,
    //         usuario
    //     }
    // })
    on(crearSesion, (estado,{usuario}) => {
        return { ...estado, sesionActiva: true, usuario }
    })
)