package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.domain.Channel;
import com.gwenrspl.twitchtags.service.ChannelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/channels")
public class ChannelController {

    private ChannelService channelService;

    public ChannelController(ChannelService channelService) {
        this.channelService = channelService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Channel> list() {
        return this.channelService.list();
    }

    @GetMapping("/save")
    public Channel save(@RequestBody Channel channel) {
        return this.channelService.save(channel);
    }
}
