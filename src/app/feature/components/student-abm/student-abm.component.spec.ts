import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAbmComponent } from './student-abm.component';

describe('StudentAbmComponent', () => {
  let component: StudentAbmComponent;
  let fixture: ComponentFixture<StudentAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
