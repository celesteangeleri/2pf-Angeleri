import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Curso } from 'src/app/core/models/cursos';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  formulario: FormGroup;
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

  constructor(
    private studentService: StudentsService,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      edad: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      curso: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  addStudent() {
    const student = this.formulario.value;
    this.studentService.addStudent(student).subscribe(() => { 
      alert('Student added');
      this.formulario.reset();
    });
  }
}
