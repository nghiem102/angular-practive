import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any
  product: any
  constructor(
    private router: ActivatedRoute,
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.ps.getProduct(this.id).subscribe(data => {
      this.product = data
    })
  }

}
