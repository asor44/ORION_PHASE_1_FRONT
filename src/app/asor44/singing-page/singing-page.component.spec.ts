import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingPageComponent } from './singing-page.component';

describe('SingingPageComponent', () => {
  let component: SingingPageComponent;
  let fixture: ComponentFixture<SingingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingingPageComponent]
    });
    fixture = TestBed.createComponent(SingingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
