import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  urlApi = 'http://localhost:4000/api/cafe'

  constructor(private http: HttpClient) { }

  obtenerCafe(){
    return this.http.get(`${this.urlApi}`)
  }

}
