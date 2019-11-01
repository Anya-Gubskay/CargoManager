import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators/';
import {Observable, empty, of, pipe} from 'rxjs';
import {UrlAddress} from './urlAddress';
import {ErrorService} from './error.service';
import {AuthenticationService} from './authentication.service';
import {PaginationDataModel} from './table-companies/paginationData.model';

@Injectable()
export class ConsignmentNotesService {
  constructor(private  http: HttpClient, private errorService: ErrorService, private authenticationService: AuthenticationService) {
  }

  addConsignmentNote(consignmentNote) {
    const data = this.authenticationService.tokenParse();
    return this.http.post(`${UrlAddress.BASE_URL}${UrlAddress.postConsignmentNote}${data.idUser}`, consignmentNote, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getConsignmentNoteById(id) {
    return this.http.get(`${UrlAddress.BASE_URL}${UrlAddress.getConsignmentNoteId}${id}`).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  putConsignmentNoteStatus(idConsignmentNote: string) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.putConsignmentNoteStatus}${idConsignmentNote}/status`, null).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return empty;
      }),
    );
  }

  editConsignmentNote(consignmentNote) {
    return this.http.put(`${UrlAddress.BASE_URL}${UrlAddress.editConsignmentNote}`, consignmentNote, {observe: 'response'}).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getPaginationItems(paginationParams): Observable<PaginationDataModel[]> {
    return this.http.post<PaginationDataModel[]>(`${UrlAddress.BASE_URL}${UrlAddress.getPaginationConsignmentNotesItems}`, paginationParams).pipe(
      catchError(err => {
        this.errorService.transformError(err);
        return empty;
      })
    );
  }
}
