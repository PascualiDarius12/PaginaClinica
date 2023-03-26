import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprofesionalesComponent } from './cprofesionales.component';

describe('CprofesionalesComponent', () => {
  let component: CprofesionalesComponent;
  let fixture: ComponentFixture<CprofesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprofesionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CprofesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
