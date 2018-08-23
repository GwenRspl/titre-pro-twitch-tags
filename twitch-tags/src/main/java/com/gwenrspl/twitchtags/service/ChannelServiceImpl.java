package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.domain.Channel;
import com.gwenrspl.twitchtags.repository.ChannelRepository;
import org.springframework.stereotype.Service;

@Service
public class ChannelServiceImpl implements ChannelService {

    private ChannelRepository channelRepository;

    public ChannelServiceImpl(ChannelRepository channelRepository) {
        this.channelRepository = channelRepository;
    }

    @Override
    public Iterable<Channel> list() {
        return this.channelRepository.findAll();
    }

    @Override
    public Channel save(Channel channel) {
        return this.channelRepository.save(channel);
    }
}
