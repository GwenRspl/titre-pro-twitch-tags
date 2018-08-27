package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;
import com.gwenrspl.twitchtags.repository.ChannelRepository;
import com.gwenrspl.twitchtags.repository.ChannelTagUserLinkRepository;
import com.gwenrspl.twitchtags.repository.TagRepository;
import com.gwenrspl.twitchtags.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChannelTagUserLinkServiceImpl implements ChannelTagUserLinkService {

    private ChannelTagUserLinkRepository channelTagUserLinkRepository;
    private UserRepository userRepository;
    private ChannelRepository channelRepository;
    private TagRepository tagRepository;

    public ChannelTagUserLinkServiceImpl(ChannelTagUserLinkRepository channelTagUserLinkRepository, UserRepository userRepository, ChannelRepository channelRepository, TagRepository tagRepository) {
        this.channelTagUserLinkRepository = channelTagUserLinkRepository;
        this.userRepository = userRepository;
        this.channelRepository = channelRepository;
        this.tagRepository = tagRepository;
    }

    @Override
    public Iterable<ChannelTagUserLink> listAll() {
        return this.channelTagUserLinkRepository.findAll();
    }

    @Override
    public Optional<ChannelTagUserLink> getOne(final Long id) {
        return this.channelTagUserLinkRepository.findById(id);
    }

    @Override
    public ChannelTagUserLink create(final ChannelTagUserLink link) {
        return this.channelTagUserLinkRepository.save(link);
    }

    @Override
    public ChannelTagUserLink update(final Long id, final ChannelTagUserLink link) {
        return null;
    }

    @Override
    public void delete(final Long id) {
        this.channelTagUserLinkRepository.deleteById(id);
    }
}
