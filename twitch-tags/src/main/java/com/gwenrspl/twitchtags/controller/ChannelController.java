package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.service.ChannelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/channels")
public class ChannelController {

    private final ChannelService channelService;

    public ChannelController(final ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Channel> list() {
        return this.channelService.listAll();
    }

    @GetMapping("/save")
    public Channel save(@RequestBody final Channel channel) {
        return this.channelService.create(channel);
    }
}
