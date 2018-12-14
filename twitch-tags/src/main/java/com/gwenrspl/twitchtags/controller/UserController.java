package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.message.response.ResponseMessage;
import com.gwenrspl.twitchtags.model.User;
import com.gwenrspl.twitchtags.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    @PreAuthorize("hasRole('ADMIN')")
    public Iterable<User> listAll() {
        return this.service.listAll();
    }

    @GetMapping(value = {"/usernames"})
    public List<String> listAllUsernames() {
        List<String> usernames = new ArrayList<>();
        Iterable<User> users = this.service.listAll();
        for(User user : users){
            usernames.add(user.getUsername());
        }
        return usernames;
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Optional<User> getOne(@PathVariable Long id) {
        return this.service.getOne(id);
    }

    @GetMapping("/username/{username}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Optional<User> getOneByUsername(@PathVariable String username) {
        return this.service.getOneByUsername(username);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody User user) {
        this.service.update(id, user);
        return new ResponseEntity<>(new ResponseMessage("User updated successfully"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.service.delete(id);
        return new ResponseEntity<>(new ResponseMessage("User deleted successfully"), HttpStatus.OK);
    }
}
