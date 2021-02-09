package com.kedlaw.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoService service;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return service.findByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable String username, @PathVariable long id) {
        Optional<Todo> todo = service.findById(id);
        if (!todo.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<Todo>(todo.get(), HttpStatus.OK);
        // return todo.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        //  .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Optional<Todo> todo = service.deleteById(id);
        if (todo.isPresent()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}") // Update
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo todo) {

        Todo todoUpdated = service.update(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
        todo.setUsername(username);
        Todo todoSaved = service.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(todoSaved.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
