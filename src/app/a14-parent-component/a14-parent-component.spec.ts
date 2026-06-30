import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A14ParentComponent } from './a14-parent-component';

describe('A14ParentComponent', () => {
  let component: A14ParentComponent;
  let fixture: ComponentFixture<A14ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A14ParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A14ParentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
