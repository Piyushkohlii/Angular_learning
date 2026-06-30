import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A22QueryParams } from './a22-query-params';

describe('A22QueryParams', () => {
  let component: A22QueryParams;
  let fixture: ComponentFixture<A22QueryParams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A22QueryParams],
    }).compileComponents();

    fixture = TestBed.createComponent(A22QueryParams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
