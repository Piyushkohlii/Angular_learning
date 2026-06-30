import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A21RouteGuardDashboard } from './a21-route-guard-dashboard';

describe('A21RouteGuardDashboard', () => {
  let component: A21RouteGuardDashboard;
  let fixture: ComponentFixture<A21RouteGuardDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A21RouteGuardDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(A21RouteGuardDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
