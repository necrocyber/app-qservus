import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Models
import { ModelCompromisos } from '../models/model-compromisos';

// Enviroment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormCompromisoService {

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // NgModel set data form
  selectedCompromiso: ModelCompromisos = new ModelCompromisos();

  // Method post new compromiso
  createCompromiso(compromiso: ModelCompromisos): Observable<ModelCompromisos> {
    return this.http.post<ModelCompromisos>(environment.baseurl + 'compromisos', JSON.stringify(compromiso), this.httpOptions).
    pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Función para manejar el error en los servicios
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Obtenemos el error del cliente
      errorMessage = error.error.message;
    } else {
      // Obtenemos el error del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
