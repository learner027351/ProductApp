import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList   {

  
  products = signal<Product[]>([]);

  constructor(private productService: ProductService) {

    this.loadProducts();
  }
  
  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        console.log(data);
        //this.products = data;
        this.products.set(data);
      },
      error: (err:any) => {
        console.error(err);
      }
    });
  }
}
