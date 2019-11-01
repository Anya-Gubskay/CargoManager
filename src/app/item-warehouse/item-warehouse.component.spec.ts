import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemWarehouseComponent} from './item-warehouse.component';

describe('ItemWarehouseComponent', () => {
  let component: ItemWarehouseComponent;
  let fixture: ComponentFixture<ItemWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
