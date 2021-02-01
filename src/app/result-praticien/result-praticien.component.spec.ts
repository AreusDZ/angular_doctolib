import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPraticienComponent } from './result-praticien.component';

describe('ResultPraticienComponent', () => {
  let component: ResultPraticienComponent;
  let fixture: ComponentFixture<ResultPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
