package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.message.response.ResponseMessage;
import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.service.ChannelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/channels")
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

    @GetMapping("/search/name")
    public List<Channel> searchByChannelName(@RequestParam("channel") String name) {
        return this.service.searchByName(name);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable final Long id, @RequestBody final Channel channel) {
        this.service.update(id, channel);
        return new ResponseEntity<>(new ResponseMessage("Channel updated successfully"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable final Long id) {
        this.service.delete(id);
        return new ResponseEntity<>(new ResponseMessage("Channel deleted successfully"), HttpStatus.OK);
    }

    @GetMapping("/is-present/{channel}")
    public boolean isPresent(@PathVariable String channel) {
        return this.service.isPresent(channel);
    }

}
