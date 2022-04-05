import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuPageComponent } from './vu-page.component';

describe('VuPageComponent', () => {
  let component: VuPageComponent;
  let fixture: ComponentFixture<VuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
