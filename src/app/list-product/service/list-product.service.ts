import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product/models/product.model';

const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })

@Injectable({
    providedIn: 'root'
})
export class ListProductService {

    constructor(private http: HttpClient) { }

    /**
     * @param  {string} complement
     * @param  {HttpParams} params?
     * @returns Observable<Product>
     */
    getRequest(complement: string, params?: HttpParams): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(`${environment.API_URL}/${complement}`, { headers: headers, params: params });
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
