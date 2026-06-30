import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A17CardComponent } from './a17-card-component';

describe('A17CardComponent', () => {
  let component: A17CardComponent;
  let fixture: ComponentFixture<A17CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A17CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A17CardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
