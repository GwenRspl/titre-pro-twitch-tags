package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Tag;

import java.util.Optional;

public interface TagService {

    Iterable<Tag> listAll();

    Optional<Tag> getOne(Long id);

    Tag create(Tag tag);

    Tag update(Long id, Tag tag);

    void delete(Long id);
}
