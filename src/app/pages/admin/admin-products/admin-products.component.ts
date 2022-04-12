import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: any
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data
    })
  }

  onRemove(id :any): void {
    this.ps.remove(id).subscribe(() => {
      this.getProducts()
    })
  }

}
