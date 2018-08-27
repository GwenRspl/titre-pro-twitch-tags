package com.gwenrspl.twitchtags.service;

import com.gwenrspl.twitchtags.model.User;

import java.util.Optional;

public interface UserService {

    Iterable<User> listAll();

    Optional<User> getOne(Long id);

    User create(User user);

    User update(Long id, User user);

    void delete(Long id);

}
