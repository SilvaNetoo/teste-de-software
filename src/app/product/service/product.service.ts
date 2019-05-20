import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'

const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * @param  {string} complement
   * @param  {HttpParams} params?
   * @returns Observable<Product>
   */
  getRequest(complement: string, params?: HttpParams): Observable<Product> {
    return this.http.get<Product>(`${environment.API_URL}/${complement}`, { headers: headers, params: params });
  }

  /**
   * @param  {T} object
   * @param  {string} complement
   * @param  {HttpParams} params?
   * @returns Observable<Product>
   */
  postRequest(complement: string, object: Product, params?: HttpParams): Observable<Product> {
    return this.http.post<Product>(`${environment.API_URL}/${complement}`, JSON.stringify(object), { headers: headers });
  }

  /**
   * @param  {T} object
   * @param  {string} complement
   * @param  {HttpParams} params?
   * @returns Observable<Product>
   */
  putRequest(complement: string, object: Product, params?: HttpParams): Observable<Product> {
    return this.http.put<Product>(`${environment.API_URL}/${complement}`, JSON.stringify(object), { headers: headers });
  }

  /**
   * @param  {string} complement
   * @param  {HttpParams} params?
   * @returns Observable<Product>
   */
  deleteRequest(complement: string, params?: HttpParams): Observable<Product> {
    return this.http.delete<Product>(`${environment.API_URL}/${complement}`, { headers: headers, params: params });
  }

}
