import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4Counter } from './a4-counter';

describe('A4Counter', () => {
  let component: A4Counter;
  let fixture: ComponentFixture<A4Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A4Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(A4Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
