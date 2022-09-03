import { API_BASE } from './../../../environments/environment';
import { IProduct } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(API_BASE, product)
  }

  read(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_BASE)
  }

  readByID(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${API_BASE}/${id}`)
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${API_BASE}/${product.id}`, product)
  }

  delete(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${API_BASE}/${id}`)
  }
}
