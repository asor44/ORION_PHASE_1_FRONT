import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCadetComponent } from './code-cadet.component';

describe('codecadetComponent', () => {
  let component: CodeCadetComponent;
  let fixture: ComponentFixture<CodeCadetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeCadetComponent]
    });
    fixture = TestBed.createComponent(CodeCadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});