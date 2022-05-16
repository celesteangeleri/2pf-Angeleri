import { Usuario } from "./usuario";

export interface SesionState{
    sesionActiva: boolean;
    usuario: Usuario[];
}