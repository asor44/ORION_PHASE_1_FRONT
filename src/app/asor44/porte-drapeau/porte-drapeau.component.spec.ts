import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectComponent } from './porte-drapeau.component';

describe('PorteDrapeauComponent', () => {
  let component: PorteDrapeauComponent;
  let fixture: ComponentFixture<ObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectComponent]
    });
    fixture = TestBed.createComponent(ObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
