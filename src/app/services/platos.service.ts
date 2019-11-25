import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  public URI = 'http://localhost:8080/platos/';
  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get(this.URI);
  }
  newFood(food) {
    console.log(food);
    return this.http.post(this.URI, food);
  }
  deteteFood(id: number) {

    if (confirm('¿Esta seguro que quiere eliminar este plato ?')) {
      return this.http.delete(`${this.URI}${id}`);
    }
  }
  getOneFood(id) {
    return this.http.get(`${this.URI}${id}`);
  }

  updateFood(food) {
    return this.http.put(this.URI, food);
  }
}
