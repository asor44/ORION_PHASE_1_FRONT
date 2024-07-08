import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonialMiliComponent } from './ceremonial-mili.component';

describe('CeremonialMiliComponent', () => {
  let component: CeremonialMiliComponent;
  let fixture: ComponentFixture<CeremonialMiliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeremonialMiliComponent]
    });
    fixture = TestBed.createComponent(CeremonialMiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
