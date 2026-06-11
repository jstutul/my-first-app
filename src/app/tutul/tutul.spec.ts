import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutul } from './tutul';

describe('Tutul', () => {
  let component: Tutul;
  let fixture: ComponentFixture<Tutul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutul],
    }).compileComponents();

    fixture = TestBed.createComponent(Tutul);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
