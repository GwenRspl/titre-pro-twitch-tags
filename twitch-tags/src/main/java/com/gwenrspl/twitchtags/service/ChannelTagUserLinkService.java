package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;

import java.util.Optional;

public interface ChannelTagUserLinkService {

    Iterable<ChannelTagUserLink> listAll();
    Iterable<ChannelTagUserLink> findByChannel(Long channelId);
    Iterable<ChannelTagUserLink> findByTag(Long tagId);
    Iterable<ChannelTagUserLink> findByUser(Long userId);

    Optional<ChannelTagUserLink> getOne(Long id);

    ChannelTagUserLink create(Long channelId, Long tagId, Long userId);

    void delete(Long id);
}
