import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A17ButtonComponent } from './a17-button-component';

describe('A17ButtonComponent', () => {
  let component: A17ButtonComponent;
  let fixture: ComponentFixture<A17ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A17ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A17ButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
