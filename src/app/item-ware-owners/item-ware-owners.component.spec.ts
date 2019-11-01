import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWareOwnersComponent } from './item-ware-owners.component';

describe('ItemWareOwnersComponent', () => {
  let component: ItemWareOwnersComponent;
  let fixture: ComponentFixture<ItemWareOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWareOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWareOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
