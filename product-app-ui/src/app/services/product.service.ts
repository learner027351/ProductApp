

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  //private apiUrl = 'http://localhost:5213/api/Product';
  private apiUrl = 'https://localhost:7158/api/Product';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/getAllProduct`
    );
  }

}
