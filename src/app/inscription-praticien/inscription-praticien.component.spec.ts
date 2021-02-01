import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPraticienComponent } from './inscription-praticien.component';

describe('InscriptionPraticienComponent', () => {
  let component: InscriptionPraticienComponent;
  let fixture: ComponentFixture<InscriptionPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
