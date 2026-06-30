import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A12ComponentBinding } from './a12-component-binding';

describe('A12ComponentBinding', () => {
  let component: A12ComponentBinding;
  let fixture: ComponentFixture<A12ComponentBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A12ComponentBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(A12ComponentBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
