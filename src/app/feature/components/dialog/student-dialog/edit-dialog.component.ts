import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/core/models/cursos';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent implements OnInit {
  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Pestañas',
      descripcion: 'Pestañas',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      precio: 100,
      profesor: {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juanperez@gmail.com',
      },
      students: [],
    },
    {
      id: 1,
      nombre: 'Maquillaje',
      descripcion: 'Maquillaje',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      precio: 100,
      profesor: {
        id: 2,
        nombre: 'Pedro',
        apellido: 'lorenzo',
        email: 'pedro@gmail.com',
      },
      students: [],
    },
    {
      id: 3,
      nombre: 'Pedicura',
      descripcion: 'Pedicura',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      precio: 100,
      profesor: {
        id: 3,
        nombre: 'lola',
        apellido: 'martinez',
        email: 'lola@gmail.com',
      },
      students: [],
    },
    {
      id: 3,
      nombre: 'Manicura',
      descripcion: 'Manicura',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      precio: 100,
      profesor: {
        id: 4,
        nombre: 'Juana',
        apellido: 'Gutierrez',
        email: 'juana@gmail.com',
      },
      students: [],
    },
  ];
  editStudentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentsService
  ) {
    this.editStudentForm = this.fb.group({
      nombre: new FormControl(this.data.nombre),
      apellido: new FormControl(this.data.apellido),
      edad: new FormControl(this.data.edad),
      email: new FormControl(this.data.email),
      curso: new FormControl(this.data.curso),
    });
  }

  ngOnInit(): void {}
  editStudentDialog() {
    let student: any = {
      id: this.data.id,
      nombre: this.editStudentForm.value.nombre,
      apellido: this.editStudentForm.value.apellido,
      edad: this.editStudentForm.value.edad,
      email: this.editStudentForm.value.email,
      curso: this.editStudentForm.value.curso,
    }
    this.studentService.editStudent(student).subscribe((student) => {
      console.log(student);
    })
    this.dialogRef.close(student);
  }

}
