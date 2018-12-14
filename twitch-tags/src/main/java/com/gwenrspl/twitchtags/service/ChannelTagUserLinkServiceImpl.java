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

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public List<ChannelTagUserLink> listAll() {
        return this.channelTagUserLinkRepository.findAll();
    }


    @Override
    public List<ChannelTagUserLink> findByTag(Long tagId) {
        return this.channelTagUserLinkRepository.findAll().stream()
                .filter(link -> link.getTag().getId().equals(tagId))
                .collect(Collectors.toList());
    }

    @Override
    public ChannelTagUserLink getOne(final Long id) {
        Optional<ChannelTagUserLink> link = this.channelTagUserLinkRepository.findById(id);
        return link.orElse(null);
    }

    @Override
    public ChannelTagUserLink create(Long channelId, Long tagId, Long userId) {
        final ChannelTagUserLink link = new ChannelTagUserLink();
        final Channel channel = this.channelRepository.getOne(channelId);
        final Tag tag = this.tagRepository.getOne(tagId);
        final User user = this.userRepository.getOne(userId);
        if (channel == null || tag == null || user == null) {
            return null;
        }
        link.setChannel(channel);
        link.setTag(tag);
        link.setUser(user);
        return this.channelTagUserLinkRepository.save(link);
    }

    @Override
    public void delete(final Long id) {
        this.channelTagUserLinkRepository.deleteById(id);
    }

    @Override
    public Boolean isPresent(Long channelId, Long tagId, Long userId) {
        List<ChannelTagUserLink> links =  this.channelTagUserLinkRepository.findAll().stream()
                .filter(link -> link.getUser().getId().equals(userId) && link.getTag().getId().equals(tagId) && link.getChannel().getId().equals(channelId))
                .collect(Collectors.toList());
        return !links.isEmpty();
    }
}
