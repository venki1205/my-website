import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIDComponent } from './student-id.component';

describe('StudentIDComponent', () => {
  let component: StudentIDComponent;
  let fixture: ComponentFixture<StudentIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
