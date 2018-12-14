package com.gwenrspl.twitchtags.controller;

import com.gwenrspl.twitchtags.message.response.ResponseMessage;
import com.gwenrspl.twitchtags.model.ChannelTagUserLink;
import com.gwenrspl.twitchtags.service.ChannelTagUserLinkService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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
    public  ChannelTagUserLink getOne(@PathVariable Long id) {
        return this.service.getOne(id);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Map<String, Long> payload) {
        Long channelId = payload.get("channelId");
        Long tagId = payload.get("tagId");
        Long userId = payload.get("userId");
        if(this.service.isPresent(channelId, tagId, userId)) {
            return new ResponseEntity<>(new ResponseMessage("Link already exists"), HttpStatus.CONFLICT);
        }
        this.service.create(channelId, tagId, userId);
        return new ResponseEntity<>(new ResponseMessage("Link created successfully"), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.service.delete(id);
        return new ResponseEntity<>(new ResponseMessage("Link deleted successfully"), HttpStatus.OK);
    }

    @GetMapping("/is-present")
    public Boolean isPresent(@RequestParam("userId") Long userId, @RequestParam("channelId") Long channelId, @RequestParam("tagId") Long tagId) {
        return this.service.isPresent(channelId, tagId, userId);
    }
}
