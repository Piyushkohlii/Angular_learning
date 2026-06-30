import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A20LazyloadingAdmin } from './a20-lazyloading-admin';

describe('A20LazyloadingAdmin', () => {
  let component: A20LazyloadingAdmin;
  let fixture: ComponentFixture<A20LazyloadingAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A20LazyloadingAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(A20LazyloadingAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
