import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererDemandesComponent } from './gerer-demandes.component';

describe('GererDemandesComponent', () => {
  let component: GererDemandesComponent;
  let fixture: ComponentFixture<GererDemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererDemandesComponent]
    });
    fixture = TestBed.createComponent(GererDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
