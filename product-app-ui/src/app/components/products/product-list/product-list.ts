import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList   {

  
  products = signal<Product[]>([]);

  newProduct: Product = {

    productId: 0,
    productName: '',
    productPrice: 0,
    productDescription: '',
    productCategory: '',
    isExpire: false,
    mfg_date: new Date()

  };

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

  addProduct(): void {
    this.productService.addProduct(this.newProduct)
      .subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();
        },
        error: (err: any) => {

          console.error(err);

        }
      });
  }
  deleteProduct(id: number): void {

    this.productService
      .deleteProduct(id)
      .subscribe({

        next: () => {

          this.loadProducts();

        },

        error: (err: any) => {

          console.error(err);

        }

      });
  }
  resetForm(): void {

    this.newProduct = {

      productId: 0,
      productName: '',
      productPrice: 0,
      productDescription: '',
      productCategory: '',
      isExpire: false,
      mfg_date: new Date()

    };

  }

}
