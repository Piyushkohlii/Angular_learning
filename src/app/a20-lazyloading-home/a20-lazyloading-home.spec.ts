import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A20LazyloadingHome } from './a20-lazyloading-home';

describe('A20LazyloadingHome', () => {
  let component: A20LazyloadingHome;
  let fixture: ComponentFixture<A20LazyloadingHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A20LazyloadingHome],
    }).compileComponents();

    fixture = TestBed.createComponent(A20LazyloadingHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
