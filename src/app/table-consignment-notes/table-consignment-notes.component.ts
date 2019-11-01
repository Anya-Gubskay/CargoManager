import {Component, OnInit} from '@angular/core';
import {ConsignmentNotesService} from '../consignment-notes.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-table-consignment-notes',
  templateUrl: './table-consignment-notes.component.html',
  styleUrls: ['./table-consignment-notes.component.less']
})
export class TableConsignmentNotesComponent implements OnInit {
  public p: number | string = 1;
  private items: number | string = 10;
  private companyId: number;
  itemsNum: string[] = ['10', '20'];
  itemsPagination: FormGroup;
  savedParam: any;
  paginationParams: object = {p: this.p, items: this.items, companyId: this.companyId};
  public consignmentNotesItems$;

  constructor(private consignmentNotesService: ConsignmentNotesService,
              private route: ActivatedRoute,
              public router: Router,
              private authenticationService: AuthenticationService) {

    this.itemsPagination = new FormGroup({
      itemsSelect: new FormControl(null)
    });
  }

  changeItemsPerPage() {
    const valueSelect = this.itemsPagination.value.itemsSelect;
    this.paginationParams = {p: this.p, items: valueSelect, companyId: this.companyId};
    this.items = valueSelect || this.items;
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersConsignmentNotesPagination', JSON.stringify({
      p: this.p,
      items: valueSelect,
      companyId: this.companyId
    }));
    this.router.navigate(['/consignment-notes', {p: this.p, items: this.items, companyId: this.companyId}]);
  }

  checkPaginationParams() {
    if (JSON.parse(localStorage.getItem('parametersConsignmentNotesPagination')) === null) {
      this.setPaginationParams();
    } else {
      this.savedParam = JSON.parse(localStorage.getItem('parametersConsignmentNotesPagination'));
      this.p = this.savedParam.p;
      this.items = this.savedParam.items;
      this.paginationParams = {p: this.p, items: this.items, companyId: this.companyId};
      this.getPage(this.paginationParams);
      this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
    }
  }

  setPaginationParams() {
    this.items = this.route.snapshot.paramMap.get('items') || this.items;
    this.p = this.route.snapshot.paramMap.get('p') || this.p;
    this.paginationParams = {p: this.p, items: this.items, companyId: this.companyId};
    this.getPage(this.paginationParams);
    this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
  }

  ngOnInit() {
    this.companyId = this.authenticationService.tokenParse().companyId;
    this.checkPaginationParams();
  }

  getPage(paginationParams) {
    this.consignmentNotesItems$ = this.consignmentNotesService.getPaginationItems(paginationParams);
  }

  pageChanged($event: number) {
    this.paginationParams = {p: $event, items: this.items, companyId: this.companyId};
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersConsignmentNotesPagination', JSON.stringify({p: $event, items: this.items, companyId: this.companyId}));
    this.router.navigate(['/consignment-notes', {items: this.items, p: $event}]);
  }
}
