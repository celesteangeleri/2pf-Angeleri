import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { Student } from 'src/app/core/models/student';
import { MatTable } from '@angular/material/table';
import { Observable, observable } from 'rxjs';

export interface DialogData {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  dni: number;
}
/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-student-abm',
  templateUrl: './student-abm.component.html',
  styleUrls: ['./student-abm.component.css'],
})
export class StudentAbmComponent implements OnInit {
  dataSource = this.getStudents$();
  displayColumns: string[] = [
    'id',
    'edad',
    'fullName',
    'email',
    'delete',
    'edit',
  ];
  students: Student[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  //  deleteStudent(id: number) {
  //    this.studentService.deleteStudent(id);
  //    console.log(this.getStudents$(), 'abm');
  //    this.refreshTable();
  //  }

  // getStudents() {
  //   return this.studentService.getStudents();
  // }

  // editStudent(student: any) {
  //   this.studentService.editStudent(student);

  // }
  refreshTable() {
    this.table.renderRows();
  }
  // constructor(private studentService:StudentsService) {
  //   this.students = this.studentService.getStudents();
  // }

  constructor(private studentService: StudentsService) {
    this.studentService.getStudents$().subscribe((data) => {
      this.students = data;
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }
  getStudents$() {
    return this.studentService.getStudents$();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }

  loadStudents() {
    this.studentService.getStudents$().subscribe((data: Student[]) => {
      this.students = data;
    });
  }
  addStudent() {}
  editStudent() {}
}
