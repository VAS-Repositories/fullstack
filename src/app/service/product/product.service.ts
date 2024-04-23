import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../model/product/productDTO';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = "/produkt";
  constructor(private httpClient: HttpClient) {}

  public listProducts(): Observable<ProductDTO[]> {
    console.log('execute listProducts');
    return this.httpClient.get<ProductDTO[]>(this.url);
  }

  public getProductById(id: number): Observable<ProductDTO> {
    console.log('execute getProductById');
    return this.httpClient.get<ProductDTO>(this.url + `/${id}`);
  }
}
