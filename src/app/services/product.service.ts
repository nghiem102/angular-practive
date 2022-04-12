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

  create(data: any): Observable<any> {
    return this.http.post(apiURL, data)
  }
  remove(id:any): Observable<any>{
    return this.http.delete(`${apiURL}/${id}`)
  }
  update(id:any , data:any): Observable<any>{
    return this.http.put(`${apiURL}/${id}`, data)
  }
}
