import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationCourseComponent } from './orientation-course.component';

describe('OrientationCourseComponent', () => {
  let component: OrientationCourseComponent;
  let fixture: ComponentFixture<OrientationCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrientationCourseComponent]
    });
    fixture = TestBed.createComponent(OrientationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
