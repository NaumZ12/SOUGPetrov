import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasokaComponent } from './nasoka.component';

describe('NasokaComponent', () => {
  let component: NasokaComponent;
  let fixture: ComponentFixture<NasokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasokaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
