package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Tag;

import javax.validation.constraints.Max;
import java.util.List;
import java.util.Optional;

public interface TagService {

    List<Tag> listAll();

    List<Tag> searchByName(String name);
    Tag searchByNameStrict(String name);

    Tag getOne(Long id);

    Tag create(Tag tag);

    Tag update(Long id, Tag tag);

    void delete(Long id);
}
