import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CserviciosComponent } from './cservicios.component';

describe('CserviciosComponent', () => {
  let component: CserviciosComponent;
  let fixture: ComponentFixture<CserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
