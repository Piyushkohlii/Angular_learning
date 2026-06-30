import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A5GetSetValues } from './a5-get-set-values';

describe('A5GetSetValues', () => {
  let component: A5GetSetValues;
  let fixture: ComponentFixture<A5GetSetValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A5GetSetValues],
    }).compileComponents();

    fixture = TestBed.createComponent(A5GetSetValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
