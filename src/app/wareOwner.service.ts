import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, catchError, tap} from 'rxjs/operators/';
import {Observable, empty, of, pipe} from 'rxjs';
import {WareOwnerModel} from './table-ware-owners/ware-owner.model';
import {ErrorService} from './error.service';
import {UrlAddress} from './urlAddress';
import {PaginationDataModel} from './table-companies/paginationData.model';

@Injectable()
export class WareOwnerService {
  constructor(private  http: HttpClient, private errorService: ErrorService) {
  }

  getPaginationItems(paginationParams): Observable<PaginationDataModel[]> {
    return this.http.post<PaginationDataModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getPaginationWaresOwnersItems}`, paginationParams).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return empty;
      })
    );
  }

  getWareOwners(): Observable<WareOwnerModel[]> {
    return this.http.get<WareOwnerModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getWaresOwners}`).pipe(
      map(data => {
          return data.map(wareOwner => {
            return this.parsingWareOwners(wareOwner);
          });
        }
      ),
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getWareOwnerById(id) {
    return this.http.get(`${UrlAddress.BASE_URL}${UrlAddress.getWareOwnerId}${id}`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  addWareOwner(wareOwner) {
    return this.http.post(`${UrlAddress.BASE_URL}${UrlAddress.addWareOwner}`, wareOwner, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  editWareOwner(wareOwner, id) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.editWareOwner}${id}`, wareOwner, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  removeWareOwner(id: string) {
    return this.http.delete(`${UrlAddress.BASE_URL}${UrlAddress.removeWareOwner}${id}/wareOwner`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  parsingWareOwners(wareOwner) {
    return wareOwner.name || '';
  }
}
