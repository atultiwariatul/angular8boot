import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, from } from 'rxjs';
import { Product } from "../models/Product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = "http://localhost:8080/api/v1/products"
  constructor(private http: HttpClient) { }

  getProductDetails(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  getProducts() {
    return this.http.get(`${this.API_URL}`)
  }
}
