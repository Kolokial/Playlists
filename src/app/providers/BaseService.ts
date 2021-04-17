import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class BaseService {
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  protected httpGet<T>(url: string): Observable<T> {
    if (!url) {
      return throwError('Please provide an URL.');
    }

    return this._http.get<T>(url, this._httpOptions);
  }
}
