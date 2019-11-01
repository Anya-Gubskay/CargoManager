import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWareOwnerComponent } from './form-ware-owner.component';

describe('FormWareOwnerComponent', () => {
  let component: FormWareOwnerComponent;
  let fixture: ComponentFixture<FormWareOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWareOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWareOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
