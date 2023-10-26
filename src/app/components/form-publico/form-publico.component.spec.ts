import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublicoComponent } from './form-publico.component';

describe('FormPublicoComponent', () => {
  let component: FormPublicoComponent;
  let fixture: ComponentFixture<FormPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPublicoComponent]
    });
    fixture = TestBed.createComponent(FormPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
