import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({ 
    nombre : new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido : new FormControl('', [Validators.required, Validators.minLength(3)]),
    edad : new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // addStudent(){
  //   let student ={ ...this.formulario.value};
    
  //   student.id = this.studentService.getStudents().length + 1;
  //   this.studentService.addStudent(student); 
    
  //  }
 addStudent(){}
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
  }

}
