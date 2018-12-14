package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.message.response.ResponseMessage;
import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tags")
public class TagController {

    private TagService service;

    public TagController(TagService service) {
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    public List<Tag> listAll() {
        return this.service.listAll();
    }

    @GetMapping("/{id}")
    public Tag getOne(@PathVariable Long id) {
        return this.service.getOne(id);
    }

    @GetMapping("/search-by-name/{name}")
    public Tag getOne(@PathVariable String name) {
        return this.service.searchByNameStrict(name);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody final Tag tag) {
        this.service.create(tag);
        return new ResponseEntity<>(new ResponseMessage("Tag created successfully"), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Tag tag) {
        this.service.update(id, tag);
        return new ResponseEntity<>(new ResponseMessage("Tag updated successfully"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.service.delete(id);
        return new ResponseEntity<>(new ResponseMessage("Tag deleted successfully"), HttpStatus.OK);
    }

    @GetMapping("/is-present/{tag}")
    public boolean isPresent(@PathVariable String tag) {
        return this.service.searchByNameStrict(tag) != null;
    }
}
