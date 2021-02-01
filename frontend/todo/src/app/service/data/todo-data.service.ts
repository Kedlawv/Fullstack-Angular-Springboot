import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeGetAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo): Observable<any> {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`
      , todo);
  }

  createTodo(username: string, todo: Todo): Observable<any> {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`
      , todo);
  }
}
