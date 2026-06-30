import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A18RoutingHome } from './a18-routing-home';

describe('A18RoutingHome', () => {
  let component: A18RoutingHome;
  let fixture: ComponentFixture<A18RoutingHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A18RoutingHome],
    }).compileComponents();

    fixture = TestBed.createComponent(A18RoutingHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
