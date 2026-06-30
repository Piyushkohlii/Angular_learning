import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A13ChildComponent } from './a13-child-component';

describe('A13ChildComponent', () => {
  let component: A13ChildComponent;
  let fixture: ComponentFixture<A13ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A13ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A13ChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
