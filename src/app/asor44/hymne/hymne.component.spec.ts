import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymneComponent } from './hymne.component';

describe('HymneComponent', () => {
  let component: HymneComponent;
  let fixture: ComponentFixture<HymneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HymneComponent]
    });
    fixture = TestBed.createComponent(HymneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
