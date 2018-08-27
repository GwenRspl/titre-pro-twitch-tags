package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Channel;

import java.util.Optional;

public interface ChannelService {

    Iterable<Channel> listAll();

    Optional<Channel> getOne(Long id);

    Channel create(Channel channel);

    Channel update(Long id, Channel channel);

    void delete(Long id);
}
