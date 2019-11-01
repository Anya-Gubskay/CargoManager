import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWareOwnersComponent } from './table-ware-owners.component';

describe('TableWareOwnersComponent', () => {
  let component: TableWareOwnersComponent;
  let fixture: ComponentFixture<TableWareOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWareOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWareOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
