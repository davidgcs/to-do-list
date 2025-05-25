import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { ToDo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  constructor() {}

  get(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(environment.apiUrl).pipe(
      map(data => data.sort((a, b) => Number(a.completed) - Number(b.completed)))
    );
  }
}
