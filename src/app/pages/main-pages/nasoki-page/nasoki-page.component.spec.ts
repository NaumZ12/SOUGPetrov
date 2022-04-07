import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasokiPageComponent } from './nasoki-page.component';

describe('NasokiPageComponent', () => {
  let component: NasokiPageComponent;
  let fixture: ComponentFixture<NasokiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasokiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasokiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
