package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;

import java.util.List;
import java.util.Optional;

public interface ChannelTagUserLinkService {

    List<ChannelTagUserLink> listAll();
    List<ChannelTagUserLink> findByChannel(Long channelId);
    List<ChannelTagUserLink> findByTag(Long tagId);
    List<ChannelTagUserLink> findByUser(Long userId);

    ChannelTagUserLink getOne(Long id);

    ChannelTagUserLink create(Long channelId, Long tagId, Long userId);

    void delete(Long id);
}
