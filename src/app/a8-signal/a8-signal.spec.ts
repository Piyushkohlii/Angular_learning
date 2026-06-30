import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A8Signal } from './a8-signal';

describe('A8Signal', () => {
  let component: A8Signal;
  let fixture: ComponentFixture<A8Signal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A8Signal],
    }).compileComponents();

    fixture = TestBed.createComponent(A8Signal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
