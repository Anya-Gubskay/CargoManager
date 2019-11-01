import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemConsignmentNoteComponent} from './item-consignment-note.component';

describe('ItemConsignmentNoteComponent', () => {
  let component: ItemConsignmentNoteComponent;
  let fixture: ComponentFixture<ItemConsignmentNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemConsignmentNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemConsignmentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
