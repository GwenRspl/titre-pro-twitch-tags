package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;

import java.util.Optional;

public interface ChannelTagUserLinkService {

    Iterable<ChannelTagUserLink> listAll();

    Optional<ChannelTagUserLink> getOne(Long id);

    ChannelTagUserLink create(ChannelTagUserLink link);

    ChannelTagUserLink update(Long id, ChannelTagUserLink link);

    void delete(Long id);
}
