import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintRequestComponent } from './add-complaint-request.component';

describe('AddComplaintRequestComponent', () => {
  let component: AddComplaintRequestComponent;
  let fixture: ComponentFixture<AddComplaintRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComplaintRequestComponent]
    });
    fixture = TestBed.createComponent(AddComplaintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
