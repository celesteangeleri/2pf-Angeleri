import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  options: FormGroup
  cursoControl = new FormControl('');
  formulario: FormGroup = new FormGroup({ 
    nombre : new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido : new FormControl('', [Validators.required, Validators.minLength(3)]),
    edad : new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
  
  });


  constructor(private studentService: StudentsService, fb : FormBuilder) {
  this.options = fb.group({
    cursos: this.cursoControl})

}

  ngOnInit(): void {
  }
   addStudent(){
    const student = this.formulario.value;
    this.studentService.addStudent(student).subscribe(
      (student) => {
        console.log(student);
        alert('Student added');	
      }
    )
  
   }
     

   }
  // addStudent(){
  //   let student ={ ...this.formulario.value};
    
  //   student.id = this.studentService.getStudents().length + 1;
  //   this.studentService.addStudent(student); 
    
  //  }

