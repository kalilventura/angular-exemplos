import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}products`);
  }

  getProductsError(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}productserror`);
  }

  getProductsDelay(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}productsdelay`);
  }

  getProductsId(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}productsid`);
  }

  // Nesse caso não precisamos colocar o que ele vai esperar receber pois o responseType já diz o que será retornado
  getProductName(id: string): Observable<string> {
    return this.http.get(`${this.url}products/name/${id}`,
    {responseType: 'text'});
  }

 // Uma maneira de pegar o nome do produto
  // getProductNameString(id: string): Observable<string> {
  //   return this.http.get<Product>(`${this.url}/name/${id}`).pipe(map(p => p.name));
  // }

  saveProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}products`, p);
  }
}
