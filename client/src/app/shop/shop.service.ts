import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationModel } from '../models/shared/pagination-model';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:44346/api/';

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get<PaginationModel>(this.baseUrl + 'products');
  }
}
