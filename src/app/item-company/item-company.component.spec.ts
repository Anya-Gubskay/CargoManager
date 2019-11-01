import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompanyComponent } from './item-company.component';

describe('ItemCompanyComponent', () => {
  let component: ItemCompanyComponent;
  let fixture: ComponentFixture<ItemCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
