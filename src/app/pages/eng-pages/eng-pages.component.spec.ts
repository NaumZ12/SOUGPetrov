import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngPagesComponent } from './eng-pages.component';

describe('EngPagesComponent', () => {
  let component: EngPagesComponent;
  let fixture: ComponentFixture<EngPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
