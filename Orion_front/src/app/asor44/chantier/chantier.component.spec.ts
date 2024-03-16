import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantierComponent } from './chantier.component';

describe('ChantierComponent', () => {
  let component: ChantierComponent;
  let fixture: ComponentFixture<ChantierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChantierComponent]
    });
    fixture = TestBed.createComponent(ChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
