import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A23NavigationAPILogin } from './a23-navigation-apilogin';

describe('A23NavigationAPILogin', () => {
  let component: A23NavigationAPILogin;
  let fixture: ComponentFixture<A23NavigationAPILogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A23NavigationAPILogin],
    }).compileComponents();

    fixture = TestBed.createComponent(A23NavigationAPILogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
