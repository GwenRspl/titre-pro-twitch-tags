package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagServiceImpl implements TagService {

    private final TagRepository repository;

    public TagServiceImpl(final TagRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<Tag> listAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Tag> getOne(final Long id) {
        return this.repository.findById(id);
    }

    @Override
    public Tag create(final Tag tag) {
        return this.repository.save(tag);
    }

    @Override
    public Tag update(final Long id, final Tag tag) {
        final Optional<Tag> optTag = this.repository.findById(id);
        if (!optTag.isPresent()) return null;
        tag.setId(id);
        return tag;
    }

    @Override
    public void delete(final Long id) {
        this.repository.deleteById(id);
    }
}
