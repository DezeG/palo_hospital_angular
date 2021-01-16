import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { retry, catchError, tap } from 'rxjs/operators';

import { ResponseType } from '../models/responseType';
import { UserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  private REST_API_ENDPOINT_1 = "https://6p0oyiz6sh.execute-api.ap-southeast-2.amazonaws.com/v1/"

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "error";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  sendUserInfo(userInfo: UserInfo): Observable<any> {
    let params = JSON.stringify(userInfo)
    return this.http.post(this.REST_API_ENDPOINT_1 + "new_patient", params, {observe: 'response', responseType: 'json'}).pipe(retry(0), catchError(this.handleError), tap())
  }
}
