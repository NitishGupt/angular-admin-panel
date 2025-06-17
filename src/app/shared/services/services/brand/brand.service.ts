import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Brand } from '../../../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _httpClient: HttpClient) { }

  getBrand(): Observable<Brand[]> {
    return this._httpClient.get<Brand[]>('api/brand').pipe(catchError(error => {
      console.error('failed to fetch brand data', error);
      return throwError(() => error)
    })
    )
  };


  addBrand(brand: Brand): Observable<Brand> {
    return this._httpClient.post<Brand>('api/brand', brand).pipe(catchError(error => {
      console.error('failed to add brand', error);
      return throwError(() => error)
    })
    )
  }

  delBrandBuyId(id: string | number): Observable<any> {
    return this._httpClient.delete('api/brand/' + id).pipe(catchError(error => {
      console.error('error deleting brand: ', error);
      return throwError(() => error)
    })
    )
  }
  
  updateBrandById(id: string | number, brand: Brand): Observable<Brand> {
    return this._httpClient.put<Brand>('api/brand/' + id, brand).pipe(catchError(error => {
      console.error('error updating brand: ', error);
      return throwError(() => error)
    })
    )
  }
}
