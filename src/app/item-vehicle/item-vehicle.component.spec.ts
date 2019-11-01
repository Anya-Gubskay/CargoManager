import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemVehicleComponent} from './item-vehicle.component';

describe('ItemVehicleComponent', () => {
  let component: ItemVehicleComponent;
  let fixture: ComponentFixture<ItemVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemVehicleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
