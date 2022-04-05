import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpisiPageComponent } from './upisi-page.component';

describe('UpisiPageComponent', () => {
  let component: UpisiPageComponent;
  let fixture: ComponentFixture<UpisiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpisiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpisiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
