import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators/';
import {Observable, empty, of, pipe} from 'rxjs';
import {PaginationDataModel} from './table-companies/paginationData.model';
import {UrlAddress} from './urlAddress';
import {ErrorService} from './error.service';

@Injectable()
export class CompanyService {
  constructor(private  http: HttpClient, private errorService: ErrorService) {
  }

  postCompany(company) {
    return this.http.post(`${UrlAddress.BASE_URL}${UrlAddress.postCompany}`, company, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getCompanyById(id) {
    return this.http.get(`${UrlAddress.BASE_URL}${UrlAddress.getCompaniesId}${id}`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  putCompany(company, id) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.putCompany}${id}`, company, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  putCompanyStatus(idCompany: string) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.putCompanyStatus}${idCompany}/status`, null).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return empty;
      }),
    );
  }

  getPaginationItems(paginationParams): Observable<PaginationDataModel[]> {
    return this.http.post<PaginationDataModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getPaginationCompaniesItems}`, paginationParams).pipe(
        catchError(err => {
          this.errorService.transformError(err);
          return empty;
        })
    );
  }
}
