import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2Events } from './a2-events';

describe('A2Events', () => {
  let component: A2Events;
  let fixture: ComponentFixture<A2Events>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2Events],
    }).compileComponents();

    fixture = TestBed.createComponent(A2Events);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
