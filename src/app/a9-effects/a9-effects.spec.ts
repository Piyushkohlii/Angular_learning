import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A9Effects } from './a9-effects';

describe('A9Effects', () => {
  let component: A9Effects;
  let fixture: ComponentFixture<A9Effects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A9Effects],
    }).compileComponents();

    fixture = TestBed.createComponent(A9Effects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
