import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  // new Todo(1, 'Learn To Dance', false, new Date()),
  // new Todo(2, 'Become an Expert at Angular', false, new Date()),
  // new Todo(3, 'Visit New Zealand', false, new Date())

  message = '';


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  private refreshTodos(): void {
    this.todoService.executeGetAllTodos('kedlaw').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    );
  }

  deleteTodo(id: number): void {
    console.log('Delete id: ' + id);
    this.todoService.deleteTodo('kedlaw', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo id:${id} has been deleted`;
        this.refreshTodos();
      }
    );

  }

  updateTodo(id: number): void {
    this.router.navigate(['todos', id]);
    console.log(id);
  }

  addTodo(): void {
    this.router.navigate(['todos', 0]);
  }
}
