import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableCompaniesComponent} from './table-companies.component';

describe('TableCompanyComponent', () => {
  let component: TableCompaniesComponent;
  let fixture: ComponentFixture<TableCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableCompaniesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
