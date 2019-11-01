import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, catchError, tap} from 'rxjs/operators/';
import {Observable, empty, of, pipe} from 'rxjs';
import {ErrorService} from './error.service';
import {UrlAddress} from './urlAddress';
import {PaginationDataModel} from './table-companies/paginationData.model';
import {Vehicle} from './table-vehicles/vehicle.model';

@Injectable()
export class VehicleService {
  constructor(private  http: HttpClient, private errorService: ErrorService) {
  }

  getVehicleById(id) {
    return this.http.get(`${UrlAddress.BASE_URL}${UrlAddress.getVehiclesId}${id}`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      })
    );
  }

  getVehiclesByCompanyId(id): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${UrlAddress.BASE_URL}${UrlAddress.getVehiclesCompanyId}${id}`).pipe(
      map(data => {
        if (data.length === 0) {
          return [];
        } else {
          return [
            ...data.map(vehicle => {
              return this.parsingVehicles(vehicle);
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

  addVehicle(vehicle, id) {
    return this.http.post(`${UrlAddress.BASE_URL}${UrlAddress.addAndEditVehicle}${id}`, vehicle, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  editVehicle(vehicle, id) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.addAndEditVehicle}${id}`, vehicle, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  removeVehicle(id: string) {
    return this.http.delete(`${UrlAddress.BASE_URL}${UrlAddress.removeUser}${id}/vehicles`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getPaginationItems(paginationParams, id): Observable<PaginationDataModel[]> {
    return this.http.post<PaginationDataModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getPaginationVehiclesItems}${id}`, paginationParams).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return empty;
      })
    );
  }

  parsingVehicles(vehicle) {
    return `${vehicle.model} ${vehicle.numberAuto}` || '';
  }
}
