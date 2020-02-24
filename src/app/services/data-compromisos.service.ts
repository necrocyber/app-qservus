import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Enviroment
import { environment } from '../../environments/environment';

// Models
import { ModelCompromisos } from '../models/model-compromisos'; 

@Injectable({
  providedIn: 'root'
})
export class DataCompromisosService {

  constructor(private http: HttpClient) { }

  getCompromisos(): Observable<HttpResponse<ModelCompromisos[]>> {
    const result = this.http.get<ModelCompromisos[]>(environment.baseurl + 'compromisos', { observe: 'response' }).
    pipe(
      retry(1), 
      catchError(this.errorHandl)
    );
    return result;
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
