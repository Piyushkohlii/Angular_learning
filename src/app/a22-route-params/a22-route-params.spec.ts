import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A22RouteParams } from './a22-route-params';

describe('A22RouteParams', () => {
  let component: A22RouteParams;
  let fixture: ComponentFixture<A22RouteParams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A22RouteParams],
    }).compileComponents();

    fixture = TestBed.createComponent(A22RouteParams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
