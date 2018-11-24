package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.Tag;
import com.gwenrspl.twitchtags.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TagServiceImpl implements TagService {

    private final TagRepository repository;

    public TagServiceImpl(final TagRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Tag> listAll() {
        return this.repository.findAll();
    }

    @Override
    public List<Tag> searchByName(String name) {
        return this.repository.findAll().stream()
                .filter(tag -> tag.getName().contains(name))
                .collect(Collectors.toList());
    }

    @Override
    public Tag searchByNameStrict(String name) {
        Optional optTag =  this.repository.findAll().stream()
                .filter(tag -> tag.getName().equals(name)).findAny();
        if(!optTag.isPresent()) return null;
        return (Tag) optTag.get();
    }

    @Override
    public Tag getOne(final Long id) {
        Optional<Tag> optionalTag = this.repository.findById(id);
        return optionalTag.orElse(null);
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
        this.repository.save(tag);
        return tag;
    }

    @Override
    public void delete(final Long id) {
        this.repository.deleteById(id);
    }
}
