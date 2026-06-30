import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A18RoutingAbout } from './a18-routing-about';

describe('A18RoutingAbout', () => {
  let component: A18RoutingAbout;
  let fixture: ComponentFixture<A18RoutingAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A18RoutingAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(A18RoutingAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
