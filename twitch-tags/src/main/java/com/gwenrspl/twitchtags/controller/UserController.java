package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.User;
import com.gwenrspl.twitchtags.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins= "*")
public class UserController {

    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<User> listAll() {
        return this.service.listAll();
    }

    @GetMapping("/{id}")
    public Optional<User> getOne(@PathVariable Long id) {
        return this.service.getOne(id);
    }

    @PostMapping("/create")
    public User create(@RequestBody final User user) {
        return this.service.create(user);
    }

    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        return this.service.update(id, user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }
}
