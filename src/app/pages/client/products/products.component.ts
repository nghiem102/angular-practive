import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

}
