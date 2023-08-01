import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDemandeComponent } from './confirm-demande.component';

describe('ConfirmDemandeComponent', () => {
  let component: ConfirmDemandeComponent;
  let fixture: ComponentFixture<ConfirmDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDemandeComponent]
    });
    fixture = TestBed.createComponent(ConfirmDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
