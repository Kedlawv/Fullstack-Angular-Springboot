import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';
import {JPA_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeGetAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number): Observable<any> {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number): Observable<any> {
    return this.http.get(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo): Observable<any> {
    return this.http.put(
      `${JPA_API_URL}/users/${username}/todos/${id}`
      , todo);
  }

  createTodo(username: string, todo: Todo): Observable<any> {
    return this.http.post(
      `${JPA_API_URL}/users/${username}/todos`
      , todo);
  }
}
