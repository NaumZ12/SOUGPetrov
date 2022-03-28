import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovostiPageComponent } from './novosti-page.component';

describe('NovostiPageComponent', () => {
  let component: NovostiPageComponent;
  let fixture: ComponentFixture<NovostiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovostiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovostiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
