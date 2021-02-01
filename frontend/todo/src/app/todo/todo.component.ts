import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Todo} from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private id = 0;
  public todo: Todo = new Todo(0, 'init', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id > 0) {
      this.todoService.retrieveTodo('kedlaw', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo(): void {
    if (this.id > 0) {
      this.todoService.updateTodo('kedlaw', this.id, this.todo)
        .subscribe(
          data => console.log(data)
        );
    } else {
      this.todoService.createTodo('kedlaw', this.todo)
        .subscribe(
          data => console.log(data)
        );
    }
    this.router.navigate(['todos']);
  }
}
