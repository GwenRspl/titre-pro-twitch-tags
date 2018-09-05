package com.gwenrspl.twitchtags.repository;

import com.gwenrspl.twitchtags.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
