import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatizationService {

  private apiUrl = 'http://localhost:8085/iCodeTest/save';

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }


}
