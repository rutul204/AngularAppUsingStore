import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = 'mock-data/products/data.json';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url).pipe();
  }
}
