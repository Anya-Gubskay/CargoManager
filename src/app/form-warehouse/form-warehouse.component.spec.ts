import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormWarehouseComponent} from './form-warehouse.component';

describe('FormWarehouseComponent', () => {
  let component: FormWarehouseComponent;
  let fixture: ComponentFixture<FormWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormWarehouseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
