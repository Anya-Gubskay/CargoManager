import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators/';
import {Observable, empty, of} from 'rxjs';
import {UrlAddress} from './urlAddress';
import {ErrorService} from './error.service';
import {PaginationDataModel} from './table-companies/paginationData.model';
import {DriversModel} from './table-user/drivers.model';



@Injectable()
export class UserService {
  constructor(private  http: HttpClient, private errorService: ErrorService) {
  }

  addUser(user) {
    return this.http.post(`${UrlAddress.BASE_URL}${UrlAddress.addUser}`, user , {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getUserById(id) {
    return this.http.get(`${UrlAddress.BASE_URL}${UrlAddress.getUser}${id}`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  editUser(user, id) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.editUser}${id}`, user, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  removeUser(id: string) {
    return this.http.delete(`${UrlAddress.BASE_URL}${UrlAddress.removeUser}${id}/users`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getPaginationItems(paginationParams): Observable<PaginationDataModel[]> {
    return this.http.post<PaginationDataModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getPaginationUsersItems}`, paginationParams).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return empty;
      })
    );
  }

  getDriversByCompanyId(id): Observable<DriversModel[]> {
    return this.http.get<DriversModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getUsers}${id}`).pipe(
      map(data => {
        if (data.length === 0) {
          return [];
        } else {
          return [
            ...data.map(driver => {
              return this.parsingDrivers(driver);
            })
          ];
        }
      }),
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  parsingDrivers(driver) {
    return `${driver.surname} ${driver.name} ${driver.patronymic}` || '';
  }
}
