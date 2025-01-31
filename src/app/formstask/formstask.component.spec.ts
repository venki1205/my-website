import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstaskComponent } from './formstask.component';

describe('FormstaskComponent', () => {
  let component: FormstaskComponent;
  let fixture: ComponentFixture<FormstaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
