import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { Student } from 'src/app/core/models/student';
import { MatTable } from '@angular/material/table';
import { Observable, observable } from 'rxjs';
import { EditDialogComponent } from '../dialog/student-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {NgxSpinnerService} from 'ngx-spinner';
export interface DialogData {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
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
  sesionActiva!: any;
  dataSource = this.getStudents$();
  displayColumns: string[] = [
    'id',
    'edad',
    'fullName',
    'email',
    'curso',
    'delete',
    'edit',
    'desinscribir'
  ];
  students: Student[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  refreshTable() {
    this.table.renderRows();
  }

  constructor(
    private spinner: NgxSpinnerService,
    private studentService: StudentsService,
    public dialog: MatDialog
  ) {
    this.studentService.getStudents$().subscribe((data) => {  
      this.students = data;
    });
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  ngOnInit(): void {
    this.spinner.show()
    this.loadStudents();
    setTimeout(() => {
      this.spinner.hide()
    },1500)
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

  editStudent() {
    this.studentService.editStudent(this.students).subscribe(() => {
      this.loadStudents();
      this.refreshTable();
    });
  }

  openDialogEdit(student: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: student,
    });
    dialogRef.afterClosed().subscribe(() => {
     
      alert('Curso modificado');
      this.loadStudents();
      this.refreshTable();
    });
  }

}
