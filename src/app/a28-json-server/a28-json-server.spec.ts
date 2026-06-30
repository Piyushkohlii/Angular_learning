import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A28JsonServer } from './a28-json-server';

describe('A28JsonServer', () => {
  let component: A28JsonServer;
  let fixture: ComponentFixture<A28JsonServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A28JsonServer],
    }).compileComponents();

    fixture = TestBed.createComponent(A28JsonServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
