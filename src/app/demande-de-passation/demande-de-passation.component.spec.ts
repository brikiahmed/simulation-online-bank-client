import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDePassationComponent } from './demande-de-passation.component';

describe('DemandeDePassationComponent', () => {
  let component: DemandeDePassationComponent;
  let fixture: ComponentFixture<DemandeDePassationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeDePassationComponent]
    });
    fixture = TestBed.createComponent(DemandeDePassationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
