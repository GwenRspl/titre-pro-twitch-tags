package com.gwenrspl.twitchtags.repository;

import com.gwenrspl.twitchtags.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
