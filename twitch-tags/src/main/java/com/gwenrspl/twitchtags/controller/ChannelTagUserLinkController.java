package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;
import com.gwenrspl.twitchtags.service.ChannelTagUserLinkService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/channel-tag-user-link")
public class ChannelTagUserLinkController {

    private ChannelTagUserLinkService service;

    public ChannelTagUserLinkController(ChannelTagUserLinkService service) {
        this.service = service;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<ChannelTagUserLink> listAll() {
        return this.service.listAll();
    }

    @GetMapping("/{id}")
    public Optional< ChannelTagUserLink> getOne(@PathVariable Long id) {
        return this.service.getOne(id);
    }

    @PostMapping("/create")
    public  ChannelTagUserLink create(@RequestBody Map<String, Long> payload) {
        Long channelId = payload.get("channelId");
        Long tagId = payload.get("tagId");
        Long userId = payload.get("channelId");
        return this.service.create(channelId, tagId, userId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }
}
