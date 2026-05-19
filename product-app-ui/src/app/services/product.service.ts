

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {



  private apiUrl = 'https://localhost:7158/api/Product';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/getAllProduct`
    );
  }

  addProduct(product: Product): Observable<Product> {

    return this.http.post<Product>(
      `${this.apiUrl}/AddProduct`,
      product
    );
  }

  deleteProduct(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/DeleteProduct/${id}`
    );

  }

  updateProduct(id: number, product: Product): Observable<Product> {

    return this.http.put<Product>(
      `${this.apiUrl}/UpdateProduct/${id}`,
      product
    );

  }

}
