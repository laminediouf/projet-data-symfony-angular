import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilindexComponent } from './accueilindex.component';

describe('AccueilindexComponent', () => {
  let component: AccueilindexComponent;
  let fixture: ComponentFixture<AccueilindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
