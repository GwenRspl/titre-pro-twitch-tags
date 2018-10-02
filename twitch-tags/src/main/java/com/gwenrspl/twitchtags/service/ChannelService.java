package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Channel;

import java.util.List;
import java.util.Optional;

public interface ChannelService {

    List<Channel> listAll();

    List<Channel> searchByName(String name);

    List<Channel> searchByTag(String tag);

    List<Channel> searchById(List<Long> id);

    List<Channel> searchByTags(List<String> tags);

    Channel getOne(Long id);

    Channel create(Channel channel);

    Channel update(Long id, Channel channel);

    Boolean isPresent(String name);

    void delete(Long id);
}
