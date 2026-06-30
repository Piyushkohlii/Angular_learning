import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A17FormFieldComponent } from './a17-form-field-component';

describe('A17FormFieldComponent', () => {
  let component: A17FormFieldComponent;
  let fixture: ComponentFixture<A17FormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A17FormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A17FormFieldComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
