package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.repository.ChannelRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChannelServiceImpl implements ChannelService {

    private final ChannelRepository repository;

    public ChannelServiceImpl(final ChannelRepository channelRepository) {
        this.repository = channelRepository;
    }

    @Override
    public Iterable<Channel> listAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Channel> getOne(final Long id) {
        return this.repository.findById(id);
    }

    @Override
    public Channel create(final Channel channel) {
        return this.repository.save(channel);
    }

    @Override
    public Channel update(final Long id, final Channel channel) {
        final Optional<Channel> optChannel = this.repository.findById(id);
        if (!optChannel.isPresent()) return null;
        channel.setId(id);
        return channel;
    }

    @Override
    public void delete(final Long id) {
        this.repository.deleteById(id);
    }
}
