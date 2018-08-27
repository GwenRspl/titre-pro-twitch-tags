package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Channel;
import com.gwenrspl.twitchtags.model.ChannelTagUserLink;
import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.model.User;
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
    public ChannelTagUserLink create(Long channelId, Long tagId, Long userId) {
        final ChannelTagUserLink link = new ChannelTagUserLink();
        final Optional<Channel> channel = this.channelRepository.findById(channelId);
        final Optional<Tag> tag = this.tagRepository.findById(tagId);
        final Optional<User> user = this.userRepository.findById(userId);
        if (!channel.isPresent() || !tag.isPresent() || !user.isPresent()) {
            return null;
        }
        link.setChannel(channel.get());
        link.setTag(tag.get());
        link.setUser(user.get());
        return this.channelTagUserLinkRepository.save(link);
    }

    @Override
    public void delete(final Long id) {
        this.channelTagUserLinkRepository.deleteById(id);
    }
}
