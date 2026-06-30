import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A16AngularForms } from './a16-angular-forms';

describe('A16AngularForms', () => {
  let component: A16AngularForms;
  let fixture: ComponentFixture<A16AngularForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A16AngularForms],
    }).compileComponents();

    fixture = TestBed.createComponent(A16AngularForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
