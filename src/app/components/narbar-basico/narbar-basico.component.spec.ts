import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarbarBasicoComponent } from './narbar-basico.component';

describe('NarbarBasicoComponent', () => {
  let component: NarbarBasicoComponent;
  let fixture: ComponentFixture<NarbarBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarbarBasicoComponent]
    });
    fixture = TestBed.createComponent(NarbarBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
