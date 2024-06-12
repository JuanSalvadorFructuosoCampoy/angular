import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoInlineComponent } from './empleado-inline.component';

describe('EmpleadoInlineComponent', () => {
  let component: EmpleadoInlineComponent;
  let fixture: ComponentFixture<EmpleadoInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
