package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.service.ChannelService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/channels")
@CrossOrigin(origins= "*")
public class ChannelController {

    private final ChannelService service;

    public ChannelController(final ChannelService channelService) {
        this.service = channelService;
    }

    @GetMapping(value = {"", "/"})
    public List<Channel> listAll() {
        return this.service.listAll();
    }

    @GetMapping("/{id}")
    public Channel getOne(@PathVariable final Long id) {
        return this.service.getOne(id);
    }

    @PostMapping("/create")
    public Channel create(@RequestBody final Channel channel) {
        return this.service.create(channel);
    }

    @GetMapping("/search")
    public List<Channel> searchByTags(@RequestParam("tag") List<String> tags) {
        return this.service.searchByTags(tags);
    }

//    @PostMapping("/search/tag")
//    public List<Channel> searchByTag(@RequestBody String tag) {
//        return this.service.searchByTag(tag);
//    }

    @PostMapping("/search/name")
    public List<Channel> searchByName(@RequestBody String name) {
        return this.service.searchByName(name);
    }

    @GetMapping("/search/name")
    public List<Channel> searchByChannelName(@RequestParam("channel") String name) {
        return this.service.searchByName(name);
    }

    @PutMapping("/{id}")
    public Channel update(@PathVariable final Long id, @RequestBody final Channel channel) {
        return this.service.update(id, channel);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable final Long id) {
        this.service.delete(id);
    }

    @PostMapping("/is-present")
    public boolean isPresent(@RequestBody String name) {
        return this.service.isPresent(name);
    }

}
