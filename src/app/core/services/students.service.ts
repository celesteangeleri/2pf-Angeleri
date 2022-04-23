import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  public url = 'https://625eedb1873d6798e2b063f8.mockapi.io/students';
  students: Student[] = [];

  constructor(private http: HttpClient) {}

  getStudents$(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.url + `/${id}`);
  }
}
