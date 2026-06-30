import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A15SignalStore } from './a15-signal-store';

describe('A15SignalStore', () => {
  let component: A15SignalStore;
  let fixture: ComponentFixture<A15SignalStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A15SignalStore],
    }).compileComponents();

    fixture = TestBed.createComponent(A15SignalStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
