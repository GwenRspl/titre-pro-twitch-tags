package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;

import java.util.List;
import java.util.Optional;

public interface ChannelTagUserLinkService {

    List<ChannelTagUserLink> listAll();
    List<ChannelTagUserLink> findByTag(Long tagId);
    ChannelTagUserLink getOne(Long id);
    ChannelTagUserLink create(Long channelId, Long tagId, Long userId);
    Boolean isPresent(Long channelId, Long tagId, Long userId);
    void delete(Long id);
}
