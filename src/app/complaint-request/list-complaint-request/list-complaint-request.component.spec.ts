import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComplaintRequestComponent } from './list-complaint-request.component';

describe('ListComplaintRequestComponent', () => {
  let component: ListComplaintRequestComponent;
  let fixture: ComponentFixture<ListComplaintRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComplaintRequestComponent]
    });
    fixture = TestBed.createComponent(ListComplaintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
