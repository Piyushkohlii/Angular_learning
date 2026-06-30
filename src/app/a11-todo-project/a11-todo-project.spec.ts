import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A11TodoProject } from './a11-todo-project';

describe('A11TodoProject', () => {
  let component: A11TodoProject;
  let fixture: ComponentFixture<A11TodoProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A11TodoProject],
    }).compileComponents();

    fixture = TestBed.createComponent(A11TodoProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
