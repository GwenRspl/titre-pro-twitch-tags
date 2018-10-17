package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.service.TagService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tags")
@CrossOrigin(origins= "*")
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

    @PostMapping("/create")
    public Tag create(@RequestBody final Tag tag) {
        return this.service.create(tag);
    }

    @PutMapping("/{id}")
    public Tag update(@PathVariable Long id, @RequestBody Tag tag) {
        return this.service.update(id, tag);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }

    @GetMapping("/is-present/{tag}")
    public boolean isPresent(@PathVariable String tag) {
        return this.service.searchByNameStrict(tag) != null;
    }
}
