import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A7ForLoops } from './a7-for-loops';

describe('A7ForLoops', () => {
  let component: A7ForLoops;
  let fixture: ComponentFixture<A7ForLoops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A7ForLoops],
    }).compileComponents();

    fixture = TestBed.createComponent(A7ForLoops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
