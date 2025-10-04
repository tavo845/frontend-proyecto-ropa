import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://:kpu2cyDnjwNRDmGHWKOvqx64YAPihU3C@dpg-d2sh64m3jp1c73aq8dp0-a.oregon-postgres.render.com/db_marcaderopa';  // Cambia esta URL por la de tu API

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
