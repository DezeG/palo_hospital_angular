import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { retry, catchError, tap } from 'rxjs/operators';

import { ResponseType } from '../models/responseType';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private REST_API_SERVER = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/";

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

  getHospitals(page: number): Observable<ResponseType> {
    return this.http.get<ResponseType>(this.REST_API_SERVER + "hospitals/?page=" + page).pipe(retry(1), catchError(this.handleError), tap())
  }

  getIllness(page: number): Observable<ResponseType> {
    return this.http.get<ResponseType>(this.REST_API_SERVER + "illnesses/?page=" + page).pipe(retry(1), catchError(this.handleError), tap())
  }
}
