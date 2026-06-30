import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A21RouteGuardProfile } from './a21-route-guard-profile';

describe('A21RouteGuardProfile', () => {
  let component: A21RouteGuardProfile;
  let fixture: ComponentFixture<A21RouteGuardProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A21RouteGuardProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(A21RouteGuardProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
