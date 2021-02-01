package com.kedlaw.rest.webservices.restfulwebservices.todo;

import com.sun.org.apache.bcel.internal.generic.IFNULL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoHardcodedService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardcodedService.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardcodedService.findById(id);
        if (todo == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardcodedService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}") // Update
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo todo) {

        Todo todoUpdated = todoHardcodedService.save(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) {

        Todo todoSaved = todoHardcodedService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(todoSaved.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
