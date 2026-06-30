import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A25LifeCyclesChild } from './a25-life-cycles-child';

describe('A25LifeCyclesChild', () => {
  let component: A25LifeCyclesChild;
  let fixture: ComponentFixture<A25LifeCyclesChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A25LifeCyclesChild],
    }).compileComponents();

    fixture = TestBed.createComponent(A25LifeCyclesChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
