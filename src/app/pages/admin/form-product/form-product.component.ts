import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  productForm : FormGroup;
  productDetail: any
  id: any
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private ps: ProductService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      desc: new FormControl('', Validators.required),
      status: new FormControl(0, Validators.required),
    })
   }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    if(this.id) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.productDetail = data
      })
    }
    else {
      this.productDetail = {
        name: '',
        img: '',
        price: 0,
        status: 0,
        desc: ''
      }
    }
  }

  OnSubmit(obj: any): void {
    if(this.id) {
      this.ps.update(this.id, obj).subscribe();
    }
    else{
      this.ps.create(obj).subscribe()
    }
    this.route.navigate(["/admin/phones"])


  }

  onCancel():void {
    this.route.navigate(["/admin/phones"])
  }

}
