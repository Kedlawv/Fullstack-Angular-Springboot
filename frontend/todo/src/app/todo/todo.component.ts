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
  private todo: Todo = new Todo(0, 'init', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.todoService.retrieveTodo('kedlaw', this.id).subscribe(
      data => this.todo = data
    );
  }

}
