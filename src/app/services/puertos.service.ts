import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuertosService {
  private http= inject(HttpClient)
 
  private URL_BASE= "https://localhost:7044/puertos";

getPuertos(){
  return this.http.get(this.URL_BASE).pipe(
    first(),
    map( (data:any) => data)
  )
}

CrearPuerto(data: any): Observable<any>{
  return this.http.post(this.URL_BASE, data)
   
}

}
