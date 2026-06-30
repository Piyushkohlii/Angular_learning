import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A27HttpMethods } from './a27-get-method';

describe('A27HttpMethods', () => {
  let component: A27HttpMethods;
  let fixture: ComponentFixture<A27HttpMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A27HttpMethods],
    }).compileComponents();

    fixture = TestBed.createComponent(A27HttpMethods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
