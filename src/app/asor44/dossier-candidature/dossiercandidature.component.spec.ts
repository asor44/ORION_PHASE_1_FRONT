import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dossiercandidatureComponent } from './dossiercandidature.component';

describe('dossiercandidatureComponent', () => {
  let component: dossiercandidatureComponent;
  let fixture: ComponentFixture<dossiercandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dossiercandidatureComponent]
    });
    fixture = TestBed.createComponent(dossiercandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});