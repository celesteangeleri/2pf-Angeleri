import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario';
@Pipe({
  name: 'conversorDatos'
})
export class ConversorDatosPipe implements PipeTransform {
  
  transform(value: any, tipo: string): unknown {
    console.log(value, 'VALUE');
    console.log(tipo, 'TIPO');
    if (value.length == 0){
      return ''
    }
    let datos: string = value 
    if (tipo == 'nombre'){
      datos = `${value.usuario.nombre} ${value.usuario.apellido}`
    }
    
    return datos
  }

}
