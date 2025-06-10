
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Size } from '../../../model/size';


@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private _httpClient: HttpClient) { }

  getSizes(): Observable<Size[]> {
    return this._httpClient.get<Size[]>('/api/sizes').pipe(catchError(error => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  addSize(size: Size): Observable<Size> {
    return this._httpClient.post<Size>('api/sizes', size).pipe(catchError(error => {
      console.error('Error adding size: ', error);
      return throwError(() => error)
    })
    )
  }

  delSizeBuyId(id: string | number): Observable<any> {
    return this._httpClient.delete('/api/sizes/' + id).pipe(catchError(error => {
      console.error('error deleting size: ', error);
      return throwError(() => error)
    })
    )
  }

  updateSizeById(id: string | number, size: Size): Observable<any> {
    return this._httpClient.put<Size>('/api/size/' + id, size).pipe(catchError(error => {
      console.error('Error updating size: ', error);
      return throwError(() => error)
    })
  )}
}
