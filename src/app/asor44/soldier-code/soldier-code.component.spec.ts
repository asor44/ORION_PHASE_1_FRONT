import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierCodeComponent } from './soldier-code.component';

describe('SoldierCodeComponent', () => {
  let component: SoldierCodeComponent;
  let fixture: ComponentFixture<SoldierCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoldierCodeComponent]
    });
    fixture = TestBed.createComponent(SoldierCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
