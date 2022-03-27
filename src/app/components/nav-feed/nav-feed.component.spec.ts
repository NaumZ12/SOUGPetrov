import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFeedComponent } from './nav-feed.component';

describe('NavFeedComponent', () => {
  let component: NavFeedComponent;
  let fixture: ComponentFixture<NavFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
