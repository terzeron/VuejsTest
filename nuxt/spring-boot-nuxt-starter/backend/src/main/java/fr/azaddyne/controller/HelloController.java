package fr.azaddyne.controller;

import fr.azaddyne.util.TodoGen;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import fr.azaddyne.model.Todo;

import java.util.List;


@RestController
public class HelloController {

    @RequestMapping(value = "/api/hello")
    public String hello() {
        return "hello";
    }

    @RequestMapping(value = "/api/todo")
    public @ResponseBody
    List<Todo> todo(){
        return TodoGen.TodoListcreate();
    }




}
