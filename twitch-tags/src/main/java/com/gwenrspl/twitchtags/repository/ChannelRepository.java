package com.gwenrspl.twitchtags.repository;

import com.gwenrspl.twitchtags.model.Channel;
import org.springframework.data.repository.CrudRepository;

public interface ChannelRepository extends CrudRepository<Channel, Long> {
}
