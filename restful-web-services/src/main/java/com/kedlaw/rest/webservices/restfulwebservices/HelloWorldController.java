package com.kedlaw.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld(){
        return "Hello World!";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World from Bean!");
    }

    @GetMapping("/hello-name-param/{name}")
    public String helloNameParameter(@PathVariable String name){
        return "Hello " + name;
    }

    @GetMapping("/hello-bean-name/{name}")
    public HelloWorldBean helloBeanName(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello %s",name));
    }
}
