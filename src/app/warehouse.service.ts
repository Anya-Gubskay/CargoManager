import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators/';
import {Observable, empty, of, pipe} from 'rxjs';
import {PaginationDataModel} from './table-companies/paginationData.model';
import {UrlAddress} from './urlAddress';
import {ErrorService} from './error.service';

@Injectable()
export class WarehouseService {
  constructor(private  http: HttpClient, private errorService: ErrorService) {
  }

  postWarehouse(warehouse) {
    return this.http.post(`${UrlAddress.BASE_URL}${UrlAddress.postWarehouse}`, warehouse, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getWarehouseById(id) {
    return this.http.get(`${UrlAddress.BASE_URL}${UrlAddress.getWarehouse}${id}`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  putWarehouse(warehouse, id) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.putWarehouse}${id}`, warehouse, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  removeWarehouse(id: string) {
    return this.http.delete(`${UrlAddress.BASE_URL}${UrlAddress.removeWarehouse}${id}/warehouses`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getPaginationItems(paginationParams): Observable<PaginationDataModel[]> {
    return this.http.post<PaginationDataModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getPaginationWarehousesItems}`, paginationParams).pipe(
        catchError(err => {
          this.errorService.transformError(err);
          return empty;
        })
    );
  }
}
