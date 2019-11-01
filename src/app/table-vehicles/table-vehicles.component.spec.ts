import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVehiclesComponent } from './table-vehicles.component';

describe('TableVehiclesComponent', () => {
  let component: TableVehiclesComponent;
  let fixture: ComponentFixture<TableVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
