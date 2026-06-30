import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A10Pipes } from './a10-pipes';

describe('A10Pipes', () => {
  let component: A10Pipes;
  let fixture: ComponentFixture<A10Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A10Pipes],
    }).compileComponents();

    fixture = TestBed.createComponent(A10Pipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
