import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cajero } from '../interfaces/cajero';
@Injectable({
  providedIn: 'root'
})
export class CajerosService {

  constructor(private http: HttpClient) { }
  public URI = 'http://localhost:8080/cajeros/';
  getCajeros() {
    return this.http.get(this.URI);
  }

  gerEnableUsers() {
    return this.http.get(`${this.URI}enableUsers`);
  }
  newCajero(cajero: Cajero) {
    return this.http.post(this.URI, cajero);
  }
  deleteCajero(id: number) {
    return this.http.delete(`${this.URI}${id}`);
  }
  updateCajero(cajero: Cajero) {
    return this.http.put(this.URI, cajero);
  }
  getOne(id: number) {
    return this.http.get(this.URI + id);
  }

  enableUS(id: number) {
    return this.http.get(`${this.URI}enable/${id}`);
  }

  disableUS(id: number) {
    return this.http.get(`${this.URI}disable/${id}`);
  }
}
