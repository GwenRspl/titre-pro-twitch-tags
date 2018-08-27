package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.service.ChannelService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/channels")
public class ChannelController {

    private final ChannelService service;

    public ChannelController(final ChannelService channelService) {
        this.service = channelService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Channel> listAll() {
        return this.service.listAll();
    }

    @GetMapping("/{id}")
    public Optional<Channel> getOne(@PathVariable Long id) {
        return this.service.getOne(id);
    }

    @PostMapping("/create")
    public Channel create(@RequestBody final Channel channel) {
        return this.service.create(channel);
    }

    @PutMapping("/{id}")
    public Channel update(@PathVariable Long id, @RequestBody Channel channel) {
        return this.service.update(id, channel);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }

}
