import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemUserComponent} from './item-user.component';

describe('ItemUserComponent', () => {
  let component: ItemUserComponent;
  let fixture: ComponentFixture<ItemUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
