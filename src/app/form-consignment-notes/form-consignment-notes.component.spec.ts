import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsignmentNotesComponent } from './form-consignment-notes.component';

describe('FormConsignmentNotesComponent', () => {
  let component: FormConsignmentNotesComponent;
  let fixture: ComponentFixture<FormConsignmentNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConsignmentNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsignmentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
