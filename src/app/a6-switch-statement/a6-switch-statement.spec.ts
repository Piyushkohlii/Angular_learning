import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A6SwitchStatement } from './a6-switch-statement';

describe('A6SwitchStatement', () => {
  let component: A6SwitchStatement;
  let fixture: ComponentFixture<A6SwitchStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A6SwitchStatement],
    }).compileComponents();

    fixture = TestBed.createComponent(A6SwitchStatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
