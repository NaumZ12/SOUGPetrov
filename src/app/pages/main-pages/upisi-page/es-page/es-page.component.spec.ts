import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsPageComponent } from './es-page.component';

describe('EsPageComponent', () => {
  let component: EsPageComponent;
  let fixture: ComponentFixture<EsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
