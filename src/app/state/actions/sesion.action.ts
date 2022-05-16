import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/core/models/usuario";

export const loadLogin = createAction(
    "[Login] Cargar Login"
 
);

export const crearSesion = createAction(
    '[Auth Login]Sesion creada',
    props<{usuario : Usuario[] }>()
)