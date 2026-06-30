import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A24SignalRouting } from './a24-signal-routing';

describe('A24SignalRouting', () => {
  let component: A24SignalRouting;
  let fixture: ComponentFixture<A24SignalRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A24SignalRouting],
    }).compileComponents();

    fixture = TestBed.createComponent(A24SignalRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
