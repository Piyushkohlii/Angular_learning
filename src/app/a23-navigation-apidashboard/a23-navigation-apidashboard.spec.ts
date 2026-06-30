import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A23NavigationAPIdashboard } from './a23-navigation-apidashboard';

describe('A23NavigationAPIdashboard', () => {
  let component: A23NavigationAPIdashboard;
  let fixture: ComponentFixture<A23NavigationAPIdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A23NavigationAPIdashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(A23NavigationAPIdashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
