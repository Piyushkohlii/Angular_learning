import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A18RoutingContact } from './a18-routing-contact';

describe('A18RoutingContact', () => {
  let component: A18RoutingContact;
  let fixture: ComponentFixture<A18RoutingContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A18RoutingContact],
    }).compileComponents();

    fixture = TestBed.createComponent(A18RoutingContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
