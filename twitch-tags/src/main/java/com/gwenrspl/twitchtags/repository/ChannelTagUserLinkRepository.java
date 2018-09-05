package com.gwenrspl.twitchtags.repository;

import com.gwenrspl.twitchtags.model.ChannelTagUserLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ChannelTagUserLinkRepository extends JpaRepository<ChannelTagUserLink, Long> {
}
