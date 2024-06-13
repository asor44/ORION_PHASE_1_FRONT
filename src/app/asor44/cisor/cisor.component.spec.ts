import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CisorComponent } from './cisor.component';

describe('CisorComponent', () => {
  let component: CisorComponent;
  let fixture: ComponentFixture<CisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CisorComponent]
    });
    fixture = TestBed.createComponent(CisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
