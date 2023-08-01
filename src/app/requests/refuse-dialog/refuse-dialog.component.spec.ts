import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseDialogComponent } from './refuse-dialog.component';

describe('RefuseDialogComponent', () => {
  let component: RefuseDialogComponent;
  let fixture: ComponentFixture<RefuseDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefuseDialogComponent]
    });
    fixture = TestBed.createComponent(RefuseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
