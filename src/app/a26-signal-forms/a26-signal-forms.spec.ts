import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A26SignalForms } from './a26-signal-forms';

describe('A26SignalForms', () => {
  let component: A26SignalForms;
  let fixture: ComponentFixture<A26SignalForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A26SignalForms],
    }).compileComponents();

    fixture = TestBed.createComponent(A26SignalForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
