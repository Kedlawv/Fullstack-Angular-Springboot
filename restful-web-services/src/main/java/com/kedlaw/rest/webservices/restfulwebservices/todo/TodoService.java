package com.kedlaw.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    TodoJpaRepository repository;

    public Todo save(Todo todo){
        return repository.save(todo);
    }
    public Todo update(Todo todo){
        return repository.save(todo);
    }

    public Optional<Todo> findById(Long id){
        return repository.findById(id);
    }

    public List<Todo> findAll(){
        return repository.findAll();
    }

    public List<Todo> findByUsername(String username){
        return repository.findByUsername(username);
    }

    public Optional<Todo> deleteById(Long id){
        Optional<Todo> todo = findById(id);
        if (todo.isPresent()) {
            repository.deleteById(id);
        }
        return todo;
    }


}
