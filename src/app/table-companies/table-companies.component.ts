import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-table-company',
  templateUrl: './table-companies.component.html',
  styleUrls: ['./table-companies.component.less'],
})
export class TableCompaniesComponent implements OnInit {

  public p: number | string = 1;
  private items: number | string = 10;
  itemsNum: string[] = ['10', '20'];
  itemsPagination: FormGroup;
  savedParam: any;
  paginationParams: object = {p: this.p, items: this.items};
  public companiesItems$;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) {

    this.itemsPagination = new FormGroup({
      itemsSelect: new FormControl(null)
    });
  }

  changeItemsPerPage() {
    const valueSelect = this.itemsPagination.value.itemsSelect;
    this.paginationParams = {p: this.p, items: valueSelect};
    this.items = valueSelect || this.items;
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersCompaniesPagination', JSON.stringify({items: valueSelect, p: this.p}));
    this.router.navigate(['/companies', {items: this.items, p: this.p}]);
  }

  checkPaginationParams() {
    if (JSON.parse(localStorage.getItem('parametersCompaniesPagination')) === null) {
      this.setPaginationParams();
    } else {
      this.savedParam = JSON.parse(localStorage.getItem('parametersCompaniesPagination'));
      this.items = this.savedParam.items;
      this.paginationParams = {p: this.savedParam.p, items: this.savedParam.items};
      this.getPage(this.paginationParams);
      this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
    }
  }

  setPaginationParams() {
    this.items = this.route.snapshot.paramMap.get('items') || this.items;
    this.p = this.route.snapshot.paramMap.get('p') || this.p;
    this.paginationParams = {p: this.p, items: this.items};
    this.getPage(this.paginationParams);
    this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
  }

  ngOnInit() {
    this.checkPaginationParams();
  }

  getPage(paginationParams) {
    this.companiesItems$ = this.companyService.getPaginationItems(paginationParams);
  }

  pageChanged($event: number) {
    this.paginationParams = {p: $event, items: this.items};
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersCompaniesPagination', JSON.stringify({p: $event, items: this.items}));
    this.router.navigate(['/companies', {items: this.items, p: $event}]);
  }
}
