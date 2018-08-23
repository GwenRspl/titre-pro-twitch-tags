package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.domain.Channel;

public interface ChannelService {

    Iterable<Channel> list();

    Channel save(Channel channel);
}
