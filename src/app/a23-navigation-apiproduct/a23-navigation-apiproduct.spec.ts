import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A23NavigationAPIproduct } from './a23-navigation-apiproduct';

describe('A23NavigationAPIproduct', () => {
  let component: A23NavigationAPIproduct;
  let fixture: ComponentFixture<A23NavigationAPIproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A23NavigationAPIproduct],
    }).compileComponents();

    fixture = TestBed.createComponent(A23NavigationAPIproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
