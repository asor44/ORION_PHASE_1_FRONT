import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalReglementComponent } from './internal-reglement.component';

describe('InternalReglementComponent', () => {
  let component: InternalReglementComponent;
  let fixture: ComponentFixture<InternalReglementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalReglementComponent]
    });
    fixture = TestBed.createComponent(InternalReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
