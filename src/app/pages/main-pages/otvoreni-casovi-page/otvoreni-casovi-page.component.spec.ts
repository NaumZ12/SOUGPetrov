import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtvoreniCasoviPageComponent } from './otvoreni-casovi-page.component';

describe('OtvoreniCasoviPageComponent', () => {
  let component: OtvoreniCasoviPageComponent;
  let fixture: ComponentFixture<OtvoreniCasoviPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtvoreniCasoviPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtvoreniCasoviPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
