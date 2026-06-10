import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3ButtonClickFunc } from './a3-button-click-func';

describe('A3ButtonClickFunc', () => {
  let component: A3ButtonClickFunc;
  let fixture: ComponentFixture<A3ButtonClickFunc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A3ButtonClickFunc],
    }).compileComponents();

    fixture = TestBed.createComponent(A3ButtonClickFunc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
