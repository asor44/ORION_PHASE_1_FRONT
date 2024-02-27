import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadefComponent } from './acadef.component';

describe('AcadefComponent', () => {
  let component: AcadefComponent;
  let fixture: ComponentFixture<AcadefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcadefComponent]
    });
    fixture = TestBed.createComponent(AcadefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
