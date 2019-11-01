import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConsignmentNotesComponent } from './table-consignment-notes.component';

describe('TableConsignmentNotesComponent', () => {
  let component: TableConsignmentNotesComponent;
  let fixture: ComponentFixture<TableConsignmentNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConsignmentNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsignmentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
