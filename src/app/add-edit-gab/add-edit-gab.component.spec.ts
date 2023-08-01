import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGabComponent } from './add-edit-gab.component';

describe('AddEditGabComponent', () => {
  let component: AddEditGabComponent;
  let fixture: ComponentFixture<AddEditGabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditGabComponent]
    });
    fixture = TestBed.createComponent(AddEditGabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
