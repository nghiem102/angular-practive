import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'

const apiURL = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(apiURL)
  }
  getProduct(id:any): Observable<any>{
    return this.http.get(`${apiURL}/${id}`)
  }
}
