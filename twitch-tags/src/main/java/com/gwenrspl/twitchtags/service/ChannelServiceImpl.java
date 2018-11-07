package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.model.ChannelTagUserLink;
import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.repository.ChannelRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChannelServiceImpl implements ChannelService {

    private final ChannelRepository repository;
    private ChannelTagUserLinkService linkService;
    private TagService tagService;

    public ChannelServiceImpl(ChannelRepository repository, ChannelTagUserLinkService linkService, TagService tagService) {
        this.repository = repository;
        this.linkService = linkService;
        this.tagService = tagService;
    }

    @Override
    public List<Channel> listAll() {
        return this.repository.findAll();
    }

    @Override
    public List<Channel> searchByName(String name) {
        return this.repository.findAll().stream()
                .filter(channel -> channel.getName().toUpperCase().contains(name.toUpperCase()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Channel> searchByTag(String name) {
        Tag tag = this.tagService.searchByNameStrict(name);
        List<Long> channelIds = new ArrayList<>();
        this.linkService.findByTag(tag.getId()).stream()
                .forEach(link -> channelIds.add(link.getChannel().getId()));

        return this.repository.findAllById(channelIds);
    }

    @Override
    public List<Channel> searchById(List<Long> id) {
        return this.repository.findAllById(id);
    }

    @Override
    public List<Channel> searchByTags(List<String> tags) {
        List<Long> channelIds = new ArrayList<>();
        for(String tag : tags) {
            Tag newTag = this.tagService.searchByNameStrict(tag);
            this.linkService.findByTag(newTag.getId()).stream()
                    .forEach(link -> channelIds.add(link.getChannel().getId()));
        }
        return this.repository.findAllById(channelIds);
    }


    @Override
    public Channel getOne(final Long id) {
        Optional<Channel> optChannel = this.repository.findById(id);
        return optChannel.orElse(null);
    }

    @Override
    public Channel create(final Channel channel) {
        return this.repository.save(channel);
    }

    @Override
    public Channel update(final Long id, final Channel channel) {
        final Optional<Channel> optChannel = this.repository.findById(id);
        if (!optChannel.isPresent()) return null;
        if (channel.getName()== null) channel.setName(optChannel.get().getName());
        if (channel.getAvatar()== null) channel.setAvatar(optChannel.get().getAvatar());
        if (channel.getFollowers()== null) channel.setFollowers(optChannel.get().getFollowers());
        if (channel.getLanguage()== null) channel.setLanguage(optChannel.get().getLanguage());
        if (channel.getStatus()== null) channel.setStatus(optChannel.get().getStatus());
        if (channel.getUrl()== null) channel.setUrl(optChannel.get().getUrl());
        if (channel.getChannelTagUserLinks()== null) channel.setChannelTagUserLinks(optChannel.get().getChannelTagUserLinks());
        channel.setId(id);
        this.repository.save(channel);
        return channel;
    }

    @Override
    public Boolean isPresent(String name) {
        Optional<Channel> channelToFind = this.repository.findAll().stream()
                .filter(channel -> channel.getName().toLowerCase().equals(name.toLowerCase()))
                .findAny();
        return channelToFind.isPresent();
    }

    @Override
    public void delete(final Long id) {
        this.repository.deleteById(id);
    }
}
