import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProektiPageComponent } from './proekti-page.component';

describe('ProektiPageComponent', () => {
  let component: ProektiPageComponent;
  let fixture: ComponentFixture<ProektiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProektiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProektiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
