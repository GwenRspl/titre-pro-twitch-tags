package com.gwenrspl.twitchtags.repository;

import com.gwenrspl.twitchtags.model.Tag;
import org.springframework.data.repository.CrudRepository;

public interface TagRepository extends CrudRepository<Tag, Long> {
}
