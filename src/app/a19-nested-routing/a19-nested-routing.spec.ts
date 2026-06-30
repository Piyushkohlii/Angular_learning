import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A19NestedRouting } from './a19-nested-routing';

describe('A19NestedRouting', () => {
  let component: A19NestedRouting;
  let fixture: ComponentFixture<A19NestedRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A19NestedRouting],
    }).compileComponents();

    fixture = TestBed.createComponent(A19NestedRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
