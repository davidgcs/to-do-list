import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  constructor() {}

  get() {
    return this.http.get(environment.apiUrl);
  }
}
