import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A21RouteGuardLogin } from './a21-route-guard-login';

describe('A21RouteGuardLogin', () => {
  let component: A21RouteGuardLogin;
  let fixture: ComponentFixture<A21RouteGuardLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A21RouteGuardLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(A21RouteGuardLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
