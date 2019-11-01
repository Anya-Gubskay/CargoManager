import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWarehousesComponent } from './table-warehouses.component';

describe('TableWarehousesComponent', () => {
  let component: TableWarehousesComponent;
  let fixture: ComponentFixture<TableWarehousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWarehousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
