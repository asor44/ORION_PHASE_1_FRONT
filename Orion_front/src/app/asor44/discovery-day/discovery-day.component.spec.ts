import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryDayComponent } from './discovery-day.component';

describe('DiscoveryDayComponent', () => {
  let component: DiscoveryDayComponent;
  let fixture: ComponentFixture<DiscoveryDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoveryDayComponent]
    });
    fixture = TestBed.createComponent(DiscoveryDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
