import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedRequestComponent } from './archived-request.component';

describe('ArchivedRequestComponent', () => {
  let component: ArchivedRequestComponent;
  let fixture: ComponentFixture<ArchivedRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedRequestComponent]
    });
    fixture = TestBed.createComponent(ArchivedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
