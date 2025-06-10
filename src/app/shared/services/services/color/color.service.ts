import { Injectable } from '@angular/core';
import { Color } from '../../../model/color';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private _httpClient: HttpClient) { }

  getAllColor(): Observable<Color[]> {
    return this._httpClient.get<Color[]>('api/color').pipe(catchError(error => {
      console.error('failed to fetch color data', error);
      return throwError(() => error)
    }));
  }

  addColor(color: Color): Observable<Color> {
    return this._httpClient.post<Color>('api/color', color).pipe(catchError(error => {
      console.error('failed to add color', error);
      return throwError(() => error)
    }));
  }

  delColorById(id: string | number): Observable<any> {
    return this._httpClient.delete(`api/color/${id}`).pipe(catchError(error => {
      console.error('failed to delete color', error);
      return throwError(() => error)
    }));
  }

  updateColorById(id: string | number, color: Color): Observable<Color> {
    return this._httpClient.put<Color>(`api/color/${id}`, color).pipe(catchError(error => {
      console.error('failed to update color', error);
      return throwError(() => error)
    }));
  }
}
