import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {


    getAll(): Observable<Product[]> {
        const url = `${environment.apiUrl}products`;
        return this.http.get<Product[]>(url);
    }

    update(productToUpdate: Product): Promise<Product> {
        const url = `${environment.apiUrl}products/${productToUpdate.id}`;
        return this.http.put<Product>(url, productToUpdate).toPromise();

    }

    addNew(productToAdd: Product): Promise<Product> {
        const url = `${environment.apiUrl}products`;
        return this.http.post<Product>(url, productToAdd).toPromise();

    }


    delete(id: number) {
        const url = `${environment.apiUrl}products/${id}`;
        return this.http.delete<Product>(url).toPromise();

    }

    constructor(private http: HttpClient) { }
}
