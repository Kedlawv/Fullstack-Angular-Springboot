package com.kedlaw.rest.webservices.restfulwebservices;

import com.kedlaw.rest.webservices.restfulwebservices.todo.Todo;
import com.kedlaw.rest.webservices.restfulwebservices.todo.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class RestfulWebServicesApplication implements CommandLineRunner {

	@Autowired
	private TodoService service;

	public static void main(String[] args) {
		SpringApplication.run(RestfulWebServicesApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		service.save(new Todo(0L,"kedlaw","Learn Hibernate",new Date(),false));
		service.save(new Todo(0L,"kedlaw","Learn Spring",new Date(),false));
		service.save(new Todo(0L,"kedlaw","Learn MySql",new Date(),false));
	}
}


