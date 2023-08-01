import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRequestComponent } from './export-request.component';

describe('ExportRequestComponent', () => {
  let component: ExportRequestComponent;
  let fixture: ComponentFixture<ExportRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportRequestComponent]
    });
    fixture = TestBed.createComponent(ExportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
